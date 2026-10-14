export interface CardPerson {
  name: string
  short: string
  role: string
  email: string
  marks: string
  initials: string
}

export const ORG = {
  name: 'GrowMate',
  tagline: 'Petani Makmur, Tanpa Lumpur',
  email: 'contact@growmate.bond',
  web: 'growmate.bond',
  city: 'Bantul, Yogyakarta',
  affiliation: 'SMA Negeri 1 Bantul, Jl. KH. Wahid Hasyim, Jetis, Palbapang, Kec. Bantul, Kab. Bantul, DIY, Indonesia',
}

export const PEOPLE: CardPerson[] = [
  {
    name: 'Farel Reski Aditiya',
    short: 'farel',
    role: 'Founder',
    email: 'farel@farel.is-a.dev',
    marks: 'a,1,*',
    initials: 'FA',
  },
  {
    name: 'Aulia Anindita Primastiti',
    short: 'aulia',
    role: 'Co-Founder',
    email: 'aprimastiti0903@gmail.com',
    marks: 'a,2',
    initials: 'AP',
  },
]

export const CARD_STATS = [
  { value: '−42,8%', label: 'hemat air' },
  { value: '72→94%', label: 'kesintasan' },
  { value: '373%', label: 'ROI Pods' },
  { value: '36 unit', label: 'terjual' },
]

export const GALLERY = [
  { src: '/images/misc/hero.webp', title: 'Pods + kemasan', desc: 'Soka demo dengan LED spektrum penuh.' },
  { src: '/images/misc/roadmap.webp', title: 'Pilot sawah', desc: 'Unit Tech terpasang di lahan mitra.' },
  { src: '/images/misc/versus.webp', title: 'Soka subur', desc: 'Terawat dengan Pranata Mangsa adaptif.' },
  { src: '/images/impact/farmer.webp', title: 'Tech farmer', desc: 'Petani mitra memegang unit Tech.' },
]

export const SOCIALS = [
  { icon: 'lucide:instagram', label: 'Instagram', href: 'https://instagram.com' },
  { icon: 'lucide:music-2', label: 'TikTok', href: 'https://tiktok.com' },
  { icon: 'lucide:shopping-bag', label: 'Shopee', href: 'https://shopee.co.id' },
]

export function personVcard(p: CardPerson) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${p.name}`,
    `ORG:${ORG.name}`,
    `TITLE:${p.role}`,
    `EMAIL:${p.email}`,
    `URL:https://${ORG.web}`,
    `ADR:;;${ORG.affiliation};;;;Indonesia`,
    'END:VCARD',
  ].join('\n')
}
