import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { HubApp } from "@/lib/apps";
import { useLocale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

export function AppCard({ app }: { app: HubApp }) {
  const { t } = useLocale();
  const comingSoon = !app.liveUrl;
  const title = t.appTitle[app.id] ?? app.title;
  const summary = t.appSummary[app.id] ?? app.summary;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-xl bg-surface p-5",
        "shadow-[var(--shadow-border)]",
        "transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:shadow-[var(--shadow-border-hover)]",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wider text-accent tabular-nums">{app.index}</p>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <Badge variant="accent">{t.kindBadge[app.kind]}</Badge>
          {comingSoon ? <Badge variant="outline">{t.comingSoon}</Badge> : null}
        </div>
      </div>

      <h2 className="mt-4 font-display text-xl leading-snug tracking-tight text-fg">{title}</h2>
      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">{summary}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-6">
        {app.liveUrl ? (
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-sm text-fg outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-ring/70"
          >
            {t.open}
            <ArrowUpRight className="size-4" />
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center text-sm text-subtle">{t.comingSoon}</span>
        )}
        <a
          href={app.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted outline-none hover:text-fg focus-visible:ring-2 focus-visible:ring-ring/70"
        >
          <Github className="size-3.5" />
          {t.sourceCode}
        </a>
      </div>
    </article>
  );
}
