export const KINDS = ["katalog", "kipppunkt", "mechanik", "framework"] as const;
export type Kind = (typeof KINDS)[number];

export const KIND_BADGE: Record<Kind, string> = {
  katalog: "Katalog",
  kipppunkt: "Kipppunkt",
  mechanik: "Mechanik",
  framework: "Framework",
};

export const KIND_FILTERS = [
  { id: "alle", label: "Alle" },
  { id: "katalog", label: "Katalog" },
  { id: "kipppunkt", label: "Kipppunkte" },
  { id: "mechanik", label: "Mechanik" },
  { id: "framework", label: "Framework" },
] as const;

export type KindFilter = (typeof KIND_FILTERS)[number]["id"];

export type HubApp = {
  id: string;
  index: string;
  title: string;
  summary: string;
  kind: Kind;
  liveUrl: string | null;
  repoUrl: string;
};

/**
 * Live URLs are recorded only after an HTTP 200 of the deployed site.
 * Never derive a Vercel hostname from the GitHub repo name —
 * `wolken.vercel.app` is a 404; the live app is `wolken-seven.vercel.app`.
 * `korallen-dhw-sandbox.vercel.app` was 404 on first check (04.09.2026)
 * and confirmed live later the same day.
 */
export const APPS: HubApp[] = [
  {
    id: "klimakatalog",
    index: "01",
    title: "Klimakatalog",
    summary:
      "Jedes Paket steht für ein eigenes, zitierbares Stück Klimawissenschaft — keine Universalgleichung.",
    kind: "katalog",
    liveUrl: "https://klimakatalog.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/klimakatalog",
  },
  {
    id: "amoc-kipppunkt",
    index: "02",
    title: "AMOC-Kipppunkt",
    summary:
      "Physik-Sandbox der Atlantischen Umwälzzirkulation. Die ODE kommt aus dem kalibrierten Paket.",
    kind: "kipppunkt",
    liveUrl: "https://amoc-kipppunkt.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/amoc-kipppunkt",
  },
  {
    id: "amazon-kipppunkt",
    index: "03",
    title: "Amazonas-Kipppunkt",
    summary:
      "Kubische Doppelmulden-Gleichung: Wald gegen Savanne, mit der PRODES-Realität 2025.",
    kind: "kipppunkt",
    liveUrl: "https://amazon-kipppunkt.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/amazon-kipppunkt",
  },
  {
    id: "meereis-albedo-sandbox",
    index: "04",
    title: "Meereis-Albedo-Sandbox",
    summary:
      "Zwei Polkappen, zwei Vorzeichen. Die Arktis verliert Kühlleistung — die Antarktis hat 2016 das Vorzeichen gewechselt.",
    kind: "mechanik",
    liveUrl: "https://meereis-albedo-sandbox.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/meereis-albedo-sandbox",
  },
  {
    id: "gamma-explorer",
    index: "05",
    title: "Γ-Explorer",
    summary:
      "Zwei Slider, eine Achse: wie sich Γ = arctanh(η) / σ über die Pakete legt.",
    kind: "framework",
    liveUrl: "https://gamma-explorer.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/gamma-explorer",
  },
  {
    id: "wolken",
    index: "06",
    title: "Wolken",
    summary:
      "Live-Diagnose der Grundner-Gleichung. Fünf Größen, drei Terme, R² = 0,94.",
    kind: "mechanik",
    liveUrl: "https://wolken-seven.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/wolken",
  },
  {
    id: "kaskaden-sandbox",
    index: "07",
    title: "Kaskaden-Sandbox",
    summary:
      "Das Wunderling-Netz aus Grönland, Westantarktis, AMOC und Amazonas — vier Elemente, echte Kanten.",
    kind: "framework",
    liveUrl: "https://kaskaden-sandbox.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/kaskaden-sandbox",
  },
  {
    id: "korallen-dhw-sandbox",
    index: "08",
    title: "Korallen-DHW-Sandbox",
    summary:
      "NOAA Degree Heating Weeks: fünf Alarmstufen, vier globale Ereignisse, Recovery-Fenster sechs Jahre.",
    kind: "mechanik",
    liveUrl: "https://korallen-dhw-sandbox.vercel.app",
    repoUrl: "https://github.com/GenesisAeon/korallen-dhw-sandbox",
  },
  {
    id: "klimasensitivitaet-sandbox",
    index: "09",
    title: "Klimasensitivität-Sandbox",
    summary:
      "Vier Einträge, ein offener Streit: AR6, Myers 2021, Tan 2025 und CCF-Studien 2025/26. is_genuinely_disputed() bleibt wahr.",
    kind: "mechanik",
    liveUrl: null,
    repoUrl: "https://github.com/GenesisAeon/klimasensitivitaet-sandbox",
  },
];

export function isKindFilter(value: unknown): value is KindFilter {
  return KIND_FILTERS.some((item) => item.id === value);
}

export function filterApps(kind: KindFilter): HubApp[] {
  if (kind === "alle") return APPS;
  return APPS.filter((app) => app.kind === kind);
}

export const LIVE_COUNT = APPS.filter((app) => app.liveUrl).length;
export const COMING_COUNT = APPS.length - LIVE_COUNT;
