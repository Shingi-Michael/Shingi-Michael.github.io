import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { notes } from "@/lib/content";

export const metadata = { title: "Notes — Shingi Kamucheka" };
export const dynamic = "force-static";

export default function NotesPage() {
  return (
    <main><SiteHeader />
      <section className="page-intro shell">
        <p className="eyebrow">Field notes / experiments / revisions</p>
        <h1>Writing toward understanding.</h1>
        <p>These notes are how I reconstruct the work: what I believed, what the experiment controlled, what happened, and what I still need to learn.</p>
      </section>
      <section className="shell archive-layout">
        <aside className="archive-aside">
          <p className="aside-label">Browse by thread</p>
          <span>Local inference</span><span>Context systems</span><span>Agent architecture</span><span>Research method</span>
        </aside>
        <div className="archive-list">
          {notes.map((note, index) => (
            <Link key={note.slug} href={note.href} className="archive-note">
              <span className="archive-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="archive-note-body">
                <div className="note-meta"><span>{note.tag}</span><time>{note.date}</time><em>{note.status}</em></div>
                <h2>{note.title}</h2><p>{note.summary}</p>
              </div><ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
