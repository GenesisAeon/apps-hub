import { useLocale } from "@/lib/i18n/locale";

export function SiteFooter() {
  const { t } = useLocale();
  const links = [
    { href: "https://github.com/GenesisAeon", label: "GitHub GenesisAeon" },
    { href: "https://zenodo.org/communities/genesisaeon", label: "Zenodo genesisaeon" },
    { href: "https://x.com/RoemerJohann", label: "X @RoemerJohann" },
    { href: "https://klimakatalog.vercel.app", label: t.linkKlimakatalog },
  ] as const;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">GenesisAeon</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{t.footerBlurb}</p>
        </div>
        <nav aria-label={t.footerNavAria} className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
