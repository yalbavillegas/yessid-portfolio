"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type {
  ProjectLegacyStatus,
  ProjectMaturity,
  ProjectPresentation,
} from "@/types/project";

export default function StatusBadge({
  status,
  maturity,
  presentation,
  surface = "adaptive",
  showPresentation = false,
}: {
  status?: ProjectLegacyStatus;
  maturity?: ProjectMaturity;
  presentation?: ProjectPresentation;
  surface?: "adaptive" | "darkStage";
  showPresentation?: boolean;
}) {
  const { t } = useLanguage();

  const maturityLabel = maturity
    ? t.projects.maturity[maturity]
    : status
      ? t.projects.status[status]
      : t.projects.status.active;

  const presentationLabel =
    showPresentation && presentation && presentation !== "standard"
      ? t.projects.presentation[presentation]
      : null;

  const isProd = maturity === "production" || status === "completed";
  const isResearch =
    presentation === "research" ||
    maturity === "alpha" ||
    maturity === "prototype";

  const dotColor = isProd
    ? "bg-emerald-400"
    : isResearch
      ? "bg-sky-400"
      : "bg-gold";

  const containerStyle =
    surface === "darkStage"
      ? "border-white/14 bg-[#060a14]/80 text-slate-100 backdrop-blur-md"
      : "border-border-subtle bg-pill text-fg-secondary";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wide sm:text-xs ${containerStyle}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${dotColor}`}
      />
      <span>{maturityLabel}</span>
      {presentationLabel && (
        <>
          <span aria-hidden="true" className="opacity-40">
            ·
          </span>
          <span className="text-gold">{presentationLabel}</span>
        </>
      )}
    </span>
  );
}
