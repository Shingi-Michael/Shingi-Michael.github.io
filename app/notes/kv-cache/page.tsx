import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = {
  title: "The smaller KV cache that used more swap",
  description: "A field note on a negative result from local inference experiments.",
};

export const dynamic = "force-static";

export default function KvCacheNote() {
  return (
    <main className="page">
      <SiteHeader />
      <article className="post">
        <Link href="/" className="back-link">← Back to writing</Link>
        <header>
          <time>30 August 2026</time>
          <h1>The smaller KV cache that used more swap</h1>
          <p className="summary">
            I expected lower precision to recover memory. The first benchmark was too short to reveal
            that the runtime was doing something much more expensive.
          </p>
        </header>

        <h2>The question</h2>
        <p>
          If a 32K context allocates a large f16 key-value cache, reducing the cache to q8_0 should,
          in theory, leave more memory for the model and the rest of the computer. The real question
          was whether that happened on this exact model, runtime, and machine.
        </p>

        <h2>The measurement gap</h2>
        <p>
          Our first provider benchmark contained roughly forty prompt tokens. That was enough to measure
          short generation, but it barely exercised a cache allocated for tens of thousands of tokens.
          We had designed a benchmark that could not properly observe the mechanism we wanted to study.
        </p>

        <h2>What happened</h2>
        <p>
          At 16,556 prompt tokens, f16 decoded at 14.23 tokens per second. q8_0 decoded at 7.17.
          The q8_0 run also produced 246.66 MiB of swap-out growth where the matched f16 run produced none.
        </p>

        <blockquote>
          On this exact model, build, Metal backend, machine, and long-context harness,
          q8_0 K/V underperformed f16 and failed the memory gate.
        </blockquote>

        <h2>What this does not prove</h2>
        <p>
          It does not prove that all quantized KV caches are slow. It also does not establish the internal
          cause. Slower dequantization kernels or extra working memory are plausible explanations, but we
          did not profile them directly.
        </p>

        <h2>What I learned</h2>
        <p>
          A benchmark has to activate the mechanism it claims to measure. A valid negative result is more
          useful than a positive result produced by the wrong test.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
