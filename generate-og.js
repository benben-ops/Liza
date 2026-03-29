/**
 * generate-og.js — generátor OG obrázkov pre články
 *
 * Použitie:
 *   node generate-og.js "Deň 30 · 29. marca 2026" hormuz-den-30
 *   node generate-og.js "Deň 31 · 30. marca 2026" hormuz-den-31
 *
 * Výstup:
 *   og-[slug].svg  (zdroj)
 *   og-[slug].png  (1200x630, pre sociálne siete)
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const sharp = require('sharp');

const subtitle = process.argv[2];
const slug     = process.argv[3];

if (!subtitle || !slug) {
  console.error('Použitie: node generate-og.js "Deň 30 · 29. marca 2026" hormuz-den-30');
  process.exit(1);
}

const dir     = __dirname;
const svgOut  = path.join(dir, `og-${slug}.svg`);
const pngOut  = path.join(dir, `og-${slug}.png`);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#f0efe9"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="#E24B4A"/>

  <!-- Large H pictogram -->
  <text x="600" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="360" font-weight="700"
        fill="#E24B4A" text-anchor="middle" dominant-baseline="middle" opacity="0.18">H</text>

  <!-- Project name -->
  <text x="600" y="220" font-family="'Inter', system-ui, sans-serif" font-size="64" font-weight="600"
        fill="#1a1a1a" text-anchor="middle" letter-spacing="-1">Horizont udalost&#237;</text>

  <!-- Subtitle EN -->
  <text x="600" y="290" font-family="'Inter', system-ui, sans-serif" font-size="26" font-weight="400"
        fill="#666" text-anchor="middle">Event Horizon</text>

  <!-- Description -->
  <text x="600" y="390" font-family="'Inter', system-ui, sans-serif" font-size="20" font-weight="400"
        fill="#888" text-anchor="middle">Automatizovan&#225; extrapol&#225;cia udalost&#237; · benben-ops</text>

  <!-- Article subtitle — above separator -->
  <text x="600" y="490" font-family="'Inter', system-ui, sans-serif" font-size="24" font-weight="500"
        fill="#E24B4A" text-anchor="middle">${subtitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>

  <!-- Bottom accent line -->
  <rect x="80" y="530" width="1040" height="1" fill="#E24B4A" opacity="0.3"/>

  <!-- URL -->
  <text x="600" y="568" font-family="'Inter', system-ui, sans-serif" font-size="18" font-weight="400"
        fill="#aaa" text-anchor="middle">benben-ops.github.io/Liza</text>
</svg>`;

fs.writeFileSync(svgOut, svg, 'utf8');
console.log(`SVG: ${svgOut}`);

sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile(pngOut)
  .then(() => console.log(`PNG: ${pngOut}`))
  .catch(err => { console.error(err.message); process.exit(1); });
