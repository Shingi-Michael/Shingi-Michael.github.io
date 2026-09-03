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
    slug: "the-start-of-curiosity",
    date: "3 Sep 2026",
    title: "The Start of Curiosity",
    summary: "How limited hardware, local models, and a practical coding problem became the beginning of Demesne.",
    tag: "Demesne",
    status: "Published",
    href: "/notes/the-start-of-curiosity",
  },
];
