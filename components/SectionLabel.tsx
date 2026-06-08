interface Props {
  ordinal: string;
  label: string;
}

export default function SectionLabel({ ordinal, label }: Props) {
  return (
    <div className="section-label">
      <span>{ordinal}</span>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
