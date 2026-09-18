# COCO Café — Digital Menu

A fast, mobile-first digital menu for **COCO Café — Coffee & Stories**. It is a viewing-only catalog: no cart, checkout, accounts, API, or backend. The production site is designed for one QR code shared by every table.

Production URL: <https://tr3m0x.github.io/coffee_menu/>

## Architecture

- Next.js App Router, React, TypeScript, and Tailwind CSS
- Fully static export (`output: "export"`)
- One data source in `data/menu.ts`
- Client-side category switching and search
- Local, optimized WebP imagery with decorative missing-image fallbacks
- `/coffee_menu` production `basePath` and `assetPrefix` for GitHub Pages

Development runs at `/`; production builds use `/coffee_menu/`. The helper in `lib/assets.ts` applies the production prefix to public assets in one place.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates the complete static production website in `out/`.

## Editing the menu

Edit `data/menu.ts`. Categories contain products with names, descriptions, prices, optional choices, and extras. Artwork is assigned by product or category ID through `data/menu-artwork.ts`. Prices are numbers and the UI formats them consistently as TND.

No component edits are needed for ordinary product or price changes. Commit and push the file to redeploy.

## Replacing images

Images live under `public/images/` by category. Recommended sizes:

- Hero: about 1600×1000 WebP, ideally under 250 KB
- Product: about 800×800 or 800×600 WebP, ideally under 150 KB

Add the file and update its product or category mapping in `data/menu-artwork.ts`. Products without an image, or whose image fails to load, show a branded decorative fallback. The current 27 illustrations are AI-retouched versions of the supplied menu artwork, shared where the original uses a category illustration. They restore clean outlines and are exported as complete images rather than polygon cutouts. See `public/images/README.md` for the extraction command and provenance.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`:

1. Install exact dependencies with `npm ci`
2. Build the static export
3. Upload `out/`
4. Deploy with the official GitHub Pages actions

In the GitHub repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source. Ensure Actions have permission to run under **Settings → Actions → General**. No `gh-pages` branch is required.

After deployment, verify the page, `/_next/` chunks, CSS, favicon, and `/images/` requests all include the `/coffee_menu` prefix.

## QR code

Create one QR code for every table pointing to:

```text
https://tr3m0x.github.io/coffee_menu/
```

Generate it with a reputable QR tool, export as SVG for print, and test it from multiple phones before printing. For large permanent print runs, prefer waiting for the final custom domain so the printed destination remains stable.

## Future custom domain

When moving to `https://menu.cococafe.tn`, add the domain in GitHub Pages settings, configure the required DNS record, and change the production-path logic in `next.config.ts` so `basePath` is empty. Update `metadataBase`, the README URL, and the QR destination. The UI and menu data need no rewrite.

## Generated photography

The hero photograph was created with OpenAI’s built-in image generation tool and converted to WebP. Product cards use retouched menu illustrations under `public/images/menu-clean/`. The retouching was performed with the same built-in tool using the user's menu as reference. Earlier product assets remain in the repository but are no longer used by menu cards.
