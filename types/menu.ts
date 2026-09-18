export type MenuExtra = { name: string; price?: number };

export type MenuProduct = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: "coffee" | "pancakes" | "matcha";
  options?: string[];
  extras?: MenuExtra[];
};

export type MenuCategory = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  products: MenuProduct[];
};
