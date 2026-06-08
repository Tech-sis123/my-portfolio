import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import RevealOnScroll from "@/components/RevealOnScroll";
import SkillIcon from "@/components/SkillIcon";
import ProjectLinks from "@/components/ProjectLinks";
import { projects, skillGroups } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Backend Engineering — Esabu Blessing",
  description: "Systems, APIs, Infrastructure.",
};

export default function BackendPage() {
  const domainProjects = projects.filter(p => (p.domains as readonly string[]).includes("backend"));
  const domainSkills = skillGroups.filter(g => g.label.includes("Backend") || g.label.includes("Languages"));

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 pt-32 pb-12 max-w-[1200px] mx-auto">
        <h1 className="overflow-hidden" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 1.05 }}>
          <span className="block italic" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--backend)" }}>Backend</span>
          <span className="block" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>Engineering.</span>
        </h1>
        <p className="mt-6" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", letterSpacing: "0.12em", maxWidth: "48rem" }}>
          <span style={{ color: "var(--ink)" }}>Systems · APIs · Infra.</span>
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="01" label="About Backend" /></RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <RevealOnScroll delay={0.1}>
              <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink-dim)", fontWeight: 300 }}>
                <p>Building scalable, robust backend systems. From real-time telecom NLP APIs to loan default predictors.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--ink-fainter)", border: "1px solid var(--hairline)", maxWidth: 360 }}>
                <Image
                  src="/images/backend-photo.jpg"
                  alt="Backend engineering — code editor showing payment controllers"
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
                  <div className="flex-shrink-0 w-40" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--backend)", textTransform: "uppercase" }}>{g.label}</div>
                  <div className="flex flex-wrap gap-2">{g.skills.map((s) => <span key={s} className="skill-pill"><SkillIcon skill={s} /> {s}</span>)}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="03" label="Featured Projects" /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {domainProjects.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08}>
                <div className="card-hover p-6 h-full flex flex-col" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < domainProjects.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <h3 className="italic mb-1" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", fontWeight: 300 }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--backend)", textTransform: "uppercase", marginBottom: "0.75rem" }}>{p.subtitle}</div>
                  <p style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>{p.desc}</p>
                  <ProjectLinks github={p.github} liveUrl={p.liveUrl} accentColor="var(--backend)" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)] flex justify-center">
          <a href="/docs/backend.pdf" className="inline-block px-8 py-4 border border-[var(--backend)] text-[var(--backend)] hover:bg-[var(--backend)] hover:text-[var(--bg)] transition-colors" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            View Backend CV
          </a>
        </section>
      </div>
    </>
  );
}
