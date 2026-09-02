import Link from "next/link";
import { ArrowUpRight, Database, Gauge, ShieldCheck, Terminal } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "Demesne — Shingi Kamucheka" };
export const dynamic = "force-static";

export default function DemesnePage() {
  return (
    <main><SiteHeader />
      <section className="page-intro project-intro shell"><p className="eyebrow">Current research project</p><h1>Demesne</h1>
        <p>A durable, local-first coding agent—and an experimental platform for asking what useful local inference really costs.</p>
        <div className="status-line"><span /> Version 0.1.0 · local development candidate</div>
      </section>
      <section className="architecture-band"><div className="shell">
        <p className="eyebrow">System shape</p><h2>The terminal can leave.<br />The turn stays alive.</h2>
        <div className="architecture-flow">
          <div><Terminal /><strong>CLI</strong><small>input & display</small></div><span>→</span>
          <div><ShieldCheck /><strong>Daemon</strong><small>tools & approvals</small></div><span>→</span>
          <div><Gauge /><strong>Runtime</strong><small>verified inference</small></div><span>→</span>
          <div><Database /><strong>Journal</strong><small>durable evidence</small></div>
        </div>
      </div></section>
      <section className="shell findings-section">
        <div className="findings-heading"><p className="eyebrow">Measured findings</p><h2>The project changed its mind.</h2></div>
        <div className="finding-grid">
          <article><span>01 / Context</span><h3>Fewer tokens can be slower.</h3><p>Rewriting old context can destroy an otherwise reusable prefix and force cold prefill.</p></article>
          <article><span>02 / Memory</span><h3>Smaller cache, worse pressure.</h3><p>q8_0 K/V regressed long-context decode and produced swap in the matched Metal run.</p></article>
          <article><span>03 / Speculation</span><h3>4× decode became 11% task time.</h3><p>The agent still pays for prefill, multiple rounds, tools, and unpredictable output.</p></article>
          <article><span>04 / Capacity</span><h3>100K fits—with conditions.</h3><p>Exact 100K, mmap, f16 K/V, one slot, and verified runtime provenance passed targeted gates.</p></article>
        </div>
      </section>
      <section className="shell project-question"><p>North-star question</p><blockquote>How much correct coding work can a local model complete per unit of time and memory on hardware a person already owns?</blockquote><Link href="/notes" className="inline-arrow">Read the experiment notes <ArrowUpRight size={16} /></Link></section>
      <SiteFooter />
    </main>
  );
}
