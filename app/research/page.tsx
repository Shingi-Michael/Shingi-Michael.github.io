import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "Research — Shingi Kamucheka" };
export const dynamic = "force-static";

const themes = [
  ["01", "Local inference", "How model weights, KV state, kernels, power policy, and unified memory shape useful work."],
  ["02", "Context systems", "How planning, prefix caching, retrieval, and compaction interact across long agent sessions."],
  ["03", "Durable agents", "How tools, permissions, event journals, cancellation, and recovery turn a model into a system."],
  ["04", "Experimental method", "How to make performance claims that survive confounds, invalid pilots, and negative results."],
];

export default function ResearchPage() {
  return <main><SiteHeader />
    <section className="page-intro shell"><p className="eyebrow">Research map</p><h1>Questions before conclusions.</h1><p>My current work sits between AI inference, operating systems, software agents, and the practical discipline of measurement.</p></section>
    <section className="shell theme-grid">{themes.map(([n, title, copy]) => <article key={n}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
    <section className="method-band"><div className="shell method-grid"><div><p className="eyebrow">Method</p><h2>Fact → hypothesis → controlled change → measurement → decision.</h2></div><ol><li>Write the prediction before the run.</li><li>Verify the system that actually executed.</li><li>Keep invalid and negative results.</li><li>Promote only after task-quality gates pass.</li><li>State the narrowest conclusion the evidence supports.</li></ol></div></section>
    <section className="shell reading-section"><p className="eyebrow">Reading now</p><div><span>Inference systems</span><h3>FlashAttention, PagedAttention, Prompt Cache, and speculative decoding</h3></div><div><span>Evaluation</span><h3>RULER, LongBench, SWE-bench, and experimental design</h3></div><div><span>Systems</span><h3>SQLite durability, scheduling, virtual memory, and Metal profiling</h3></div></section>
    <SiteFooter />
  </main>;
}
