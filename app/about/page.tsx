import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "About — Shingi Kamucheka" };
export const dynamic = "force-static";

export default function AboutPage() {
  return <main><SiteHeader />
    <section className="page-intro about-intro shell"><p className="eyebrow">About this notebook</p><h1>I have just started a PhD in AI. I am learning by directing, building, testing, and going back to understand what happened.</h1></section>
    <section className="shell about-grid"><div className="about-main"><p className="dropcap">Demesne began as a product idea and became a way to learn systems research. I direct the questions, priorities, and decisions. Sol has performed much of the implementation and experimental automation. This site is where I do the slower work of understanding the code, reconstructing the evidence, and writing in my own voice.</p><h2>Why publish before I feel ready?</h2><p>Because the changes in understanding are part of the research. I want a record of the confounds we missed, the optimizations that failed, and the questions I learned to ask only after a result surprised me.</p><h2>What I am not claiming</h2><p>I am not claiming to have personally written every line or to already be an expert in every system I discuss. I am responsible for checking what I publish, learning the mechanisms, and making clear which results I have personally reproduced.</p></div><aside className="about-aside"><p className="aside-label">Current focus</p><ul><li>Local LLM inference</li><li>Long-context systems</li><li>Coding agents</li><li>Research methodology</li></ul><p className="aside-label">Project</p><Link href="/demesne">Demesne <ArrowUpRight size={15} /></Link></aside></section>
    <SiteFooter />
  </main>;
}
