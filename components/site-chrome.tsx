import Link from "next/link";
import { Code2 } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Shingi Kamucheka home">
        <span className="brand-mark">SK</span>
        <span><strong>Shingi Kamucheka</strong><small>AI systems notebook</small></span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/notes">Notes</Link><Link href="/demesne">Demesne</Link>
        <Link href="/research">Research</Link><Link href="/about">About</Link>
      </nav>
      <a className="icon-link" href="https://github.com/" aria-label="GitHub profile">
        <Code2 size={19} strokeWidth={1.7} />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-inner">
        <p>Notes from a beginning AI researcher learning in public.</p>
        <div><Link href="/notes">Writing</Link><Link href="/about">About</Link><a href="https://github.com/">GitHub</a></div>
      </div>
    </footer>
  );
}
