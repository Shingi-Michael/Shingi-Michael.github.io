import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = {
  title: "The Start of Curiosity | Shingi Kamucheka",
  description: "How limited hardware, local models, and a practical coding problem became the beginning of Demesne.",
  openGraph: {
    title: "The Start of Curiosity",
    description: "How limited hardware, local models, and a practical coding problem became the beginning of Demesne.",
    images: [],
  },
  twitter: {
    card: "summary" as const,
    title: "The Start of Curiosity",
    description: "How limited hardware, local models, and a practical coding problem became the beginning of Demesne.",
    images: [],
  },
};

export const dynamic = "force-static";

export default function StartOfCuriosity() {
  return (
    <main className="page">
      <SiteHeader />
      <article className="post">
        <Link href="/" className="back-link">← Back to writing</Link>

        <header>
          <time>3 September 2026</time>
          <h1>The Start of Curiosity</h1>
        </header>

        <h2>Why I was hopeful</h2>
        <p>
          You know, when Qwen3.8 27B was released into the tech world, many of us who do not
          own much computing hardware became hopeful.
        </p>
        <p>I’ll start by explaining why I was hopeful.</p>

        <h2>The hardware I already owned</h2>
        <p>
          I own a computer with an RX 9070 and an RTX 3060, a hybrid of sorts. When I first
          introduced myself to tools such as LM Studio and Ollama, I realized that even though
          my hardware was limited, I could still download a meaningfully capable model to help
          me with some of my personal projects, such as engineerpreppro.com.
        </p>

        <h2>From an interesting model to a practical problem</h2>
        <p>
          Watching the model load and conversing with it through LM Studio was fun, but it was
          not very practical.
        </p>
        <p>
          To help with my local coding work, I would need to connect or pipe the model into a
          tool such as OpenCode running on my main coding machine, a Mac.
        </p>
        <p>This was where curiosity began turning into a problem I wanted to solve.</p>

        <h2>My problem</h2>
        <p>
          As if life was not already complicated, I decided: hey, why not learn how to make a
          harness, or an “agent,” of my own?
        </p>
        <p>
          At the time, I did not fully understand what building an agent involved. I knew what
          I wanted it to do, but I still had to learn about model inference, context, tools,
          permissions, memory, and how all these parts fit together.
        </p>

        <h2>The birth of Demesne</h2>
        <p>After a few days of prompting, experimenting, and directing the work, Demesne was born.</p>
        <p>
          The name refers to one’s own land or domain, and that captured the essence of what I
          wanted to bring to local agents: an agent that worked within an environment I owned
          and controlled.
        </p>
        <p>My first idea was that Demesne could become the command-line interface I would use for coding.</p>

        <h2>The question became larger</h2>
        <p>The project soon evolved beyond being only a coding CLI.</p>
        <p>
          I began to see that I could also use the Demesne environment as a harness for benchmarking
          local models. Instead of only asking whether a model felt fast or capable, I could begin
          measuring what it was actually doing.
        </p>
        <p>That introduced a much larger question:</p>
        <blockquote>
          How much useful coding work can a local model complete using the hardware I already own?
        </blockquote>

        <h2>What I thought an agent was</h2>
        <p>
          I imagined that the model itself was the agent. I thought that if the model were smart
          enough, it would naturally be able to behave like an agent.
        </p>
        <p>
          Maybe I was partially right, but there was a whole other side to it: the harness. The
          harness gives the model controlled ways to interact with files, use tools, perform tasks,
          receive results, and decide what to do next.
        </p>
        <p>
          My line of thinking then changed from, “Which model should I use?” to, “What kinds of
          things do I need around the model to make it useful?”
        </p>
        <p>
          This became the starting point of a much larger learning journey. Building Demesne forced
          me to explore inference, context windows, model memory, tool use, persistence, scheduling,
          and benchmarking.
        </p>
        <p>
          In this series, I will work through those ideas as I came to understand them, including
          the assumptions that were wrong, the experiments that failed, and the results that changed
          the direction of the project.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
