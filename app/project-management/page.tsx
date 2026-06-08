import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import RevealOnScroll from "@/components/RevealOnScroll";
import SkillIcon from "@/components/SkillIcon";
import { leadership, skillGroups, pmExperience, pmCertifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Project Management — Esabu Blessing",
  description: "Teams, Hackathons, Operations.",
};

export default function PMPage() {
  return (
    <>
      <section className="relative flex flex-col justify-center px-6 pt-32 pb-12 max-w-[1200px] mx-auto">
        <h1 className="overflow-hidden" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 1.05 }}>
          <span className="block italic" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--project)" }}>Project</span>
          <span className="block" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>Management.</span>
        </h1>
        <p className="mt-6" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", letterSpacing: "0.12em", maxWidth: "48rem" }}>
          <span style={{ color: "var(--ink)" }}>Teams · Hackathons · Operations.</span>
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="01" label="About Management" /></RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <RevealOnScroll delay={0.1}>
              <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink-dim)", fontWeight: 300 }}>
                <p>Orchestrating complex technical projects. From leading hackathon teams to managing communities and aligning cross-functional engineering goals.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--ink-fainter)", border: "1px solid var(--hairline)", maxWidth: 360 }}>
                <Image src="/images/pm-photo.png" alt="Project Management Profile" fill style={{ objectFit: "cover" }} />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="02" label="Experience" /></RevealOnScroll>
          <div className="space-y-12">
            {pmExperience.map((exp, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  <div className="md:w-1/4 flex-shrink-0" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", color: "var(--ink-dim)", letterSpacing: "0.05em" }}>
                    {exp.period}
                  </div>
                  <div className="md:w-3/4">
                    <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.25rem" }}>{exp.role}</h3>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", color: "var(--project)", textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>{exp.org} · {exp.location}</div>
                    <p style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.95rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>{exp.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="03" label="Tools & Toolkit" /></RevealOnScroll>
          <div className="space-y-8">
            {skillGroups.filter(g => g.label.includes("PM")).map((g, gi) => (
              <RevealOnScroll key={g.label} delay={gi * 0.07}>
                <div className="flex flex-wrap items-start gap-x-6 gap-y-3 py-4 border-b border-[var(--hairline)]">
                  <div className="flex-shrink-0 w-40" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--project)", textTransform: "uppercase" }}>{g.label}</div>
                  <div className="flex flex-wrap gap-2">{g.skills.map((s) => <span key={s} className="skill-pill"><SkillIcon skill={s} /> {s}</span>)}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll><SectionLabel ordinal="04" label="Certifications" /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {pmCertifications.map((cert, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="card-hover p-6" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < pmCertifications.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", fontWeight: 300, marginBottom: "0.5rem" }}>{cert.title}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem", color: "var(--project)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{cert.issuer}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)]">
          <SectionLabel ordinal="05" label="Leadership & Volunteer" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {leadership.map((l, i) => (
              <RevealOnScroll key={l.org} delay={i * 0.08}>
                <div className="card-hover p-6" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < leadership.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--project)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{l.role}</div>
                  <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", fontWeight: 300, marginBottom: "0.5rem" }}>{l.org}</div>
                  <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-dim)", lineHeight: 1.5 }}>{l.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[var(--hairline)] flex justify-center">
          <a href="/docs/pm.pdf" className="inline-block px-8 py-4 border border-[var(--project)] text-[var(--project)] hover:bg-[var(--project)] hover:text-[var(--bg)] transition-colors" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            View PM CV
          </a>
        </section>
      </div>
    </>
  );
}
