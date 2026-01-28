import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pagesDir = path.join(root, "src", "pages");

function walk(dir) {
  /** @type {string[]} */
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".astro")) out.push(full);
  }
  return out;
}

/**
 * Very small, intentionally strict check:
 * - every route must define `const seo = { ... }`
 * - and include both `title:` and `description:`
 */
function validateFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const hasSeoConst = /const\s+seo\s*=\s*\{/.test(src);
  if (!hasSeoConst) {
    return { ok: false, reason: "missing `const seo = { ... }`" };
  }

  // grab the first seo object block (good enough for our pages)
  const m = src.match(/const\s+seo\s*=\s*\{([\s\S]*?)\n\};/);
  const block = m?.[1] ?? src;

  const hasTitle = /\btitle\s*:/.test(block);
  const hasDescription = /\bdescription\s*:/.test(block);

  if (!hasTitle || !hasDescription) {
    return {
      ok: false,
      reason: `seo missing ${[!hasTitle ? "title" : null, !hasDescription ? "description" : null]
        .filter(Boolean)
        .join("+")}`,
    };
  }

  return { ok: true };
}

const files = walk(pagesDir);
const failures = [];

for (const f of files) {
  const res = validateFile(f);
  if (!res.ok) failures.push({ file: path.relative(root, f), reason: res.reason });
}

if (failures.length) {
  console.error("SEO validation failed:\n");
  for (const f of failures) {
    console.error(`- ${f.file}: ${f.reason}`);
  }
  console.error("\nFix: ensure every page defines `const seo = { title: ..., description: ... }`.");
  process.exit(1);
}

console.log(`SEO validation OK (${files.length} page(s)).`);
