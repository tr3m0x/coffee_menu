# Menu images

The active product artwork is in `menu-clean/`. It was retouched with the built-in image editing tool using the supplied `coco-menu-original.jpg` and the previous crop sheet as references. The edit restores complete silhouettes and removes neighboring plate fragments and polygon edges. These are AI-retouched illustrations, not exact pixel crops or photographs of the actual dishes. The original menu and earlier crops are preserved.

`data/menu-artwork.ts` maps product IDs to individual illustrations and category IDs to shared illustrations. Categories such as coffee, matcha, and desserts have only one illustration in the original menu, so their products share it. Soft drink bottles have individual crops; both water sizes share the water illustration.

To reproduce the 27 optimized WebP assets from `assets/menu/retouched-sheet.webp`, install ImageMagick and run:

```sh
node scripts/extract-menu-artwork.mjs
```

The retouched sheet contains six columns and five rows, with the last three cells empty. The script extracts whole cells with no silhouette masks. Square cards display the complete artwork without color blending or clipping. The hero remains the existing café photograph. The browser loads only individual assets, not either full menu sheet. See `assets/menu/README.md` for the editing prompt and provenance.

For future higher-resolution product photos, use local WebP files and update the mapping. Missing or failed images fall back to the branded card treatment.
