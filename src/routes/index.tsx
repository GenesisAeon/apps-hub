import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppCard } from "@/components/hub/app-card";
import { KindFilter } from "@/components/hub/kind-filter";
import { SiteFooter } from "@/components/hub/site-footer";
import { SiteHeader } from "@/components/hub/site-header";
import {
  APPS,
  COMING_COUNT,
  LIVE_COUNT,
  filterApps,
  isKindFilter,
  type KindFilter as KindFilterId,
} from "@/lib/apps";

type Search = { kind?: KindFilterId };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    kind: isKindFilter(search.kind) && search.kind !== "alle" ? search.kind : undefined,
  }),
  component: Home,
});

function Home() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const kind: KindFilterId = search.kind ?? "alle";
  const visible = filterApps(kind);

  function setKind(next: KindFilterId) {
    void navigate({
      search: { kind: next === "alle" ? undefined : next },
    });
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-accent)_7%,transparent),transparent)]" />

      <main className="relative mx-auto w-full max-w-6xl flex-1 px-4 pt-10 pb-16 sm:px-6 sm:pt-14">
        <SiteHeader />

        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.03em] text-fg sm:text-5xl">
          GenesisAeon Apps
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Startseite der Live-Apps. Der Klimakatalog bleibt der Katalog der Pakete — hier öffnest
          du die Oberflächen und den Quellcode.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle">
          <span className="font-mono tabular-nums text-fg">{APPS.length} Apps</span>
          <span>{LIVE_COUNT} live</span>
          {COMING_COUNT > 0 ? <span>{COMING_COUNT} demnächst</span> : null}
        </div>

        <section className="mt-8">
          <KindFilter value={kind} onChange={setKind} />
        </section>

        <section className="mt-6">
          {visible.length === 0 ? (
            <div className="rounded-xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]">
              <p className="font-display text-xl text-fg">Keine Apps in dieser Kategorie</p>
              <p className="mt-2 text-sm text-muted">Filter zurücksetzen, um alle acht zu sehen.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
