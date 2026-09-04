# apps-hub

Startseite der GenesisAeon Live-Apps. **Nicht** der Klimakatalog.

Jede Karte hat zwei Links: **Öffnen** (Live-URL) und **Quellcode** (GitHub).
Live-URLs stehen nur, wenn die Deploy-Domain bestätigt ist — niemals aus dem
Repo-Namen abgeleitet (`wolken.vercel.app` ist ein 404; die Live-App liegt auf
`wolken-seven.vercel.app`).

## Apps

| App | Live | Quellcode |
| --- | --- | --- |
| Klimakatalog | [klimakatalog.vercel.app](https://klimakatalog.vercel.app) | [GenesisAeon/klimakatalog](https://github.com/GenesisAeon/klimakatalog) |
| AMOC-Kipppunkt | [amoc-kipppunkt.vercel.app](https://amoc-kipppunkt.vercel.app) | [GenesisAeon/amoc-kipppunkt](https://github.com/GenesisAeon/amoc-kipppunkt) |
| Amazonas-Kipppunkt | [amazon-kipppunkt.vercel.app](https://amazon-kipppunkt.vercel.app) | [GenesisAeon/amazon-kipppunkt](https://github.com/GenesisAeon/amazon-kipppunkt) |
| Meereis-Albedo-Sandbox | [meereis-albedo-sandbox.vercel.app](https://meereis-albedo-sandbox.vercel.app) | [GenesisAeon/meereis-albedo-sandbox](https://github.com/GenesisAeon/meereis-albedo-sandbox) |
| Γ-Explorer | [gamma-explorer.vercel.app](https://gamma-explorer.vercel.app) | [GenesisAeon/gamma-explorer](https://github.com/GenesisAeon/gamma-explorer) |
| Wolken | [wolken-seven.vercel.app](https://wolken-seven.vercel.app) | [GenesisAeon/wolken](https://github.com/GenesisAeon/wolken) |
| Kaskaden-Sandbox | [kaskaden-sandbox.vercel.app](https://kaskaden-sandbox.vercel.app) | [GenesisAeon/kaskaden-sandbox](https://github.com/GenesisAeon/kaskaden-sandbox) |
| Korallen-DHW-Sandbox | [korallen-dhw-sandbox.vercel.app](https://korallen-dhw-sandbox.vercel.app) | [GenesisAeon/korallen-dhw-sandbox](https://github.com/GenesisAeon/korallen-dhw-sandbox) |

`korallen-dhw-sandbox.vercel.app` war am 04.09.2026 zuerst 404 und später am selben Tag live.

Die Liste lebt in [`src/lib/apps.ts`](src/lib/apps.ts).

## Owner

GenesisAeon / Johann Römer. Lizenz: MIT.
