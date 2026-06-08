export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--hairline)] mt-24 py-8 px-6"
      style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--ink-dim)" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 Esabu Blessing</span>
        <span className="uppercase">Lagos, NG </span>
      </div>
    </footer>
  );
}
