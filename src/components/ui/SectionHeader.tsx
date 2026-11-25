import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between gap-6 lg:flex-row lg:items-end ${className}`}
    >
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-3 sm:mb-5">
          <span
            aria-hidden="true"
            className="h-px w-6 bg-gold transition-all duration-300"
          />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-[13px] sm:tracking-[0.28em]">
            {eyebrow}
          </p>
        </div>

        <h2 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-fg-primary sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-fg-muted sm:mt-6 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
