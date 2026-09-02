import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = {
  title: "The smaller KV cache that used more swap — Shingi Kamucheka",
  description: "A field note on a valid negative result from long-context local inference experiments.",
};
export const dynamic = "force-static";

export default function KvCacheNote() {
  return (
    <main><SiteHeader />
      <article className="article-shell">
        <Link href="/notes" className="back-link"><ArrowLeft size={15} /> All notes</Link>
        <header className="article-header">
          <div className="note-meta"><span>Negative result</span><time>30 Aug 2026</time><em>9 min read</em></div>
          <h1>The smaller KV cache that used more swap</h1>
          <p className="article-deck">I expected lower precision to recover memory. The first benchmark was too short to reveal that the runtime was doing something much more expensive.</p>
        </header>
        <div className="article-grid">
          <aside className="article-toc"><p>In this note</p><a href="#question">The question</a><a href="#gap">The measurement gap</a><a href="#result">What happened</a><a href="#meaning">What I think it means</a><a href="#limits">Limits</a></aside>
          <div className="prose">
            <p className="dropcap">The idea sounded straightforward: if a 32K context allocates a large f16 key-value cache, cutting that cache to q8_0 should leave more room for the model, the operating system, and the rest of my development environment.</p>
            <h2 id="question">The question</h2>
            <p>The question was not “is q8_0 smaller on paper?” It was whether this exact Qwen3.8 27B profile, on this llama.cpp Metal build and 32 GB M1 Max, would complete agent-scale prompts faster or with less memory pressure.</p>
            <div className="callout"><strong>Hypothesis</strong><p>q8_0 K/V should reduce memory demand without a meaningful task-quality or throughput regression.</p></div>
            <h2 id="gap">The first measurement gap</h2>
            <p>Our ordinary provider benchmark used roughly forty prompt tokens. At that length, almost none of the allocated long-context cache was active. The result could tell us something about short decode, but almost nothing about the question we were asking.</p>
            <p>We built a separate long-context harness with fixed prompt lengths, cold process isolation, native prefill and decode timing, runtime verification, and swap gates.</p>
            <h2 id="result">What happened</h2>
            <div className="result-grid"><div><span>f16 at 16,556 tokens</span><strong>14.23 tok/s</strong></div><div><span>q8_0 at 16,556 tokens</span><strong>7.17 tok/s</strong></div><div><span>q8_0 swap-out growth</span><strong>246.66 MiB</strong></div></div>
            <p>The lower-precision cache was nearly half as fast at the longest matched fixture. It also created swap traffic where the f16 comparison did not. The optimization failed both arguments that motivated it.</p>
            <h2 id="meaning">What I think it means</h2>
            <p>The result proves the external behavior, not the internal mechanism. A plausible explanation is that this quantized path needs slower dequantization kernels or additional scratch memory. We did not profile those internals, so that remains an interpretation.</p>
            <p>The narrower, defensible sentence is: on this exact model, build, Metal backend, machine, and long-context harness, q8_0 K/V underperformed f16 and failed the memory gate.</p>
            <h2 id="limits">What this does not prove</h2>
            <ul><li>It does not show that all quantized KV caches are slow.</li><li>It does not reproduce KIVI or other specialized cache algorithms.</li><li>It does not explain the kernel-level cause.</li><li>It does not generalize beyond this measured system.</li></ul>
            <div className="read-next"><span>Continue the thread</span><Link href="/demesne">See the Demesne research map <ArrowUpRight size={16} /></Link></div>
          </div>
        </div>
      </article><SiteFooter />
    </main>
  );
}
