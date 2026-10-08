# Pitch Deck GrowMate (Nuxt)

Fully fluid web pitch deck. No fixed 16:9 or 9:16 frames, no letterboxing.
Every slide is a responsive page that fills any viewport (projector, laptop,
tablet, phone portrait) and scrolls internally when content exceeds the screen.
Clean white design, max content width 1600 px.
All diagrams are rebuilt in the web stack (Vue + SVG/divs). Nothing is copy-pasted from schematics or papers.

## Run (Bun)

```sh
bun install
bun run dev      # http://localhost:3000 with hash routing #/0 to #/17
bun run build    # production build
bun run preview
bun run generate # static output for cheap hosting
```

Controls: swipe left/right on touch screens, arrow keys or space, `O` for overview, `F` for fullscreen, `Esc` to close. Scrolling never changes slides. No on-screen controls by design. All comparisons render side by side with no tabs to click: the firmware loop auto-plays with a play/pause transport, and the story carousel auto-advances with prev/next arrows.

## Deploy / present (recommended)

Vite dev mode can be flaky under Bun (optimizer cache poisoning after hard
kills → empty 200s). For review and presenting, always ship the static build:

```sh
bun run generate   # prerender to .output/public
cd .output/public && python3 -m http.server 4321 --bind 0.0.0.0
```

Then open `http://<host>:4321/#/0` … `#/17`. Hash routing needs no server
fallback. Stock photos use plain `<img>` (Unsplash CDN URLs are already
optimized) because `@nuxt/image`'s `/_ipx` optimizer has no runtime on static
hosting. Proof documents in `public/bukti/` also use plain `<img>` for the
same reason. The deck re-reads the hash shortly after boot as a safety net, since
fast boots can mount before the browser exposes `location.hash`.

## Stack (latest, a library for everything)

| Job | Library |
|---|---|
| Framework / routing | `nuxt`, `vue` |
| Styling | `tailwindcss` + `@tailwindcss/vite` |
| State | `pinia` + `@pinia/nuxt` |
| Utilities (resize, keys, swipe, fullscreen, intervals) | `@vueuse/core` + `@vueuse/nuxt` |
| Entrance / micro animation | `motion-v` (`Motion`) |
| Packet + timeline motion | `gsap` |
| Charts | `echarts` + `vue-echarts` |
| Icons | `@nuxt/icon` (Iconify/lucide) |
| Images | `@nuxt/image` (Unsplash remote) |
| Fonts | `@nuxt/fonts` + Google Fonts link |
| Story carousel | `embla-carousel-vue` |
| Overview smooth scroll | `lenis` |
| 3D case slot | `three` + `@tresjs/core` |
| QR codes | `qrcode` |

## Architecture (reusable components, no hardcoded sequence)

- `app/data/deck.ts` is the single source of truth: section order, kickers
  (without numbers), titles, subs. Slide numbers are derived from array
  position at render time. No filename, kicker, or component contains a number.
- `app/components/sections/*.vue`: 20 semantic sections (`CoverHero`,
  `ProblemSolution`, `UniqueSelling`, `ProductionLine`, `ProductEvolution`,
  `MarketScope`, `StpBrief`, `CompetitorDuel`, `GoToMarket`, `SocialImpact`,
  `ImpactQuad`, `BusinessTraction`, `FieldProof`, `BusinessCanvas`,
  `SwotMatrix`, `SipocMap`, `OfficialEvidence`, `DocGallery`, `FieldVoices`,
  `RoadmapAsk`). `app/pages/index.vue` maps section id to component.
  `VoiceCarousel` (8 testimoni foto, autoplay + counter + panah) dipakai `FieldVoices`.
  Helper visual per slide (SVG + koreografi GSAP/motion-v; aturan klik: hanya panah slide + thumbnail bukti):
  cover `decor/CoverGridSvg`; latar `LatarRiver` + `LatarValveCard`; usp `UspDuelStrip` +
  `UspStation` (slot foto); proses `ProsesConveyor` + `ProsesStamp`; kembang `KembangRiver`;
  pasar (teras + peta GADM inline); stp (slot foto); kompetitor `DuelArena` +
  `DuelBar` (lawan: Tuya, Click & Grow, sesuai PDF); pemasaran `GtmOrbit` + bingkai platform;
  sosial `SosialVine` + `SosialTimer`; quad `QuadTree`; keuangan `DanaTag`;
  efektivitas `BuktiDuel`; kanvas `KanvasPlot` (grid BMC standar); swot (inline);
  sipoc `SipocStation` + `SipocPipe`; legalitas `LegalStamp` + `LegalGauge` (siklus otomatis);
  dokumentasi `DokPost` + `DokRoute`; testimoni `SuaraTribune` (siklus otomatis, nol klik);
  scaleup (langit SVG + matriks 4x3).
- `app/components/deck/`: layout primitives. `DeckStage` (viewport shell +
  centered scroll area), `DeckShell` (auto-numbered header, left-aligned title
  block, centered content slot; no footer), `DeckBare` (chromeless view without
  header, title, or footer, for pages with their own composition such as cover
  and closing), `DeckOverview` (slide grid), `SplitPanel`
  (symmetric 2-col, stacks on small screens, left-aligned text),
  `DeckAutoGrid` (even 2/3/4-col).
  Register with path prefix: `<DeckAutoGrid>`, `<DeckSplitPanel>`.
- `app/components/ui/`: `UiStatCard` (tones light/brand/ink), `UiInfoCard`
  (+ `compact` density), `UiPillTag`, `UiPhotoFigure` (fixed-ratio clean photo,
  no overlays, no captions), `UiQrFigure` (QR with quiet zone + padding), `UiCalloutBanner`.
- `app/composables/useDeckNav.ts`: keyboard, swipe, desktop click
  (right = next, left = back), hash sync. `app/composables/useCardQr.ts`:
  QR data URLs + vCard download + share for the name card.
- `app/data/card.ts` + `app/components/card/`: name-card content and sections
  (`CardHero`, `CardStats`, `CardGallery`, `CardTeam`), composed by `app/pages/card.vue`.
- Fluid type lives in `app/assets/main.css` as Tailwind v4 utilities
  (`text-display`, `text-lead`, `text-body-fluid`). No custom layout CSS,
  no vh sizing, no scaling tricks. Content centers both axes via grid
  place-items; dense slides scroll naturally on small screens.

## PHOTO requests (replace the STOCK slots)

Drop RAW files into `assets-raw/` (exact basenames, any of .jpg/.jpeg/.png/.webp),
then run `./scripts/assets.sh`. It center-crops + encodes to `public/photos/*.webp`:

| # | Drop as | Becomes | Spec | Used in |
|---|---------|---------|------|---------|
| 1 | `raw-hero` | `photos/hero.webp` | 1200×1020, q82 | `CoverHero` hero: monstera subur / interior greenhouse, cahaya siang terang |
| 2 | `raw-problem` | `photos/problem.webp` | 1600×1000, q80 | `ProblemStory`: hujan di atas petak sayur Yogyakarta, langit mendung |
| 3 | `raw-tech` | `photos/tech.webp` | 1600×900, q80 | `TechSquad`: boks panel Tech + tiang surya 10 Wp + teknisi |
| 4 | `raw-versus` | `photos/versus.webp` | 1600×1000, q80 | `HeadToHead` before/after (single photo + CSS filter) |
| 4b | `raw-versus-segar` + `raw-versus-stres` (optional, overrides 4) | `photos/versus-segar.webp` + `photos/versus-stres.webp` | 2× 1600×1000, q80, MATCHED pair: same plant, same angle | `HeadToHead` via `stock2` prop on `BeforeAfter` |
| 5 | `raw-roadmap` | `photos/roadmap.webp` | 1600×800, q80 | `RoadmapAsk`: kerumunan stan demo / tangan + bibit |
| 6 | `raw-logo` (optional, square ≥512px) | `photos/logo.webp` | 512×512, q90 | favicon/OG (wired when provided) |
| 7 | `case.glb` → `public/models/` directly | — | binary glTF, Y-up, meter, ideally < 5 MB | `CaseViewer` auto-loads it (done: bukti forms already converted to `public/bukti/*.webp`, ~80% smaller)

After converting, swap the section's `src` URL to `/photos/<name>.webp`
(or any URL) and drop the `draft` prop on `UiPhotoFigure`.

16 foto dokumentasi sudah diekstrak dari deck lama (Canva, render 150dpi,
crop ketat, WebP q80/82) dan langsung dipakai:

ATURAN FOTO: satu file foto HANYA BOLEH dipakai di SATU slide. Kunci saat ini:

| File | Sumber | Dipakai di (terkunci) |
|------|--------|------------------------|
| `hero.webp` | lama | `CoverHero` |
| `tech.webp` | lama | `ProductEvolution` tahap 3 |
| `tech-field.webp` | lama | `CompetitorDuel` |
| `farmer.webp` | lama | `SocialImpact` |
| `roadmap.webp` | lama | `ImpactQuad` |
| `gt-expo/mulyo/mitra-matra/mitra-toolsku/prod-solder.webp` | pameran/Mulyo/Matra/Toolsku/alur-produksi | `DocGallery` Acara + Kemitraan + Produksi |
| `pra-brain/wawancara/coding/blender.webp` | Foto Awal Pembuatan (asli) | `DocGallery` Pra-Produksi |
| `prod-rakit/kemas.webp` | Foto Alur Produksi 3/5 (asli) | `DocGallery` Produksi |
| `acara-bazar/jelas/serah.webp` | Foto Bazar + Sosialisasi HEIF (asli) | `DocGallery` Acara |
| `mitra-qinjeng.webp` | Qinjeng Kardus (asli, crop 4/3) | `DocGallery` Kemitraan |
| `uji-presentasi/sistem/komposit/serah.webp` | Foto Uji dan Review + DKPP (asli) | `DocGallery` Uji dan Serah |
| `kembang-proto-1/2.webp` | KTI Images solder asli + smart pot | `ProductEvolution` tahap 1-2 |
| `kembang-addon.webp` | PU Images boks surya | `ProductEvolution` tahap 3 Tech Add-on |
| `dok-printer.webp` | KTI Images printer 3D | `DocGallery` pos 6 |
| `usp-pods-glow/sensor-sawah.webp` + `usp-tech-box.webp` | Profil usaha + PU Images boks kayu | `UniqueSelling` st 1-3 |
| `closing-petani.webp` | DSC02284 | `ClosingCall` |
| `sipoc-solder/pods/serah.webp` | rakit solder / P1680691 / DSC02286 | `SipocMap` Proses/Keluaran/Pelanggan |
| `sipoc-pemasok/mikro.webp` | PU Images toko elektronik / papan mikro | `SipocMap` Pemasok/Masukan |
| `stp-stan.webp` | PU Images demo stan | `StpBrief` |
| `proses-riset/rakit/kemas.webp` | Blender + PU rakit asli + ekspedisi asli | `ProductionLine` Pra/Produksi/Pasca |
| `keu-chart.webp` | FIKSI grafik pendapatan 2026 (asli) | `BusinessTraction` toggle Bukti |
| `sosial-grup.webp` | Foto Pameran HEIF (asli, crop 4/3) | `SocialImpact` |
| `gtm-tiktok/situs.webp` | PU Images tangkapan asli | `GoToMarket` TikTok + `SiteShowcase` situs |
| `gtm-instagram/whatsapp/shopee.webp` | tangkapan asli (crop tengah 9/16) | `GoToMarket` Instagram + WhatsApp + Shopee |
| `gtm-situs-mobile.webp` | tangkapan asli (crop atas 9/16) | `SiteShowcase` bingkai mobile |
| `dok-pengguna.webp` | PU Images pengguna (asli) | `SocialImpact` |
| `dok-demo.webp` | PU Images demo (asli) | `StpBrief` |
| `testi-*.webp` (8) | foto grup asli utuh 16/9 | `FieldVoices` |
| `bukti/*.webp` (8) | uji DKPP + NIB + Cipta + Desain | `OfficialEvidence` |

Slide lain memakai `UiPhotoSlot` (bingkai penanda: `ratio` + `label` + `spec` foto yang
dibutuhkan). Saat foto asli tiba, ganti slot dengan `UiPhotoFigure` dan catat di tabel ini.

## 3D case file

`app/components/CaseViewer.vue` auto-loads **`public/models/case.glb`** if present (else a stylized
stand-in rotates). Export from your CAD as `.glb` (binary glTF, ~Y-up, units in meters, ideally
< 5 MB, Draco-compressed is fine) and drop it at `public/models/case.glb`. No code change is needed.

## Known placeholders to finalize

- QR URLs in `ClosingCall` (`growmate.bond`, `/dashboard`, Instagram). Confirm the real links.
- Traction chart uses real monthly revenue from Grafik-Grafik/Ekonomi (total Rp59,07 jt). Unit sales still cite the paper (36 units).
