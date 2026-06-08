const domainColors: Record<string, string> = {
  backend: "var(--backend)",
  hardware: "var(--hardware)",
  research: "var(--research)",
  project: "var(--project)",
};

interface Props {
  domain: "backend" | "hardware" | "research" | "project";
  label?: string;
  size?: number;
}

export default function DomainDot({ domain, label, size = 6 }: Props) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block rounded-full flex-shrink-0"
        style={{ width: size, height: size, background: domainColors[domain] }}
      />
      {label && (
        <span
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--ink-dim)", textTransform: "uppercase" }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
