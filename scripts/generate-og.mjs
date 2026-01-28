import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outPath = path.join(root, "public", "pictures", "og-gayjustice.webp");

fs.mkdirSync(path.dirname(outPath), { recursive: true });

const width = 1200;
const height = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1f3a" />
      <stop offset="100%" stop-color="#111827" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <rect x="60" y="60" width="1080" height="510" rx="28" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.25)" />
  <text x="110" y="230" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial,sans-serif" font-size="64" font-weight="800" fill="#ffffff">GayJustice.org</text>
  <text x="110" y="305" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial,sans-serif" font-size="30" font-weight="650" fill="rgba(255,255,255,0.95)">Legal protection • Equal treatment</text>
  <text x="110" y="375" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial,sans-serif" font-size="26" font-weight="550" fill="rgba(255,255,255,0.90)">An initiative of Stichting Vrijheid &amp; Gelijkheid (STVG)</text>
  <text x="110" y="470" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial,sans-serif" font-size="22" font-weight="650" fill="rgba(250,204,21,0.92)">www.gayjustice.org</text>
</svg>`;

await sharp(Buffer.from(svg))
  .webp({ quality: 82 })
  .toFile(outPath);

console.log(`Generated OG image: ${path.relative(root, outPath)}`);
