export type Note = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
  status: "Published" | "Working note";
  href: string;
};

export const notes: Note[] = [
  {
    slug: "from-a-coding-cli-to-my-own-domain",
    date: "8 Nov 2026",
    title: "From a Coding CLI to My Own Domain",
    summary: "Two months on, Demesne is a desktop coding agent, a personal assistant on my own GPU, and an iPhone app that reaches both.",
    tag: "Demesne",
    status: "Published",
    href: "/notes/from-a-coding-cli-to-my-own-domain",
  },
  {
    slug: "the-start-of-curiosity",
    date: "3 Sep 2026",
    title: "The Start of Curiosity",
    summary: "How limited hardware, local models, and a practical coding problem became the beginning of Demesne.",
    tag: "Demesne",
    status: "Published",
    href: "/notes/the-start-of-curiosity",
  },
];
