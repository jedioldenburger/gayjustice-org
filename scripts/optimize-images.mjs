import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, "pictures");
const publicDir = path.join(projectRoot, "public");
const outDir = path.join(publicDir, "pictures");

const shouldSkipWebp = (fileName) => {
  const lower = fileName.toLowerCase();
  return (
    lower === "favicon.ico" ||
    lower === "site.webmanifest" ||
    lower.startsWith("favicon-") ||
    lower.startsWith("android-chrome-") ||
    lower.startsWith("apple-touch-icon")
  );
};

const isImageFile = (fileName) =>
  /\.(png|jpe?g|webp)$/i.test(fileName) &&
  !fileName.startsWith(".") &&
  !shouldSkipWebp(fileName);

const webpTargetFor = (fileName) => {
  const parsed = path.parse(fileName);
  return `${parsed.name}.webp`;
};

const getWebpOptions = (fileName) => {
  const lower = fileName.toLowerCase();

  // Logos and small UI assets benefit from a bit higher quality.
  if (lower.includes("logo")) {
    return { maxWidth: 512, quality: 90 };
  }

  // Photos.
  return { maxWidth: 960, quality: 82 };
};

async function ensureDirs() {
  await fs.mkdir(outDir, { recursive: true });
}

async function optimizeToWebp() {
  const entries = await fs.readdir(sourceDir);
  const imageFiles = entries.filter(isImageFile);

  if (!imageFiles.length) {
    console.log("No images found in pictures/");
    return { logoSourcePath: null };
  }

  let logoSourcePath = null;

  for (const fileName of imageFiles) {
    const { maxWidth, quality } = getWebpOptions(fileName);
    const inputPath = path.join(sourceDir, fileName);
    const outputPath = path.join(outDir, webpTargetFor(fileName));

    if (fileName.toLowerCase().includes("stvg-logo")) {
      logoSourcePath = inputPath;
    }

    const image = sharp(inputPath, { failOnError: false });
    const meta = await image.metadata();

    const pipeline = sharp(inputPath, { failOnError: false })
      .rotate()
      .resize({
        width: meta.width && meta.width > maxWidth ? maxWidth : undefined,
        withoutEnlargement: true,
      })
      .webp({ quality });

    await pipeline.toFile(outputPath);
    console.log(`✓ ${path.relative(projectRoot, outputPath)}`);
  }

  return { logoSourcePath };
}

async function generateFavicon(logoSourcePath) {
  const fallback = path.join(sourceDir, "stvg-logo.png");
  const logoPath = logoSourcePath ?? fallback;

  try {
    await fs.access(logoPath);
  } catch {
    console.warn(
      "No logo found to generate favicon.ico (expected stvg-logo.* in pictures/)"
    );
    return;
  }

  // Prefer user-provided favicon.ico in pictures/ if present.
  const providedIco = path.join(sourceDir, "favicon.ico");
  try {
    await fs.access(providedIco);
    const outPath = path.join(publicDir, "favicon.ico");
    await fs.copyFile(providedIco, outPath);
    console.log(`✓ ${path.relative(projectRoot, outPath)}`);
    return;
  } catch {
    // fall back to generating
  }

  // Generate multi-size ICO from PNG buffers.
  const sizes = [16, 32, 48, 64, 128];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(logoPath, { failOnError: false })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push(buf);
  }

  const icoBuffer = await pngToIco(pngBuffers);
  const outPath = path.join(publicDir, "favicon.ico");
  await fs.writeFile(outPath, icoBuffer);
  console.log(`✓ ${path.relative(projectRoot, outPath)}`);
}

async function copyProvidedFavicons() {
  const candidates = [
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touch-icon.png",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "site.webmanifest",
  ];

  for (const fileName of candidates) {
    const src = path.join(sourceDir, fileName);
    const dest = path.join(publicDir, fileName);
    try {
      await fs.access(src);
    } catch {
      continue;
    }
    await fs.copyFile(src, dest);
    console.log(`✓ ${path.relative(projectRoot, dest)}`);
  }
}

async function cleanupPublicPictures() {
  // Optional cleanup: remove old JPEG/PNG files in public/pictures once webp exists.
  // Keeps the output folder lean, and ensures the site uses WebP.
  const entries = await fs.readdir(outDir);
  const webpBases = new Set(
    entries
      .filter((f) => f.toLowerCase().endsWith(".webp"))
      .map((f) => path.parse(f).name)
  );

  const toDelete = entries.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    if (!(ext === ".jpg" || ext === ".jpeg" || ext === ".png")) return false;
    return webpBases.has(path.parse(f).name);
  });

  for (const fileName of toDelete) {
    await fs.unlink(path.join(outDir, fileName));
    console.log(`- removed public/pictures/${fileName}`);
  }
}

async function main() {
  await ensureDirs();
  const { logoSourcePath } = await optimizeToWebp();
  await generateFavicon(logoSourcePath);
  await copyProvidedFavicons();
  await cleanupPublicPictures();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
