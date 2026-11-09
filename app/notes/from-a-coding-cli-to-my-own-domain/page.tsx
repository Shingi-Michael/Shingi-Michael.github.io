import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const description =
  "Two months on, Demesne is a desktop coding agent, a personal assistant on my own GPU, and an iPhone app that reaches both.";

export const metadata = {
  title: "From a Coding CLI to My Own Domain | Shingi Kamucheka",
  description,
  openGraph: {
    title: "From a Coding CLI to My Own Domain",
    description,
    images: ["https://shingi-michael.github.io/images/demesne/og-0821.jpg"],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "From a Coding CLI to My Own Domain",
    description,
    images: ["https://shingi-michael.github.io/images/demesne/og-0821.jpg"],
  },
};

export const dynamic = "force-static";

export default function FromACodingCliToMyOwnDomain() {
  return (
    <main className="page">
      <SiteHeader />
      <article className="post">
        <a href="/" className="back-link">← Back to writing</a>

        <header>
          <time>8 November 2026</time>
          <h1>From a Coding CLI to My Own Domain</h1>
        </header>

        <h2>Where I left off</h2>
        <p>
          In my first note, Demesne was an idea for a command-line coding tool: a harness that would
          let a local model do useful work on hardware I already owned. I said I would write about
          what I learned as I went. Two months later, the project looks very different, so this is
          an update on where it stands.
        </p>

        <h2>Demesne is now a desktop app</h2>
        <p>
          The command line grew into a desktop app that runs on my Mac and on Linux. You open a
          project, ask for a change, and watch it read the code, make the edit and run the checks.
          It asks before it writes a file or runs a command, every edit opens as a diff, and you can
          rewind to any step.
        </p>
        <figure className="post-figure">
          <img src="/images/demesne/home-0821.jpg" alt="Demesne's home screen: a cherry blossom banner over the question What are we building?, with the composer below" loading="lazy" />
          <figcaption>Demesne’s home screen: pick a project and describe a change.</figcaption>
        </figure>
        <figure className="post-figure">
          <img src="/images/demesne/ask-0821.jpg" alt="A finished turn in Demesne: one line for the edit to hello.ts, one for the passing check, and a short summary" loading="lazy" />
          <figcaption>A finished request: the edit and the check each fold into one line, the summary says what changed, and the side panel shows the branch, the model and the changed file.</figcaption>
        </figure>
        <p className="figure-note">
          Screenshots are from the current release (v0.8.21) running a demo project.
        </p>
        <p>
          The model is my choice. It can run on my own machine, come from a Codex plan, or come
          through OpenRouter. That flexibility turned out to matter: it lets me compare a local model
          against a hosted one on the same task, in the same harness.
        </p>

        <h2>Drive: work that continues while I am away</h2>
        <p>
          The part I am most excited about is called Drive. It looks at failing checks, open pull
          requests and unfinished work, suggests what to do next, and can run that work on its own.
          Each run happens in its own git branch and worktree, never in my working copy. When I come
          back, I choose whether to apply the result, open a pull request, or throw it away. Anything
          that reaches beyond my machine, such as pushing code or publishing, still needs my approval.
        </p>
        <figure className="post-figure">
          <img src="/images/demesne/drive-0821.jpg" alt="Drive's panel listing three things it could do next, with Run the first now and look again" loading="lazy" />
          <figcaption>Drive’s ideas, opened from the Drive button in the top bar. If I leave it alone, it starts the first one after 20 quiet minutes.</figcaption>
        </figure>
        <p>
          Two other ideas grew from there. Threads let one chat split a job into up to three parallel
          pieces, each in its own branch, so they cannot step on each other. Foundry lets the agent
          answer with a page I can look at instead of a description, such as a mockup when the
          question is how something should look.
        </p>

        <h2>Beyond coding: a personal assistant</h2>
        <p>
          Demesne also has a second job now. On my Windows desktop, with a Radeon AI PRO R9700, it
          runs Qwen3.8-27B through llama.cpp as a personal assistant. It reads only the folders I
          share with it, can search them, keeps notes, runs questions on a schedule, and pushes
          answers and reminders to my phone. Nothing leaves the machine except the notifications I
          set up.
        </p>
        <p>
          To reach it from anywhere, I built an iPhone app. The phone does not run a model; it is a
          window onto the PC over my private network. From the phone I can chat with the assistant,
          follow my coding chats live, and tap Allow or Deny when an agent wants to edit a file or
          run a command.
        </p>

        <h2>What the harness taught me</h2>
        <p>
          My first note ended with a realization: the model is not the whole agent. The last two
          months made that much more concrete. Many of the hardest problems were not about the
          model at all.
        </p>
        <p>
          Context is one example. Qwen3.8-27B quietly stops generating once a prompt passes about
          130K tokens, so the assistant caps its context at 128K and starts a new conversation
          before it reaches the limit. Old file reads are trimmed once they pile up, so a long
          session does not carry everything it has ever read.
        </p>
        <p>
          Speed is another. llama.cpp can reuse the work it already did on a conversation, but only
          if the beginning of the conversation never changes. That is why the assistant puts the
          date and time on each new message instead of in its instructions at the top. A small
          detail, but it keeps long conversations fast.
        </p>
        <p>
          Safety is the third. An assistant that reads my files will eventually read a document
          that contains instructions. Demesne treats files as data, not instructions, and reports
          such text to me instead of following it. The file tool can only read, cannot leave the
          folders I shared, and skips secrets such as keys and password files.
        </p>
        <p>
          Measuring also changed my thinking. When I looked at the logs, 535 of 547 tool rounds on
          the Codex route made a single tool call, even though the instructions asked the model to
          batch its reads. The cause was a setting in the harness, not the model. Fixing it meant
          fewer rounds for the same work.
        </p>

        <h2>The question is still open</h2>
        <p>The question from my first note has not gone away:</p>
        <blockquote>
          How much useful coding work can a local model complete using the hardware I already own?
        </blockquote>
        <p>
          The difference is that I now have a harness good enough to start measuring it. That is
          where I want to take this notebook next: fewer descriptions of features, and more
          experiments with real numbers, including the ones that do not go the way I expect.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
