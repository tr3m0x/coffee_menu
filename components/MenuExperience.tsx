"use client";

import { useCallback, useState } from "react";
import { menu } from "@/data/menu";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { CategoryNav } from "./CategoryNav";
import { ProductCard } from "./ProductCard";
import { SearchOverlay } from "./SearchOverlay";
import { Footer } from "./Footer";

export function MenuExperience() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const [searchOpen, setSearchOpen] = useState(false);
  const activeCategory = menu.find((category) => category.id === activeId) ?? menu[0];

  const selectCategory = useCallback((id: string, shouldScroll = true) => {
    setActiveId(id);
    if (shouldScroll) requestAnimationFrame(() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return (
    <>
      <div id="top" />
      <Header onSearch={() => setSearchOpen(true)} />
      <main>
        <Hero />
        <div id="menu" className="menu-anchor" />
        <CategoryNav categories={menu} activeId={activeId} onSelect={selectCategory} />
        <section className="menu-section" key={activeCategory.id} aria-labelledby="category-title">
          <div className="section-intro">
            <p className="kicker wine">{activeCategory.eyebrow}</p>
            <div className="section-title-row"><h2 id="category-title">{activeCategory.name}</h2><span>{String(activeCategory.products.length).padStart(2, "0")}</span></div>
            <p>{activeCategory.description}</p>
          </div>
          <div className="product-grid">
            {activeCategory.products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
          <div className="category-next">
            <span>Keep exploring</span>
            <button onClick={() => selectCategory(menu[(menu.findIndex((category) => category.id === activeId) + 1) % menu.length].id)}>
              Next: {menu[(menu.findIndex((category) => category.id === activeId) + 1) % menu.length].name} <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} onSelect={(id) => selectCategory(id)} />
    </>
  );
}
