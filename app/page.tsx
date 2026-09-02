import Link from "next/link";
import { ArrowUpRight, BookOpen, FlaskConical, TerminalSquare } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const notes = [
  {
    date: "31 Aug 2026",
    title: "Why deleting context made the next prompt slower",
    summary: "A field note on prefix reuse, cold prefill, and learning to distrust token count in isolation.",
    tag: "Context systems",
  },
  {
    date: "30 Aug 2026",
    title: "The smaller KV cache that used more swap",
    summary: "What happened when a plausible memory optimization met a real Metal runtime.",
    tag: "Negative result",
  },
  {
    date: "28 Aug 2026",
    title: "A terminal is an interface, not an agent",
    summary: "How durable turns, a local daemon, and an event journal changed my mental model.",
    tag: "Architecture",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A PhD notebook in progress</p>
          <h1>Learning AI systems by building them in public.</h1>
          <p className="hero-lede">
            I am documenting the experiments, mistakes, and changing mental models behind
            Demesne—a durable local coding agent built for memory-constrained hardware.
          </p>
          <div className="hero-actions">
            <Link href="/notes" className="button-primary">Read the field notes <ArrowUpRight size={17} /></Link>
            <Link href="/about" className="text-link">Why I am writing this</Link>
          </div>
        </div>

        <div className="research-diagram" aria-label="Research cycle: hypothesis, build, measure, revise">
          <div className="diagram-grid" aria-hidden="true" />
          <span className="diagram-label top">HYPOTHESIS</span><span className="diagram-label right">BUILD</span>
          <span className="diagram-label bottom">MEASURE</span><span className="diagram-label left">REVISE</span>
          <div className="diagram-core"><FlaskConical size={26} /><strong>Learn</strong><small>in the loop</small></div>
        </div>
      </section>

      <section className="current-band">
        <div className="shell current-grid">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div><p className="eyebrow">Current research</p><h2>Demesne</h2></div>
          </div>
          <div className="current-copy">
            <p className="project-statement">
              How much correct coding work can a local model complete per unit of time and memory
              on hardware a person already owns?
            </p>
            <p>Demesne combines a terminal client, durable daemon, bounded coding tools, runtime verification, and an experimental harness for local inference.</p>
            <Link href="/demesne" className="inline-arrow">Explore the project <ArrowUpRight size={16} /></Link>
          </div>
          <dl className="project-facts">
            <div><dt>Model</dt><dd>27B local</dd></div><div><dt>Target</dt><dd>32 GB Mac</dd></div>
            <div><dt>Context</dt><dd>100K measured</dd></div><div><dt>Method</dt><dd>Measure, then promote</dd></div>
          </dl>
        </div>
      </section>

      <section className="shell notes-section">
        <div className="notes-intro">
          <p className="eyebrow">Selected notes</p><h2>Where the obvious answer failed.</h2>
          <p>These are learning records, not victory laps. Each note separates what was observed, what I currently think it means, and what remains unresolved.</p>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <Link href="/notes" className="note-row" key={note.title}>
              <span className="note-index">0{index + 1}</span>
              <div><div className="note-meta"><span>{note.tag}</span><time>{note.date}</time></div>
                <h3>{note.title}</h3><p>{note.summary}</p></div>
              <ArrowUpRight className="note-arrow" size={20} />
            </Link>
          ))}
        </div>
      </section>

      <section className="principles shell">
        <div className="principles-title"><p className="eyebrow">Working principles</p><h2>The notebook has rules.</h2></div>
        <div className="principle-grid">
          <article><BookOpen size={20} /><h3>Explain before claiming</h3><p>If I cannot explain the mechanism and limitation, the result is not ready to publish.</p></article>
          <article><TerminalSquare size={20} /><h3>Keep the raw evidence</h3><p>Configuration, failed runs, and negative results are part of the record—not debris.</p></article>
          <article><FlaskConical size={20} /><h3>Let measurements disagree</h3><p>A useful experiment is allowed to overturn the theory that motivated it.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
