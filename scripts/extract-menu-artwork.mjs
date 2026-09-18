// Build clean individual assets from the retouched contact sheet.
// Requires ImageMagick. The original supplied menu is preserved separately.
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'assets/menu/retouched-sheet.webp');
const names = [
  'brunch/chicken-waffles', 'brunch/coco-burger', 'brunch/eggs-benedict',
  'brunch/salmon-toast', 'brunch/shakshuka', 'brunch/truffle-pain-perdu',
  'coffee/cup', 'croffles/savory', 'croffles/sweet', 'desserts/cake',
  'drinks/frappuccino', 'drinks/juice', 'drinks/mojito', 'drinks/smoothie',
  'drinks/tea', 'fresh-healthy/coco-salad', 'fresh-healthy/yogurt-bowl',
  'matcha/glass', 'pancakes/savory', 'pancakes/souffle', 'pancakes/sweet',
  'shisha/shisha', 'soft-drinks/boga', 'soft-drinks/cola',
  'soft-drinks/fanta', 'soft-drinks/red-bull', 'soft-drinks/water',
];
const run = (args) => {
  const result = spawnSync('magick', args, { encoding: 'utf8', timeout: 30000 });
  if (result.status !== 0) throw new Error(result.stderr || 'ImageMagick failed');
  return result.stdout;
};
const [width, height] = run(['identify', '-format', '%w %h', source]).split(' ').map(Number);
for (const [index, name] of names.entries()) {
  const col = index % 6;
  const row = Math.floor(index / 6);
  const x = Math.round(col * width / 6);
  const y = Math.round(row * height / 5);
  const w = Math.round((col + 1) * width / 6) - x;
  const h = Math.round((row + 1) * height / 5) - y;
  const target = resolve(root, `public/images/menu-clean/${name}.webp`);
  mkdirSync(dirname(target), { recursive: true });
  run([source, '-crop', `${w}x${h}+${x}+${y}`, '+repage',
    '-resize', '600x600>', '-strip', '-quality', '88', target]);
}
console.log(`Exported ${names.length} clean menu illustrations.`);
