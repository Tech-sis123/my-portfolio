import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import RevealOnScroll from "@/components/RevealOnScroll";
import SkillIcon from "@/components/SkillIcon";
import ProjectLinks from "@/components/ProjectLinks";
import { projects, papers, skillGroups } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Applied Research — Esabu Blessing",
  description: "Papers, ML, Signal Processing.",
};

export default function ResearchPage() {
  const domainProjects = projects.filter(p => (p.domains as readonly string[]).includes("research"));
  const domainSkills = skillGroups.filter(g => g.label.includes("ML") || g.label.includes("Languages"));

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 pt-32 pb-12 max-w-[1200px] mx-auto">
        <h1 className="overflow-hidden" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 1.05 }}>
          <span className="block italic" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--research)" }}>Applied</span>
          <span className="block" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>Research.</span>
        </h1>
        <p className="mt-6" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", letterSpacing: "0.12em", maxWidth: "48rem" }}>
          <span style={{ color: "var(--ink)" }}>Papers · ML · Signal Processing.</span>
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="01" label="About Research" /></RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <RevealOnScroll delay={0.1}>
              <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink-dim)", fontWeight: 300 }}>
                <p>Bridging academia and engineering. Conducting rigorous research in machine learning and embedded systems, publishing findings, and turning theory into practice.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--ink-fainter)", border: "1px solid var(--hairline)", maxWidth: 360 }}>
                <Image
                  src="/images/applied-research.png"
                  alt="Applied Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="02" label="Skills" /></RevealOnScroll>
          <div className="space-y-8">
            {domainSkills.map((g, gi) => (
              <RevealOnScroll key={g.label} delay={gi * 0.07}>
                <div className="flex flex-wrap items-start gap-x-6 gap-y-3 py-4 border-b border-[var(--hairline)]">
                  <div className="flex-shrink-0 w-40" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--research)", textTransform: "uppercase" }}>{g.label}</div>
                  <div className="flex flex-wrap gap-2">{g.skills.map((s) => <span key={s} className="skill-pill"><SkillIcon skill={s} /> {s}</span>)}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="03" label="Papers & Publications" /></RevealOnScroll>
          <div className="border border-[var(--hairline)]">
            {papers.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.07}>
                <div className={`row-hover flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 px-6 py-5 ${i < papers.length - 1 ? "border-b border-[var(--hairline)]" : ""}`}>
                  <span className="italic" style={{ fontFamily: "var(--font-fraunces)", fontSize: "0.95rem", fontWeight: 300, flex: 1 }}>{p.title}</span>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-right" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-faint)" }}>
                      {p.venue} · {p.year}
                    </span>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 border border-[var(--research)] text-[var(--research)] hover:bg-[var(--research)] hover:text-[var(--bg)] transition-colors whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        View
                      </a>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="04" label="Featured Projects" /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {domainProjects.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08}>
                <div className="card-hover p-6 h-full flex flex-col" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < domainProjects.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <h3 className="italic mb-1" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", fontWeight: 300 }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--research)", textTransform: "uppercase", marginBottom: "0.75rem" }}>{p.subtitle}</div>
                  <p style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-dim)", lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
                  <div className="mt-6"><ProjectLinks github={p.github} liveUrl={p.liveUrl} accentColor="var(--research)" /></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)] flex justify-center">
          <a href="/docs/research.pdf" className="inline-block px-8 py-4 border border-[var(--research)] text-[var(--research)] hover:bg-[var(--research)] hover:text-[var(--bg)] transition-colors" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            View Research CV
          </a>
        </section>
      </div>
    </>
  );
}
