export function SectionHeading({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h2 className="font-mono text-[13px] text-text-muted">
        <span className="text-accent">{number}</span>
        {" ~/"}
        <span className="text-text-heading">{label.toLowerCase()}</span>
        <span className="ml-1 text-text-muted">$</span>
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
