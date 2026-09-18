// Retouched versions of the supplied menu artwork, with complete outlines.
const individual: Record<string, string> = {
  'eggs-benedict': 'brunch/eggs-benedict',
  'salmon-toast': 'brunch/salmon-toast',
  shakshuka: 'brunch/shakshuka',
  'truffle-pain-perdu': 'brunch/truffle-pain-perdu',
  'coco-burger': 'brunch/coco-burger',
  'chicken-waffles': 'brunch/chicken-waffles',
  'yogurt-bowl': 'fresh-healthy/yogurt-bowl',
  'coco-salad': 'fresh-healthy/coco-salad',
  souffle: 'pancakes/souffle',
  'sweet-pancakes': 'pancakes/sweet',
  'savory-pancakes': 'pancakes/savory',
  'sweet-croffle': 'croffles/sweet',
  'savory-croffle': 'croffles/savory',
  'water-small': 'soft-drinks/water',
  'water-large': 'soft-drinks/water',
  'coca-cola': 'soft-drinks/cola',
  fanta: 'soft-drinks/fanta',
  'boga-white': 'soft-drinks/boga',
  'red-bull': 'soft-drinks/red-bull',
};

const shared: Record<string, string> = {
  desserts: 'desserts/cake',
  coffee: 'coffee/cup',
  matcha: 'matcha/glass',
  tea: 'drinks/tea',
  'fresh-juices': 'drinks/juice',
  mojitos: 'drinks/mojito',
  frappuccino: 'drinks/frappuccino',
  smoothies: 'drinks/smoothie',
  shisha: 'shisha/shisha',
};

export function menuArtwork(productId: string, categoryId: string) {
  const illustration = individual[productId] ?? shared[categoryId];
  return illustration ? `/images/menu-clean/${illustration}.webp` : undefined;
}
