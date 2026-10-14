# Pitch Deck GrowMate (Nuxt)

Fully fluid web pitch deck. No fixed 16:9 or 9:16 frames, no letterboxing.
Every slide is a responsive page that fills any viewport (projector, laptop,
tablet, phone portrait) and scrolls internally when content exceeds the screen.
Clean white design, max content width 1600 px.
All diagrams are rebuilt in the web stack (Vue + SVG/divs). Nothing is copy-pasted from schematics or papers.

## Run (Bun)

```sh
bun install
bun run dev      # http://localhost:3000 with hash routing #/0 to #/26
bun run build    # production build
bun run preview
bun run generate # static output for cheap hosting
```

Controls: swipe left/right on touch screens, arrow keys or space, `O` for overview, `F` for fullscreen, `Esc` to close. Scrolling never changes slides. No on-screen controls by design. All comparisons render side by side with no tabs to click: the firmware loop auto-plays with a play/pause transport, and the story carousel auto-advances with prev/next arrows. The documentation gallery auto-advances its category tabs (Pra-Produksi, Produksi, Acara, Kemitraan, Uji dan Serah). The three bedah slides and the aplikasi slide draw measured leader lines from every numbered dot to its callout card (hover either end to highlight, dim the rest); no click needed.

Hidden archive layer: 41 detail pages (3 product deep-dives, 1 calibration lab page, 6 per-screen app explainers, 1 website walkthrough, 4 finance pages, 4 order pages, 1 konsinyasi page, 3 resilience pages, 2 Floral Assistant pages, 1 risk-matrix page, 1 risk-mitigation analysis page, and 14 platform graphs drawn live by the custom SVG diagram engine; no Mermaid anywhere). Desktop: `H` alone toggles between the deck and the layer, returning to the exact deck slide that was showing. Touch/mobile: a 600 ms press-and-hold anywhere on the slide toggles the same way (ignored over buttons, links, and the graph canvas; cancelled if the finger moves more than 10 px, so swipes keep navigating). The layer never opens from a hash, a click, or any deck control, and it deliberately shows no hints or self-description: no footer bar, no keyboard legend, no hidden-page wording, a plain deck-style header and a plain `NN / NN` counter derived from `HIDDEN_SECTIONS.length`. Inside the layer: arrows / space / `Home` / `End` move between pages, `O` opens its 41-card index (click a card to jump), `Esc` returns to the deck, swipe and desktop right/left click work as in the deck. Page swaps are a pure fade with no translation, so no state ever produces horizontal scroll. Graph pages add their own zoom viewer (wheel zoom, drag to pan, fit / 1:1 buttons) because the diagrams are rendered live.

## Deploy / present (recommended)

Vite dev mode can be flaky under Bun (optimizer cache poisoning after hard
kills → empty 200s). For review and presenting, always ship the static build:

```sh
bun run generate   # prerender to .output/public
cd .output/public && python3 -m http.server 4321 --bind 0.0.0.0
```

Then open `http://<host>:4321/#/0` … `#/26`. Hash routing needs no server
fallback. Stock photos use plain `<img>` (Unsplash CDN URLs are already
optimized) because `@nuxt/image`'s `/_ipx` optimizer has no runtime on static
hosting. Proof documents in `public/images/bukti/` also use plain `<img>` for the
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
| Hidden-layer graphs (hand-placed SVG from structured data) | custom diagram engine in `GraphFigure` (no Mermaid, no image) |

## Architecture (reusable components, no hardcoded sequence)

- `app/data/deck.ts` is the single source of truth: section order, kickers
  (without numbers), titles, subs. Slide numbers are derived from array
  position at render time. No filename, kicker, or component contains a number.
- `app/components/sections/*.vue`: 32 semantic sections (`CoverHero`,
  `ProblemStory`, `ProblemSolution`, `UniqueSelling`, `PodsBedah`,
  `TechBedah`, `AddonBedah`, `AplikasiFitur`, `ProductionLine`,
  `ProductEvolution`, `MarketScope`, `StpBrief`, `CompetitorDuel`,
  `GoToMarket`, `SiteShowcase`, `SocialImpact`, `ImpactQuad`,
  `BusinessTraction`, `UnitEconomics`, `FieldProof`, `BusinessCanvas`,
  `SwotMatrix`, `SipocMap`, `OfficialEvidence`, `DocGallery`,
  `FieldVoices`, `RoadmapAsk`, `ClosingCall`, `LoopGallery`, plus `PodsShowcase`,
  `TechSquad`, `MarketAlternatives`). `app/pages/index.vue` maps section
  id to component. The bedah trio shares `BedahLayout` (centered render,
  numbered dots, measured leader lines to the callout rails).
  `VoiceCarousel` (8 testimoni foto, autoplay + counter + panah) dipakai `FieldVoices`.
  Helper visual per slide (SVG + koreografi GSAP/motion-v; aturan klik: hanya panah slide + thumbnail bukti + lingkaran testimoni):
  cover `decor/CoverGridSvg`; latar `LatarRiver` + `LatarValveCard`; usp `UspDuelStrip` +
  `UspStation` (slot foto); proses `ProsesConveyor` + `ProsesStamp`; kembang `KembangRiver`;
  pasar (teras + peta GADM inline); stp (slot foto); kompetitor `DuelArena` +
  `DuelBar` (lawan: Tuya, Click & Grow, sesuai PDF); pemasaran `GtmOrbit` + bingkai platform;
  sosial `SosialVine` + `SosialTimer`; quad `QuadTree`; keuangan `DanaTag`;
  efektivitas `BuktiDuel`; kanvas `KanvasPlot` (grid BMC standar); swot (inline);
  sipoc `SipocStation` + `SipocPipe`; legalitas `LegalStamp` + `LegalGauge` (siklus otomatis);
  dokumentasi `DokPost` + `DokRoute`; testimoni `SuaraTribune` (lingkaran bisa diklik);
  scaleup (langit SVG + matriks 4x3); galeri (konveyor foto 2 lajur berlawanan arah, tanpa klik).
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
  (right = next, left = back), hash sync. All navigation keys stand down
  while the hidden layer is open; `H` is the layer's only entrance.
  `app/composables/useCardQr.ts`: QR data URLs + vCard download + share for the name card.
- Lapisan arsip tersembunyi (hanya `H`, 41 halaman, dimuat malas di luar bundel
  utama): `app/data/hidden.ts` (daftar halaman + salinan detail produk/aplikasi/situs
  serta enum `HiddenKind`), `app/data/graphs/` (14 definisi grafik dengan posisi
  simpul susun tangan dan resmi), `app/data/econ-unit.ts`, `econ-invest.ts`,
  `econ-month.ts`, `econ-sales.ts`, `order.ts`, `kalibrasi.ts`, `resilience.ts`, `ai-econ.ts`, `risk-matrix.ts`
  (payload halaman detail baru), serta `app/components/hidden/`: `HiddenLayer` (cangkang: judul,
  navigasi geser/klik, registry per `kind` plus override per `id`),
  `ProductDetail` (spesifikasi, indra, perintah, bagian, langkah tiap produk),
  `AppDetail` (bingkai ponsel + penjelasan layar per elemen), `WebsiteDetail`
  (desktop dan mobile), `UnitEconDetail`, `InvestDetail`, `KalibrasiDetail`, `MonthDetail` (mengalihkan
  ke `SalesDetail` lewat `ref`), `SupplyDetail` (mengalihkan ke `DurabilityDetail`
  dan `CoatingDetail`), `AiEconDetail` (mengalihkan ke `AiLimitDetail`),
  `RiskMatrixDetail` (matriks risiko 5 x 5 dan daftar sembilan risiko),
  `GraphPage` (legenda palet + jargon jenis grafik + ringkasan poin),
  `GraphFigure` (mesin diagram SVG buatan sendiri dengan zoom roda, seret untuk
  menggeser, tombol pas / 1:1). Toko deck menyimpan `hidden`, `hIndex`, `hOverview`,
  `hTotal` (dihitung dari `HIDDEN_SECTIONS.length`).
- `app/data/card.ts` + `app/components/card/`: name-card content and sections
  (`CardHero`, `CardStats`, `CardGallery`, `CardTeam`), composed by `app/pages/card.vue`.
- Fluid type lives in `app/assets/main.css` as Tailwind v4 utilities
  (`text-display`, `text-lead`, `text-body-fluid`). No custom layout CSS,
  no vh sizing, no scaling tricks. Content centers both axes via grid
  place-items; dense slides scroll naturally on small screens.

## PHOTO requests (replace the STOCK slots)

Drop RAW files into `assets-raw/` (exact basenames, any of .jpg/.jpeg/.png/.webp),
then run `./scripts/assets.sh`. It center-crops + encodes to `public/images/misc/*.webp`:

| # | Drop as | Becomes | Spec | Used in |
|---|---------|---------|------|---------|
| 1 | `raw-hero` | `images/misc/hero.webp` | 1200×1020, q82 | `CoverHero` hero: monstera subur / interior greenhouse, cahaya siang terang |
| 2 | `raw-problem` | `images/misc/problem.webp` | 1600×1000, q80 | `ProblemStory`: hujan di atas petak sayur Yogyakarta, langit mendung |
| 3 | `raw-versus` | `images/misc/versus.webp` | 1600×1000, q80 | `HeadToHead` before/after (single photo + CSS filter) |
| 3b | `raw-versus-segar` + `raw-versus-stres` (optional, overrides 3) | `images/misc/versus-segar.webp` + `images/misc/versus-stres.webp` | 2× 1600×1000, q80, MATCHED pair: same plant, same angle | `HeadToHead` via `stock2` prop on `BeforeAfter` |
| 4 | `raw-roadmap` | `images/misc/roadmap.webp` | 1600×800, q80 | `RoadmapAsk`: kerumunan stan demo / tangan + bibit |
| 5 | `raw-logo` (optional, square ≥512px) | `images/misc/logo.webp` | 512×512, q90 | favicon/OG (wired when provided) |
| 6 | `case.glb` → `public/models/` directly | (none) | binary glTF, Y-up, meter, ideally < 5 MB | `CaseViewer` auto-loads it (done: bukti forms already converted to `public/images/bukti/*.webp`, ~80% smaller)

After converting, swap the section's `src` URL to `/images/misc/<name>.webp`
(or any URL) and drop the `draft` prop on `UiPhotoFigure`.

16 foto dokumentasi sudah diekstrak dari deck lama (Canva, render 150dpi,
crop ketat, WebP q80/82) dan langsung dipakai:

ATURAN FOTO: satu file foto HANYA BOLEH dipakai di SATU slide. Pengecualian yang disetujui: titik sorot angka dan panah penunjuk di atas render produk pada slide Bedah dan Aplikasi; pemakaian ulang render produk `bedah-*.webp`, foto kemasan `bedah-kemas-*.webp`, serta tangkapan layar `app-*.webp` pada halaman detail lapisan arsip (tombol H), sesuai permintaan untuk mendetailkan tiap produk dan tiap layar; dan seluruh foto pada konveyor `LoopGallery` (`#/26`), yang hanya merangkum ulang foto yang sudah terkunci di slide lain. Kunci saat ini:

| File | Sumber | Dipakai di (terkunci) |
|------|--------|------------------------|
| `images/misc/hero.webp` | lama | `CoverHero` |
| `images/products/tech-field.webp` | lama | `CompetitorDuel` |
| `images/impact/farmer.webp` | lama | `SocialImpact` |
| `images/misc/roadmap.webp` | lama | `CardGallery` galeri kartu nama (Pilot sawah) |
| `images/events/{gt-expo,gt-mulyo,mitra-matra,mitra-toolsku}.webp` + `images/process/prod-solder.webp` | pameran/Mulyo/Matra/Toolsku/alur-produksi | `DocGallery` Acara + Kemitraan + Produksi |
| `images/market/utama-elektronik.webp` | MOU Utama Elektronik (pindaian, crop blok tanda tangan 4/3) | `GoToMarket` Ritel mitra (Utama Elektronik) |
| `images/process/{pra-brain,pra-wawancara,pra-coding,pra-blender}.webp` | Foto Awal Pembuatan (asli) | `DocGallery` Pra-Produksi |
| `images/process/prod-rakit.webp` + `images/packaging/prod-kemas.webp` | Foto Alur Produksi 3/5 (asli) | `DocGallery` Produksi |
| `images/events/{acara-bazar,acara-jelas,acara-serah}.webp` | Foto Bazar + Sosialisasi HEIF (asli) | `DocGallery` Acara |
| `images/events/mitra-qinjeng.webp` | Qinjeng Kardus (asli, crop 4/3) | `DocGallery` Kemitraan |
| `images/events/{uji-presentasi,uji-sistem,uji-komposit,uji-serah}.webp` | Foto Uji dan Review + DKPP (asli) | `DocGallery` Uji dan Serah |
| `images/products/{kembang-proto-1,kembang-proto-2}.webp` | KTI Images Arduino + smart pot | `ProductEvolution` tahap 1-2 |
| `images/products/kembang-addon.webp` | PU Images boks surya | `ProductEvolution` tahap 3 Tech Add-on |
| `images/process/dok-printer.webp` | KTI Images printer 3D | `DocGallery` pos 6 |
| `images/products/{usp-pods-glow,usp-sensor-sawah,usp-tech-box}.webp` | Profil usaha + PU Images boks kayu | LEPAS dari `UniqueSelling` (redesain: tanpa foto produk, motif SVG/CSS); berkas masih ada di `public/images/products/` tanpa referensi |
| `images/impact/closing-petani.webp` | DSC02284 | `ClosingCall` |
| `images/process/{sipoc-solder,sipoc-pods,sipoc-serah}.webp` | rakit solder / P1680691 / DSC02286 | `SipocMap` Proses/Keluaran/Pelanggan |
| `images/process/{sipoc-pemasok,sipoc-mikro}.webp` | PU Images toko elektronik / papan mikro | `SipocMap` Pemasok/Masukan |
| `images/events/stp-stan.webp` | PU Images demo stan | `StpBrief` |
| `images/process/{proses-riset,proses-rakit}.webp` + `images/packaging/proses-kemas.webp` | Blender + KTI solder asli + ekspedisi asli | `ProductionLine` Pra/Produksi/Pasca |
| `images/market/keu-chart.webp` | FIKSI grafik pendapatan 2026 (asli) | `BusinessTraction` toggle Bukti |
| `images/impact/sosial-grup.webp` | Foto Pameran HEIF (asli, crop 4/3) | `SocialImpact` |
| `images/market/gtm-tiktok.webp` + `images/ui/gtm-situs.webp` | PU Images tangkapan asli | `GoToMarket` TikTok + `SiteShowcase` situs |
| `images/market/{gtm-instagram,gtm-whatsapp,gtm-shopee}.webp` | tangkapan asli (crop tengah 9/16) | `GoToMarket` Instagram + WhatsApp + Shopee |
| `images/ui/gtm-situs-mobile.webp` | tangkapan asli (crop atas 9/16) | `SiteShowcase` bingkai mobile |
| `images/impact/dok-pengguna.webp` | PU Images pengguna (asli) | `SocialImpact` |
| `images/events/dok-demo.webp` | PU Images demo (asli) | `StpBrief` |
| `images/impact/testi-*.webp` (8) | foto grup asli utuh 16/9 | `FieldVoices` |
| `images/bukti/*.webp` (11) | NIB + Cipta + Desain + uji DKPP (urut kepentingan); 3 berkas baru `nib-surat`/`kti-artikel`/`desain-pods` tercatat pada baris di bawah | `OfficialEvidence` (8 berkas lama) |
| `images/bedah/{bedah-pods,bedah-tech,bedah-addon}.webp` | render produk Tahap 3 (dengan titik sorot) | `PodsBedah` + `TechBedah` + `AddonBedah` + arsip `hidden/ProductDetail` |
| `models/tech.glb` | `material/3D/Tech.obj` (impor dan ekspor glTF bawaan Blender CLI: 12 bagian bernama per grup `g`, Y-tegak, 65 KB) | `TechBedah` + arsip produk Tech |
| `models/tech-addon.glb` | `material/3D/Tech Add-on.obj` (impor dan ekspor glTF bawaan Blender CLI: 12 bagian bernama per grup `g`, Y-tegak, 172 KB) | `AddonBedah` + arsip produk Add-on |
| `models/pods.glb` | `material/3D/Pods.step` (FreeCAD CLI: impor STEP dan tessellasi OCCT defleksi 0,2 mm + 0,26 rad per padat unik, lalu ekspor glTF bawaan Blender CLI: 11 bagian bernama, Y-tegak, 1,5 MB) | `PodsBedah` + arsip produk Pods |
| `images/packaging/bedah-kemas-pods.webp` | `material/Packaging/Pods.png` (webp q70, 1048x1400) | `PodsBedah` + arsip produk Pods |
| `images/packaging/bedah-kemas-tech.webp` | `material/Packaging/Tech & Tech Add-on.png` (webp q70, 1048x1400) | `TechBedah` + arsip produk Tech |
| `images/packaging/bedah-kemas-addon.webp` | berkas sumber sama dengan Tech, caption Add-on (pemakaian ulang disetujui, kardus lini Tech dipakai bersama) | `AddonBedah` + arsip produk Add-on |
| `images/ui/app-*.webp` (6) | Buku Manual tangkapan asli | `AplikasiFitur` + arsip `hidden/AppDetail` |
| `images/research/paper-ac-excitation.webp` | tangkapan layar makalah Flammini & Depari 2018 | arsip `hidden/DurabilityDetail` (halaman `h-durability`) |
| `images/research/biovarnish-clear-coat.webp` | halaman produk biopaint.id | arsip `hidden/CoatingDetail` (halaman `h-coating`) |
| `images/impact/quad-planet.webp` | `material/GM Images/KTI Images/smart_planter_led_flower_solar_wooden_box.jpg` | `ImpactQuad` kartu Planet (boks kayu + surya + pot rPLA) |
| `images/impact/quad-profit.webp` | `material/GM Images/KTI Images/wooden_growmate_tech_box_packaging.jpg` | `ImpactQuad` kartu Profit (unit Tech kayu + kemasan ritel) |
| `images/impact/quad-people.webp` | `material/GM Images/KTI Images/three_students_meeting_outdoor_garden_table.jpg` | `ImpactQuad` kartu People (diskusi tim di kebun) |
| `images/impact/quad-purpose.webp` | `material/GM Images/KTI Images/growmate_pods_pink_grow_light_planter.jpg` | `ImpactQuad` kartu Purpose (Pods + kemasan berlabel misi) |
| `images/market/bmc-premade.webp` | `material/BMC PREMADE.png` (disalin apa adanya, tanpa resize) | `BusinessCanvas` bingkai tunggal pengganti grid `KanvasPlot` |
| `images/field/lahan-pasang.webp` | `material/Profil usaha/Foto/vlcsnap-2026-09-29-11h51m53s084.png` (4K, crop 4/3, 1400x1050 q62) | `DocGallery` Uji Lapangan pos 1 + `LoopGallery` lajur bawah |
| `images/field/lahan-unit.webp` | `material/Profil usaha/Foto/DSC02268.jpg` (crop 4/3, 1400x1050 q82) | `DocGallery` Uji Lapangan pos 2 + `LoopGallery` lajur bawah |
| `images/field/lahan-probe.webp` | `material/Profil usaha/Foto/DSC02279.jpg` (crop 4/3, 1400x1050 q82) | `DocGallery` Uji Lapangan pos 3 + `LoopGallery` lajur bawah |
| `images/field/lahan-ukur.webp` | `material/Profil usaha/Foto/vlcsnap-2026-09-29-11h50m45s881.png` (4K, crop 4/3, 1400x1050 q82) | `DocGallery` Uji Lapangan pos 4 + `LoopGallery` lajur bawah |
| `images/field/lahan-sawah.webp` | `material/Profil usaha/Foto/vlcsnap-2026-09-29-11h52m00s106.png` (4K, crop 16/10, 1400x875 q72) | `LoopGallery` lajur bawah |
| `images/field/lahan-koding.webp` | `material/Profil usaha/Foto/vlcsnap-2026-09-29-11h47m32s653.png` (4K, crop 16/10, 1400x875 q82) | `LoopGallery` lajur atas |
| `images/events/mitra-honeycomb.webp` | `material/Images/Foto Penandatanganan kerjasama/Honeycomb/IMG_7477.HEIC` (crop 4/3, 1400x1050 q80) | `DocGallery` Legalitas & Kontrak pos 1 + `LoopGallery` lajur bawah |
| `images/bukti/nib-surat.webp` | `material/Legal/Nomer Induk Berusaha/Surat Keterangan NIB.pdf` (pdftoppm 150dpi, crop utara 4/3, 1400x1050 q82) | `DocGallery` Legalitas & Kontrak pos 2 |
| `images/bukti/kti-artikel.webp` | `material/Artikel Karya Ilmiah GrowMate.pdf` (pdftoppm 150dpi, crop utara 4/3, 1400x1050 q82) | `DocGallery` Legalitas & Kontrak pos 3 |
| `images/bukti/desain-pods.webp` | `material/Legal/Report 1.pdf` (draf pendaftaran desain industri, pdftoppm 150dpi, crop utara 4/3, 1400x1050 q82) | `DocGallery` Legalitas & Kontrak pos 4 |
| `images/events/paket-diterima.webp` | `material/Images/Foto Penerimaan Produk/WhatsApp Image 2026-04-29 at 05.42.43.jpeg` (720x1280 asli, tanpa perbesar, crop 16/10 720x450 q82) | `LoopGallery` lajur bawah |
| `images/events/bazar-demo.webp` | `material/Images/Foto Bazar/Bazar 3.heif` (crop 16/10, 1400x875 q78) | `LoopGallery` lajur bawah |
| `images/events/pameran-stan.webp` | `material/Images/Foto Pameran/Penjelasan Produk 2.heif` (crop 16/10, 1400x875 q76) | `LoopGallery` lajur bawah |
| `images/events/brosur-serah.webp` | `material/Images/Foto Sosialisasi/Foto penyebaran brosur.heif` (crop 16/10, 1280x800 q50) | `LoopGallery` lajur bawah |
| `images/process/prod-flash.webp` | `material/Images/Alur Produksi/4. Flashing firmware.jpg` (crop 16/10, 1400x875 q82) | `LoopGallery` lajur atas |
| `images/process/prod-diskusi.webp` | `material/Images/Foto Awal Pembuatan/2. Diskusi.png` (crop 16/10, 1400x875 q82) | `LoopGallery` lajur atas |
| `images/products/pods-teras.webp` | `material/Profil usaha/Foto/P1680693.jpg` (crop 16/10, 1400x875 q82) | `LoopGallery` lajur atas |
| `images/products/pods-glow.webp` | `material/Profil usaha/Foto/P1680719.jpg` (crop 16/10, 1400x875 q82) | `LoopGallery` lajur atas |
| `images/products/pods-kantor.webp` | `material/GM Images/PU Images/woman_smiling_with_smart_planter_office.jpg` (1070x620 asli, tanpa perbesar, crop 16/10 992x620 q82) | `LoopGallery` lajur atas |

Slide lain memakai `UiPhotoSlot` (bingkai penanda: `ratio` + `label` + `spec` foto yang
dibutuhkan). Saat foto asli tiba, ganti slot dengan `UiPhotoFigure` dan catat di tabel ini.

## Dokumen studi di `../pitch-deck-files/docs/`

Bahan belajar untuk sesi tanya jawab juri, seluruhnya berbahasa Indonesia formal dan
diberi tag sumber. Berkas di dalam folder `../pitch-deck-files/docs/` (di luar
build aplikasi, tidak masuk docker context):

- `README.md`: indeks yang menerangkan tujuan dokumen studi dan cara membacanya.
- `Analisis-Kenaikan-Pendapatan-Mei.md`: alasan kenaikan pendapatan pada Mei 2026 beserta strategi pemasarannya.
- `Analisis-Penurunan-Juli-Agustus-dan-Mitigasi-Pasokan.md`: penurunan pendapatan Juli dan Agustus 2026 beserta mitigasi pasokan sampai rekor September.
- `Daya-Tahan-Sensor-dan-AC-Signal-Excitation.md`: penurunan akurasi sensor, cara kerja AC Signal Excitation, dan usia perangkat.
- `Kebijakan-Stok-Buffer.md`: daftar SKU kritikal, rumus safety stock dan reorder point, serta dual sourcing.
- `Kapasitas-Produksi-dan-Ekspansi.md`: rekonsiliasi klaim kapasitas produksi, profit per produk, dan rencana ekspansi.
- `Pelapis-Biovarnish-Clear-Coat.md`: spesifikasi pelapis water-based dan perannya menjaga boks kayu.
- `Riset-Model-AI-Floral-Assistant.md`: riset model AI, harga API, kuota harian, dan biaya per pengguna.

## 3D case file

`app/components/CaseViewer.vue` auto-loads **`public/models/case.glb`** if present (else a stylized
stand-in rotates). Export from your CAD as `.glb` (binary glTF, ~Y-up, units in meters, ideally
< 5 MB, Draco-compressed is fine) and drop it at `public/models/case.glb`. No code change is needed.

## Known placeholders to finalize

- QR URLs in `ClosingCall` (`growmate.bond`, `/dashboard`, Instagram). Confirm the real links.
- Traction chart uses real monthly revenue from Grafik-Grafik/Ekonomi (total Rp59,07 jt). Unit sales still cite the paper (36 units).
