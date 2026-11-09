import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { notes } from "@/lib/content";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="introduction">
        <a href="/notes/from-a-coding-cli-to-my-own-domain" className="notebook-sticker" title="Demesne">
          <img src="/images/demesne-sticker.svg" alt="Demesne sticker: the d. mark under a full moon and cherry blossoms" width="260" height="260" />
        </a>
        <h1>Notes on learning AI systems.</h1>
        <p>
          I have recently started a PhD in AI. I use this page to understand and write about
          the systems I am building, the experiments that failed, and the questions I am still learning to ask.
        </p>
      </section>

      <section id="writing" className="writing-section">
        <h2>Writing</h2>
        <div className="post-list">
          {notes.map((note) => (
            <article className="post-row" key={note.slug}>
              <time>{note.date}</time>
              <div>
                {note.status === "Published" ? (
                  <h3><a href={note.href}>{note.title}</a></h3>
                ) : (
                  <h3>{note.title}</h3>
                )}
                <p>{note.summary}</p>
                {note.status !== "Published" && <small>Draft</small>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About</h2>
        <p>
          My current project is Demesne, an AI agent that runs on hardware I own. It is a desktop
          coding agent for Mac and Linux, a personal assistant running Qwen3.8-27B on my own GPU, and
          an iPhone app that reaches both. I direct the research questions and experiments while
          learning the underlying code and systems concepts. This is a working notebook, not a record
          of finished expertise.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
