import { useEffect, useRef, useState } from "react";
import { allProducts } from "@/data/menu";

type SearchOverlayProps = { open: boolean; onClose: () => void; onSelect: (categoryId: string) => void };

export function SearchOverlay({ open, onClose, onSelect }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = query.trim().length
    ? allProducts.filter((item) => `${item.name} ${item.description ?? ""} ${item.categoryName}`.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 12)
    : [];

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("dialog-open");
    setTimeout(() => inputRef.current?.focus(), 50);
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.classList.remove("dialog-open"); window.removeEventListener("keydown", closeOnEscape); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="search-layer" role="dialog" aria-modal="true" aria-labelledby="search-title">
      <div className="search-topline">
        <p id="search-title">Find something delicious</p>
        <button onClick={onClose} aria-label="Close search">Close</button>
      </div>
      <label className="search-field">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
        <span className="sr-only">Search menu</span>
        <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “matcha” or “salmon”" />
      </label>
      <div className="search-results" aria-live="polite">
        {!query && <p className="search-hint">Search dishes, drinks, ingredients, or categories.</p>}
        {query && !results.length && <p className="search-hint">No menu items found for “{query}”.</p>}
        {results.map((item) => (
          <button key={`${item.categoryId}-${item.id}`} onClick={() => { onSelect(item.categoryId); onClose(); }}>
            <span><b>{item.name}</b><small>{item.categoryName}</small></span>
            <strong>{Number.isInteger(item.price) ? item.price : item.price.toFixed(1)} TND</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
