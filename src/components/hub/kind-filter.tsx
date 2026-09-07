import { KINDS, type KindFilter as KindFilterId } from "@/lib/apps";
import { useLocale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

const FILTER_IDS = ["alle", ...KINDS] as const;

export function KindFilter({
  value,
  onChange,
}: {
  value: KindFilterId;
  onChange: (next: KindFilterId) => void;
}) {
  const { t } = useLocale();
  return (
    <div role="group" aria-label={t.kindFilterAria} className="flex flex-wrap gap-2">
      {FILTER_IDS.map((id) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(id)}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium",
              "transition-[background-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70",
              active
                ? "bg-accent text-accent-fg"
                : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg hover:shadow-[var(--shadow-border-hover)]",
            )}
          >
            {t.kindFilters[id]}
          </button>
        );
      })}
    </div>
  );
}
