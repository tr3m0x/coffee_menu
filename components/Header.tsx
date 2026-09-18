type HeaderProps = { onSearch: () => void };

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="COCO Café, back to top">
        <span className="brand-name">COCO</span>
        <span className="brand-tagline">Coffee <i>&</i> Stories</span>
      </a>
      <button className="search-trigger" onClick={onSearch} aria-label="Search the menu">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
        <span>Search</span>
      </button>
    </header>
  );
}
