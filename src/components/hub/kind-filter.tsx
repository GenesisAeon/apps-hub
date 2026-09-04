import { KIND_FILTERS, type KindFilter } from "@/lib/apps";
import { cn } from "@/lib/utils";

export function KindFilter({
  value,
  onChange,
}: {
  value: KindFilter;
  onChange: (next: KindFilter) => void;
}) {
  return (
    <div
      role="group"
      aria-label="App-Kategorie"
      className="flex flex-wrap gap-2"
    >
      {KIND_FILTERS.map((item) => {
        const active = value === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(item.id)}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium",
              "transition-[background-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70",
              active
                ? "bg-accent text-accent-fg"
                : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg hover:shadow-[var(--shadow-border-hover)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
