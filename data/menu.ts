import type { MenuCategory, MenuProduct } from "@/types/menu";

const p = (
  id: string,
  name: string,
  price: number,
  description?: string,
  rest: Partial<MenuProduct> = {},
): MenuProduct => ({ id, name, price, description, ...rest });

export const menu: MenuCategory[] = [
  {
    id: "brunch", name: "Brunch", eyebrow: "Slow mornings", description: "Comforting plates, generous ingredients, and brunch worth lingering over.",
    products: [
      p("eggs-benedict", "Eggs Benedict", 22, "Poached eggs, hollandaise, bacon, chives and mixed greens."),
      p("salmon-toast", "Salmon Avocado Toast", 26, "Sourdough, smashed avocado, cream cheese, smoked salmon, poached egg, dill and lemon zest."),
      p("shakshuka", "Shakshuka", 23, "Eggs baked in a spiced tomato and pepper sauce with herbs and toasted bread."),
      p("truffle-pain-perdu", "Truffle Pain Perdu", 26, "French toast, truffle cream, sautéed mushrooms, parmesan, poached egg and chives."),
      p("coco-burger", "Coco Burger", 24, "Beef patty, cheddar, caramelized onions, lettuce, tomato and Coco sauce. Served with fries.", { options: ["Classic Fries", "Sweet Potato Fries"] }),
      p("chicken-waffles", "Chicken & Waffles", 23, "Crispy chicken breast, Belgian waffle, spicy honey, pickled red onions and chives."),
    ],
  },
  {
    id: "fresh-healthy", name: "Fresh & Healthy", eyebrow: "Bright & balanced", description: "Fresh bowls and vibrant plates for an easy kind of day.",
    products: [
      p("yogurt-bowl", "Greek Yogurt Bowl", 22, "Greek yogurt, homemade granola, seasonal fruits, honey, peanut butter and pistachio."),
      p("coco-salad", "Coco Salad", 24, "Mixed greens, avocado, cherry tomatoes, cucumber, parmesan and house dressing.", { extras: [{ name: "Chicken", price: 5 }, { name: "Smoked Salmon", price: 7 }] }),
    ],
  },
  {
    id: "pancakes", name: "Pancakes", eyebrow: "Soft & cloudlike", description: "Golden, fluffy, and made for sweet or savory cravings.",
    products: [
      p("souffle", "Coco Soufflé Pancake", 26, "Fluffy Japanese-style soufflé pancake, vanilla, fresh berries and powdered sugar.", { image: "pancakes" }),
      p("sweet-pancakes", "Sweet Pancakes", 22, "Fluffy pancakes with your choice of topping.", { image: "pancakes", options: ["Pistachio", "Nutella", "Lotus", "Oreo", "Peanut Butter", "Maple Syrup"], extras: [{ name: "Banana", price: 3 }, { name: "Strawberry", price: 3 }, { name: "Ice Cream", price: 4 }] }),
      p("savory-pancakes", "Savory Pancakes", 24, "Fluffy pancakes, scrambled eggs, bacon, cheese, avocado and maple chili sauce."),
    ],
  },
  {
    id: "croffles", name: "Croffles", eyebrow: "Crisp meets buttery", description: "The best of a croissant and a waffle, finished your way.",
    products: [
      p("sweet-croffle", "Sweet Croffle", 22, "Croissant meets waffle.", { options: ["Pistachio", "Nutella", "Lotus", "Oreo", "Vanilla Cream"], extras: [{ name: "Strawberry", price: 3 }, { name: "Banana", price: 3 }, { name: "Ice Cream", price: 4 }] }),
      p("savory-croffle", "Savory Croffle", 26, undefined, { options: ["Smoked Salmon & Cream Cheese", "Bacon & Cheese", "Avocado & Egg", "Tomato & Mozzarella", "Turkey & Cheese"] }),
    ],
  },
  {
    id: "desserts", name: "Desserts", eyebrow: "A sweeter ending", description: "Little pleasures from the pastry counter.",
    products: [p("danish", "Danish Pastry", 12), p("lemon-cream", "Lemon Cream Dessert", 14), p("lemon-cake", "Lemon Cake", 13), p("chocolate-cake", "Chocolate Cake", 13), p("pumpkin-cake", "Pumpkin Vegan Cake", 13)],
  },
  {
    id: "coffee", name: "Coffee", eyebrow: "The daily ritual", description: "Classic espresso drinks, poured with care.",
    products: [p("espresso-orange", "Espresso Orangé", 5, undefined, { image: "coffee" }), p("allonge", "Café Allongé", 5, undefined, { image: "coffee" }), p("macchiato", "Macchiato", 5.5, undefined, { image: "coffee" }), p("latte", "Caffè Latte", 6, undefined, { image: "coffee" }), p("cappuccino", "Cappuccino", 6, "Espresso with silky steamed milk.", { image: "coffee" }), p("flat-white", "Flat White", 7, undefined, { image: "coffee" }), p("americano", "Americano", 6), p("mocha", "Mocha", 12), p("caramel-macchiato", "Caramel Macchiato", 13), p("affogato", "Affogato", 15, "Espresso with vanilla ice cream.")],
  },
  {
    id: "matcha", name: "Matcha", eyebrow: "Green & serene", description: "Earthy, creamy, and whisked for a softer pace.",
    products: [p("matcha-latte", "Matcha Latte", 14, undefined, { image: "matcha", options: ["Hot", "Iced"] }), p("vanilla-matcha", "Vanilla Matcha", 15, undefined, { image: "matcha", options: ["Hot", "Iced"] }), p("coco-cloud", "Coco Cloud", 18, undefined, { image: "matcha", options: ["Iced"] }), p("mango-matcha", "Mango Matcha", 18, undefined, { image: "matcha", options: ["Iced"] }), p("strawberry-matcha", "Strawberry Matcha", 16, undefined, { image: "matcha", options: ["Iced"] }), p("pink-matcha", "Pink Sprinkle Matcha", 18, undefined, { image: "matcha", options: ["Iced"] })],
  },
  { id: "tea", name: "Tea", eyebrow: "Steep & settle", description: "Simple, fragrant cups for any hour.", products: [p("classic-tea", "Classic Tea", 7), p("infusion", "Infusion", 8), p("iced-tea", "Iced Tea", 9)] },
  { id: "fresh-juices", name: "Fresh Juices", eyebrow: "Freshly poured", description: "Bright refreshers made for sunny tables.", products: [p("strawberry-lemonade", "Strawberry Lemonade", 10), p("orange", "Fresh Orange Juice", 10)] },
  { id: "mojitos", name: "Mojitos", eyebrow: "Cool & sparkling", description: "Minty, vibrant, alcohol-free refreshers.", products: [p("virgin-mojito", "Virgin Mojito", 11), p("blue-mojito", "Blue Mojito", 12), p("energy-mojito", "Energy Mojito", 12), p("red-fruit-mojito", "Red Fruit Mojito", 12), p("red-bull-mojito", "Red Bull Mojito", 14)] },
  { id: "frappuccino", name: "Frappuccino", eyebrow: "Blended & chilled", description: "Creamy café favorites, served ice cold.", products: [p("frappe-cafe", "Café", 12), p("frappe-vanilla", "Vanilla", 12), p("frappe-caramel", "Caramel", 12), p("frappe-chocolate", "Dark Chocolate", 12)] },
  { id: "smoothies", name: "Smoothies", eyebrow: "Fruit in full color", description: "Creamy fruit blends, each 16 TND.", products: ["Vanilla & Strawberry", "Avocado & Banana", "Vanilla & Passion Fruit", "Banana", "Mango", "Mango & Peach", "Red Fruits", "Piña Colada", "Detox"].map((name, i) => p(`smoothie-${i + 1}`, name, 16)) },
  { id: "soft-drinks", name: "Soft Drinks", eyebrow: "Cold classics", description: "Familiar favorites, served chilled.", products: [p("water-small", "Water 0.5L", 2), p("water-large", "Water 1.5L", 4), p("coca-cola", "Coca-Cola", 6), p("fanta", "Fanta", 6), p("boga-white", "Boga White", 6), p("red-bull", "Red Bull", 10)] },
  { id: "shisha", name: "Shisha", eyebrow: "Take your time", description: "A relaxed Coco ritual for slow conversations.", products: [p("shisha", "Shisha", 18)] },
];

export const allProducts = menu.flatMap((category) => category.products.map((product) => ({ ...product, categoryId: category.id, categoryName: category.name })));
