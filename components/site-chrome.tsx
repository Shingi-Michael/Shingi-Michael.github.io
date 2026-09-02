import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-name">Shingi Kamucheka</Link>
      <nav aria-label="Primary navigation">
        <Link href="/#writing">Writing</Link>
        <Link href="/#about">About</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return <footer>© 2026 Shingi Kamucheka</footer>;
}
