"use client";

export default function ProjectLinks({ github, liveUrl, accentColor = "var(--backend)" }: { github?: string; liveUrl?: string; accentColor?: string }) {
  if (!github && !liveUrl) return null;

  const linkBase: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains)",
    fontSize: "0.6rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "0.4rem 0.75rem",
    transition: "all 0.25s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <div className="flex gap-3 mt-4 pt-3 border-t border-[var(--hairline)]" style={{ marginTop: "auto" }}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkBase, color: "var(--ink-dim)", border: "1px solid var(--hairline)" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--ink-dim)"; }}
        >
          View on GitHub ↗
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkBase, color: accentColor, border: `1px solid ${accentColor}` }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = accentColor; }}
        >
          View Page ↗
        </a>
      )}
    </div>
  );
}
