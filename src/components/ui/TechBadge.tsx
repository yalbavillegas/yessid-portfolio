export default function TechBadge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "gold";
}) {
  const styles =
    variant === "gold"
      ? "border-border-gold bg-gold-muted text-gold"
      : "border-border-subtle bg-pill text-fg-secondary hover:border-border-strong hover:text-fg-primary";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition duration-200 ${styles}`}
    >
      {label}
    </span>
  );
}
