# GenesisAeon AI-Context Layer — Schema v1.0.0

A machine-readable, non-semantic add-on for the GenesisAeon interactive
sandbox series. It carries no intelligence of its own — no embeddings, no
inference, no summarization. It only exposes, in structured form, facts
that already exist verified in each app's source code, so that any
consuming AI system can read them directly instead of extracting them from
prose or UI.

Two files per app, served as static assets at the app's own domain root:

- `/llms.txt` — human/AI-readable plain-text overview, following the
  established [llms.txt](https://llmstxt.org) convention.
- `/context.json` — the structured data behind it.

The apps-hub repo additionally serves `/context.json` as an **ecosystem
aggregate**: one entry point listing every app's own context file plus the
handful of real, source-verified relationships between apps (e.g. which
sandboxes model the same tipping elements).

## Non-goals

- No natural-language generation, no chat, no RAG index, no embeddings.
- No new facts. Every field must trace to a source file already reviewed
  in this ecosystem's normal verification process (constants.ts, README,
  WHITEPAPER, CITATION.cff).
- No framework-overlay claims (no UTAC/CREP/AFET terms) unless the
  underlying science package itself uses them.

## `context.json` — per-app shape

```jsonc
{
  "schema_version": "1.0.0",
  "generated": "YYYY-MM-DD",
  "app": {
    "id": "wolken",
    "title": "Wolken",
    "kind": "mechanik",           // katalog | kipppunkt | mechanik | framework
    "live_url": "https://wolken-seven.vercel.app",
    "repo_url": "https://github.com/GenesisAeon/wolken",
    "llms_txt_url": "https://wolken-seven.vercel.app/llms.txt"
  },
  "source_package": {
    "name": "cloud-cover formalization (Wolken-Modul)",
    "package_id": null,           // GenesisAeon P-number, or null if not a P-numbered package
    "repo_url": "...",            // may be null for theory-only work
    "ported_note": "1:1 port of Grundner et al. 2024 coefficients; see TheorieArbeit/Wolken-Modul.md"
  },
  "primary_sources": [
    { "authors": "...", "year": 2024, "title": "...", "journal": "...", "doi": "..." }
  ],
  "verified_quantities": [
    { "name": "a1", "value": 0.4435, "unit": null, "source": "Grundner et al. 2024, Table 2" }
  ],
  "framework_overlay": { "used": false, "terms": [] },
  "honesty_checks": [
    { "name": "isAFifthGlobalBleachingEventConfirmed", "always_returns": false,
      "meaning": "Guards against presenting live WMO context as evidence of a new event." }
  ],
  "cross_app_relations": [
    { "app_id": "amoc-kipppunkt", "relation": "shares_modeled_element",
      "detail": "AMOC is one of the 4 Wunderling tipping elements in this network." }
  ],
  "disclaimer": "one-line disclaimer text, verbatim from DISCLAIMER.md or the in-app disclaimer box"
}
```

Fields are omitted (not left empty) when they don't apply — e.g. a package
with no honesty-check functions has no `honesty_checks` key at all.

## `context.json` — apps-hub aggregate shape

```jsonc
{
  "schema_version": "1.0.0",
  "generated": "YYYY-MM-DD",
  "hub": { "title": "Apps-Hub", "repo_url": "https://github.com/GenesisAeon/apps-hub" },
  "apps": [
    { "id": "wolken", "title": "Wolken", "kind": "mechanik",
      "live_url": "...", "repo_url": "...",
      "context_json_url": "https://wolken-seven.vercel.app/context.json",
      "llms_txt_url": "https://wolken-seven.vercel.app/llms.txt" }
  ],
  "cross_app_relations": [ /* same shape as per-app, deduplicated ecosystem-wide */ ]
}
```

## Versioning

`schema_version` is independent of each repo's own release version. A
breaking change to field names or structure bumps the minor version
(1.0.0 → 1.1.0); this document is the source of truth and lives only here
in apps-hub — every other repo's `context.json` references this file's
URL, it does not duplicate it.
