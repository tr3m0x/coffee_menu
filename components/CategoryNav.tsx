import { useEffect, useRef } from "react";
import type { MenuCategory } from "@/types/menu";

type CategoryNavProps = {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function CategoryNav({ categories, activeId, onSelect }: CategoryNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = navRef.current?.querySelector<HTMLElement>(`[data-category="${activeId}"]`);
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  return (
    <nav className="category-shell" aria-label="Menu categories">
      <div className="category-nav" ref={navRef}>
        {categories.map((category) => (
          <button
            key={category.id}
            data-category={category.id}
            className={category.id === activeId ? "category-button active" : "category-button"}
            aria-current={category.id === activeId ? "true" : undefined}
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
