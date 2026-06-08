import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import RevealOnScroll from "@/components/RevealOnScroll";
import DomainDot from "@/components/DomainDot";
import SkillIcon from "@/components/SkillIcon";
import ProjectLinks from "@/components/ProjectLinks";

export const metadata: Metadata = {
  title: "Esabu Blessing — Computer Engineer",
  description:
    "Computer Engineering student at the University of Lagos. Backend systems, embedded hardware, applied research, project management.",
};

import {
  stats,
  wins,
  skillGroups,
  experience,
  projects,
  leadership,
  awards,
  papers,
  doors,
  connects,
  domainColorMap,
} from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col justify-center px-6 pt-32 pb-12 max-w-[1200px] mx-auto">
        <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Lagos, Nigeria · Available Q3 2026
        </div>

        <h1
          className="overflow-hidden"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 1.05 }}
        >
          <span className="block" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", animationDelay: "0.55s", opacity: 1 }}>
            Esabu
          </span>
          <span className="block italic" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", animationDelay: "0.75s", opacity: 1 }}>
            Blessing.
          </span>
        </h1>

        <div className="mt-6" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)", letterSpacing: "0.12em", maxWidth: "48rem" }}>
          <div style={{ color: "var(--ink)" }}>Computer Engineer.</div>
          <div className="mt-1" style={{ color: "var(--ink-dim)" }}>Backend, Hardware, Research, Project Management.</div>
        </div>

        {/* Domain legend */}
        <div className="flex flex-wrap items-center gap-6 mt-8 pt-4 border-t border-[var(--hairline)]">
          <div className="flex flex-wrap gap-4">
            {(["backend", "hardware", "research", "project"] as const).map((d) => (
              <DomainDot key={d} domain={d} label={d === "project" ? "Project Mgmt" : d} />
            ))}
          </div>
          <div className="ml-auto" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--ink-fainter)" }}>
            SCROLL ↓
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="border-t border-b border-[var(--hairline)] py-6 px-6 backdrop-blur-sm sticky top-14 z-10" style={{ background: "rgba(7,7,7,0.6)" }}>
        <div className="max-w-[1200px] mx-auto flex items-start gap-4">
          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
            <span className="relative inline-block w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400" />
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
            </span>
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--ink-dim)", textTransform: "uppercase" }}>Currently</span>
          </div>
          <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontWeight: 300, lineHeight: 1.5 }}>
            Backend Engineer Intern at{" "}
            <em>Nithub UNILAG</em> · Microsoft AI Hackathon Winner with{" "}
            <em>VoiceIQ</em>
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">

        {/* 01 BY THE NUMBERS */}
        <section className="py-24">
          <RevealOnScroll>
            <SectionLabel ordinal="01" label="By the Numbers" />
          </RevealOnScroll>
          <div className="grid grid-cols-3 gap-px border border-[var(--hairline)]">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.08}>
                <div className={`p-8 border-[var(--hairline)] ${i < 3 ? "border-b" : ""} ${i % 3 !== 2 ? "border-r" : ""}`} style={{ borderColor: "var(--hairline)" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.58rem", letterSpacing: "0.15em", color: "var(--ink-fainter)", marginBottom: "0.5rem" }}>
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="border-t border-[var(--hairline)] pt-4">
                    <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1 }}>
                      {s.n}
                    </div>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--ink-dim)", marginTop: "0.5rem", textTransform: "uppercase" }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 02 ABOUT */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="02" label="About" />
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <RevealOnScroll delay={0.1}>
              <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink-dim)", fontWeight: 300 }}>
                <p>
                  I&apos;m a Computer Engineering student at the University of Lagos, building across backend
                  systems, embedded hardware, applied research, and project management. What ties it
                  together: a deep interest in systems that matter — financial inclusion, maternal health, telecom
                  — and the discipline to ship them end-to-end.
                </p>
                <p className="mt-4">
                  From XGBoost loan-default models, to ESP32 cardiometabolic devices, to
                  USSD-blockchain protocols for indigenous knowledge.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5", background: "var(--ink-fainter)", border: "1px solid var(--hairline)", maxWidth: 360 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Esabu Blessing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>


        {/* 03 SKILLS */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="03" label="Skills · Toolkit" />
          </RevealOnScroll>
          <div className="space-y-8">
            {skillGroups.map((g, gi) => (
              <RevealOnScroll key={g.label} delay={gi * 0.07}>
                <div className="flex flex-wrap items-start gap-x-6 gap-y-3 py-4 border-b border-[var(--hairline)]">
                  <div className="flex-shrink-0 w-40" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--ink-faint)", textTransform: "uppercase", paddingTop: "0.2rem" }}>
                    {g.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className="skill-pill">
                        <SkillIcon skill={s} /> {s}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 04 EXPERIENCE */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="04" label="Experience" />
          </RevealOnScroll>
          <div className="space-y-0">
            {experience.map((e, i) => (
              <RevealOnScroll key={e.org + e.role} delay={i * 0.08}>
                <div className="row-hover flex items-start gap-5 py-5 border-b border-[var(--hairline)]">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[var(--hairline)]"
                    style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-dim)" }}
                  >
                    {e.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", fontWeight: 300 }}>{e.role}</div>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--ink-dim)", margin: "0.25rem 0" }}>{e.org}</div>
                    <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-faint)", lineHeight: 1.5 }}>{e.desc}</div>
                  </div>
                  <div className="flex-shrink-0 text-right" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-faint)" }}>
                    <div>{e.period}</div>
                    <div className="mt-1">{e.location}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 05 FEATURED PROJECTS */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="05" label="Featured Projects" />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {projects.filter(p => !("hideOnHome" in p && p.hideOnHome)).map((p, i, arr) => (
              <RevealOnScroll key={p.title} delay={i * 0.08}>
                <div className="card-hover p-6 h-full flex flex-col" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < arr.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <div className="flex gap-2 mb-3">
                    {p.domains.map((d) => <DomainDot key={d} domain={d} />)}
                  </div>
                  <h3 className="italic mb-1" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", fontWeight: 300 }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: "0.75rem" }}>{p.subtitle}</div>
                  <p style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>{p.desc}</p>
                  <ProjectLinks github={p.github} liveUrl={p.liveUrl} accentColor={domainColorMap[p.domains[0]] || "var(--ink-dim)"} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 06 LEADERSHIP */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="06" label="Leadership & Volunteer" />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--hairline)]">
            {leadership.map((l, i) => (
              <RevealOnScroll key={l.org} delay={i * 0.08}>
                <div className="card-hover p-6" style={{ borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", borderBottom: i < leadership.length - 2 ? "1px solid var(--hairline)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{l.role}</div>
                  <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", fontWeight: 300, marginBottom: "0.5rem" }}>{l.org}</div>
                  <div style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.85rem", color: "var(--ink-dim)", lineHeight: 1.5 }}>{l.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 07 AWARDS */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="07" label="Awards & Honors" />
          </RevealOnScroll>
          <div className="border border-[var(--hairline)]">
            {awards.map((a, i) => (
              <RevealOnScroll key={a.title} delay={i * 0.06}>
                <div className={`row-hover flex items-center gap-6 px-6 py-4 ${i < awards.length - 1 ? "border-b border-[var(--hairline)]" : ""}`}>
                  <span className="flex-shrink-0 w-12" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--ink-faint)" }}>{a.year}</span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-fraunces)", fontSize: "0.95rem", fontWeight: 300 }}>{a.title}</span>
                  <span className="flex-shrink-0 text-right" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-faint)" }}>{a.source}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 08 PUBLICATIONS */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="08" label="Publications" />
          </RevealOnScroll>
          <div className="border border-[var(--hairline)]">
            {papers.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.07}>
                <div className={`row-hover flex items-center justify-between gap-6 px-6 py-5 ${i < papers.length - 1 ? "border-b border-[var(--hairline)]" : ""}`}>
                  <span className="italic" style={{ fontFamily: "var(--font-fraunces)", fontSize: "0.95rem", fontWeight: 300, flex: 1 }}>{p.title}</span>
                  <span className="flex-shrink-0 text-right" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--ink-faint)" }}>
                    {p.venue} · {p.year}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 09 GO DEEPER */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="09" label="Go Deeper" />
          </RevealOnScroll>
          <div className="mb-10">
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300 }}>
              Four lenses, one engineer. <em>Pick the one you came for.</em>
            </h2>
            <p className="mt-3" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--ink-dim)", maxWidth: "46rem", lineHeight: 1.7 }}>
              I tailor my CV for the role you&apos;re hiring for. Choose the version that matches the position.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doors.map((d, i) => (
              <RevealOnScroll key={d.label} delay={i * 0.09}>
                <div
                  className="group relative overflow-hidden p-8 border border-[var(--hairline)] transition-all duration-400"
                  style={{
                    aspectRatio: "5/3",
                    background: `radial-gradient(circle at 30% 50%, ${d.color}11 0%, transparent 60%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${d.color}22 0%, transparent 60%)` }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.15em", color: d.color, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        {d.sub}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 300 }}>{d.label}</h3>
                    </div>
                    <div className="flex items-center gap-3 justify-end">
                      <a
                        href={d.cv}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--hairline)] hover:border-[rgba(245,243,239,0.45)] transition-colors"
                        style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--ink-dim)", textDecoration: "none", textTransform: "uppercase" }}
                      >
                        View CV <span style={{ fontSize: "0.75rem" }}>↗</span>
                      </a>
                      <Link
                        href={d.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 transition-colors"
                        style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.12em", color: d.color, textDecoration: "none", textTransform: "uppercase", border: `1px solid ${d.color}44`, background: `${d.color}0a` }}
                      >
                        Delve deeper <span className="transform group-hover:translate-x-1 transition-transform duration-300" style={{ fontSize: "0.75rem" }}>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 10 LET'S CONNECT */}
        <section className="py-24 border-t border-[var(--hairline)]">
          <RevealOnScroll>
            <SectionLabel ordinal="10" label="Let's Connect" />
          </RevealOnScroll>
          <div className="mb-10">
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300 }}>
              Let&apos;s build <em>something good.</em>
            </h2>
            <p className="mt-3" style={{ fontFamily: "var(--font-bricolage)", fontSize: "0.95rem", color: "var(--ink-dim)", maxWidth: "40rem", lineHeight: 1.65 }}>
              Open to backend, hardware, research, and product roles. Internships, contracts, research collaborations — drop a line.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--hairline)]">
            {connects.map((c, i) => (
              <RevealOnScroll key={c.label} delay={i * 0.07}>
                <a
                  href={c.href}
                  className="row-hover flex items-center gap-4 px-6 py-5 border-b border-[var(--hairline)] sm:border-r sm:odd:border-r sm:even:border-r-0 last:border-b-0"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex-1">
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.58rem", letterSpacing: "0.15em", color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: "0.3rem" }}>{c.label}</div>
                    <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "0.95rem", fontWeight: 300 }}>{c.handle}</div>
                  </div>
                  <span style={{ color: "var(--ink-faint)" }}>→</span>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
