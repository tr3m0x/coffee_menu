# Retouched menu artwork

Source references: the user-supplied `public/images/coco-menu-original.jpg` and a contact sheet of the first extraction attempt. The original sheet has only 1024 × 1536 pixels and overlapping illustrations, so the first masked crops contained clipped edges and neighboring shadows.

The built-in image generation/editing tool retouched the artwork into `retouched-sheet.webp`. This is AI-retouched reference artwork, not an exact reproduction of every original detail. No web-scraped or externally hosted images are used.

Editing prompt: preserve the original illustrated style, subjects, colors, garnishes and product identity as closely as possible; repair missing plate rims, mint leaves, cup handles and bottle highlights; remove scissor-cut polygon corners, neighboring plate fragments, text outside product labels and pixelation. Place each complete subject centered with generous margins on cream #F1E3CA in six columns and five rows. Preserve the row-major order listed in `scripts/extract-menu-artwork.mjs`, leaving the last three cells blank. Keep each subject wholly inside its cell, without borders or grid lines.

Requested size was 3000 × 2500; actual delivered size is 1374 × 1145. The script reads the real dimensions and exports each whole cell. Do not describe these as 500-pixel source cells or original café product photography.

Run `node scripts/extract-menu-artwork.mjs` to reproduce the individual WebP assets. The website only loads those individual files.
