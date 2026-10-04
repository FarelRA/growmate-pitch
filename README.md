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

| File | Sumber (deck lama) | Dipakai di |
|------|--------------------|------------|
| `prod-solder.webp` | hal 6, proses menyolder | `ProductionLine` |
| `prod-printer.webp` | hal 9, cetak bodi 3D | `ProductionLine` |
| `prod-bench.webp` | hal 11, breadboard tahap 1 | `ProductionLine` |
| `prod-alpha.webp` | hal 11, alpha 6 titik tahap 2 | `ProductionLine` |
| `testi-wabup/dkpp/dkumpp/bunda/kemenperin/dosen/kepsek/pegiat.webp` | hal 42-45, foto pejabat (crop wajah) | `VoiceCarousel` |
| `gt-mulyo.webp` | hal 24, konsinyasi Mulyo Tani | `GoToMarket` |
| `gt-expo.webp` | hal 25, stan Bantul Creative Expo | `GoToMarket` |
| `mitra-matra.webp`, `mitra-toolsku.webp` | hal 38, kemitraan 3D print | `PartnerGrid` |

## 3D case file

`app/components/CaseViewer.vue` auto-loads **`public/models/case.glb`** if present (else a stylized
stand-in rotates). Export from your CAD as `.glb` (binary glTF, ~Y-up, units in meters, ideally
< 5 MB, Draco-compressed is fine) and drop it at `public/models/case.glb`. No code change is needed.

## Known placeholders to finalize

- QR URLs in `ClosingCall` (`growmate.bond`, `/dashboard`, Instagram). Confirm the real links.
- Traction chart uses real monthly revenue from Grafik-Grafik/Ekonomi (total Rp59,07 jt). Unit sales still cite the paper (36 units).
