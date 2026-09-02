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
    slug: "kv-cache",
    date: "30 Aug 2026",
    title: "The smaller KV cache that used more swap",
    summary: "A plausible memory optimization failed once the benchmark actually exercised long-context cache behavior.",
    tag: "Negative result",
    status: "Published",
    href: "/notes/kv-cache",
  },
  {
    slug: "prefix-reuse",
    date: "31 Aug 2026",
    title: "Why deleting context made the next prompt slower",
    summary: "A field note on prefix reuse, cold prefill, and why fewer tokens can be the more expensive request.",
    tag: "Context systems",
    status: "Working note",
    href: "/notes",
  },
  {
    slug: "terminal-interface",
    date: "28 Aug 2026",
    title: "A terminal is an interface, not an agent",
    summary: "Durable state changed my mental model of what should own a long-running coding turn.",
    tag: "Architecture",
    status: "Working note",
    href: "/notes",
  },
  {
    slug: "measurement-contract",
    date: "27 Aug 2026",
    title: "Tokens per second was the wrong first metric",
    summary: "Separating cold load, prefill, decode, tools, and full-task duration before optimizing any of them.",
    tag: "Method",
    status: "Working note",
    href: "/notes",
  },
];
