export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/" className="site-name">Shingi Kamucheka</a>
      <nav aria-label="Primary navigation">
        <a href="/#writing">Writing</a>
        <a href="/#about">About</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return <footer>© 2026 Shingi Kamucheka</footer>;
}
