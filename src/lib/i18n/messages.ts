export type Locale = "de" | "en";
export type Kind = "katalog" | "kipppunkt" | "mechanik" | "framework";
export type KindFilter = "alle" | Kind;

export type Messages = {
  language: string;
  documentTitle: string;
  title: string;
  lead: string;
  appsCount: (n: number) => string;
  liveCount: (n: number) => string;
  comingCount: (n: number) => string;
  noApps: string;
  noAppsHint: (n: number) => string;
  kindFilterAria: string;
  kindFilters: Record<KindFilter, string>;
  kindBadge: Record<Kind, string>;
  open: string;
  comingSoon: string;
  sourceCode: string;
  footerBlurb: string;
  footerNavAria: string;
  linkKlimakatalog: string;
  appTitle: Record<string, string>;
  appSummary: Record<string, string>;
};

export const messages: Record<Locale, Messages> = {
  de: {
    language: "Sprache",
    documentTitle: "GenesisAeon Apps",
    title: "GenesisAeon Apps",
    lead: "Startseite der Live-Apps. Der Klimakatalog bleibt der Katalog der Pakete - hier öffnest du die Oberflächen und den Quellcode.",
    appsCount: (n) => `${n} Apps`,
    liveCount: (n) => `${n} live`,
    comingCount: (n) => `${n} demnächst`,
    noApps: "Keine Apps in dieser Kategorie",
    noAppsHint: (n) => `Filter zurücksetzen, um alle ${n} zu sehen.`,
    kindFilterAria: "App-Kategorie",
    kindFilters: { alle: "Alle", katalog: "Katalog", kipppunkt: "Kipppunkte", mechanik: "Mechanik", framework: "Framework" },
    kindBadge: { katalog: "Katalog", kipppunkt: "Kipppunkt", mechanik: "Mechanik", framework: "Framework" },
    open: "Öffnen",
    comingSoon: "Demnächst",
    sourceCode: "Quellcode",
    footerBlurb: "Johann Römer. MIT. Dieser Hub ersetzt den Klimakatalog nicht.",
    footerNavAria: "Weiterführende Links",
    linkKlimakatalog: "Klimakatalog",
    appTitle: {
      klimakatalog: "Klimakatalog",
      "amoc-kipppunkt": "AMOC-Kipppunkt",
      "amazon-kipppunkt": "Amazonas-Kipppunkt",
      "meereis-albedo-sandbox": "Meereis-Albedo-Sandbox",
      "gamma-explorer": "G-Explorer",
      wolken: "Wolken",
      "kaskaden-sandbox": "Kaskaden-Sandbox",
      "klimasensitivitaet-sandbox": "Klimasensitivität",
      "ozeanversauerung-sandbox": "Ozeanversauerung",
      "korallen-dhw-sandbox": "Korallen-DHW",
    },
    appSummary: {
      klimakatalog: "Jedes Paket steht für ein eigenes, zitierbares Stück Klimawissenschaft - keine Universalgleichung.",
      "amoc-kipppunkt": "Physik-Sandbox der Atlantischen Umwälzzirkulation. Die ODE kommt aus dem kalibrierten Paket.",
      "amazon-kipppunkt": "Kubische Doppelmulden-Gleichung: Wald gegen Savanne, mit der PRODES-Realität 2025.",
      "meereis-albedo-sandbox": "Zwei Polkappen, zwei Vorzeichen. Die Arktis verliert Kühlleistung - die Antarktis hat 2016 das Vorzeichen gewechselt.",
      "gamma-explorer": "Zwei Slider, eine Achse: wie sich G = arctanh(η) / σ über die Pakete legt.",
      wolken: "Live-Diagnose der Grundner-Gleichung. Fünf Größen, drei Terme, R² = 0,94.",
      "kaskaden-sandbox": "Das Wunderling-Netz aus Grönland, Westantarktis, AMOC und Amazonas - vier Elemente, echte Kanten.",
      "klimasensitivitaet-sandbox": "Vier Einträge, ein offener Streit um niedrige Meereswolken und Klimasensitivität.",
      "ozeanversauerung-sandbox": "Grenze überschritten, Maßstab umstritten. Findlay 2025 / Findlay & Feely 2026.",
      "korallen-dhw-sandbox": "Fünf NOAA-Alarmstufen, vier globale Bleiche-Ereignisse. Degree Heating Weeks.",
    },
  },
  en: {
    language: "Language",
    documentTitle: "GenesisAeon Apps",
    title: "GenesisAeon Apps",
    lead: "Home of the live apps. The climate catalog stays the package catalog - here you open the surfaces and the source code.",
    appsCount: (n) => `${n} apps`,
    liveCount: (n) => `${n} live`,
    comingCount: (n) => `${n} coming soon`,
    noApps: "No apps in this category",
    noAppsHint: (n) => `Reset the filter to see all ${n}.`,
    kindFilterAria: "App category",
    kindFilters: { alle: "All", katalog: "Catalog", kipppunkt: "Tipping points", mechanik: "Mechanics", framework: "Framework" },
    kindBadge: { katalog: "Catalog", kipppunkt: "Tipping point", mechanik: "Mechanics", framework: "Framework" },
    open: "Open",
    comingSoon: "Coming soon",
    sourceCode: "Source",
    footerBlurb: "Johann Römer. MIT. This hub does not replace the climate catalog.",
    footerNavAria: "Further links",
    linkKlimakatalog: "Climate catalog",
    appTitle: {
      klimakatalog: "Climate catalog",
      "amoc-kipppunkt": "AMOC tipping point",
      "amazon-kipppunkt": "Amazon tipping point",
      "meereis-albedo-sandbox": "Sea-ice albedo sandbox",
      "gamma-explorer": "G explorer",
      wolken: "Clouds",
      "kaskaden-sandbox": "Cascade sandbox",
      "klimasensitivitaet-sandbox": "Climate sensitivity",
      "ozeanversauerung-sandbox": "Ocean acidification",
      "korallen-dhw-sandbox": "Coral DHW",
    },
    appSummary: {
      klimakatalog: "Each package is its own citable piece of climate science - no universal equation.",
      "amoc-kipppunkt": "Physics sandbox of the Atlantic Meridional Overturning Circulation. The ODE comes from the calibrated package.",
      "amazon-kipppunkt": "Cubic double-well equation: forest versus savanna, with the PRODES reality 2025.",
      "meereis-albedo-sandbox": "Two polar caps, two signs. The Arctic is losing cooling power - Antarctica flipped sign in 2016.",
      "gamma-explorer": "Two sliders, one axis: how G = arctanh(η) / σ sits across the packages.",
      wolken: "Live diagnosis of the Grundner equation. Five quantities, three terms, R² = 0.94.",
      "kaskaden-sandbox": "The Wunderling network of Greenland, West Antarctica, AMOC and Amazonia - four elements, real edges.",
      "klimasensitivitaet-sandbox": "Four entries, one open dispute about low marine clouds and climate sensitivity.",
      "ozeanversauerung-sandbox": "Boundary crossed, metric disputed. Findlay 2025 / Findlay & Feely 2026.",
      "korallen-dhw-sandbox": "Five NOAA alert levels, four global bleaching events. Degree Heating Weeks.",
    },
  },
};
