// ---------------------------------------------------------------------------
//  İncir Ofset — site geneli veri (navigasyon, hizmetler, iletişim)
//  Ana ekran çipleri Figma/sagu-web referansıyla birebir.
// ---------------------------------------------------------------------------

export type NavLink = { label: string; to: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Matbaa', to: '/matbaa' },
  { label: 'Promosyon', to: '/promosyon' },
  { label: 'Reklam', to: '/reklam' },
  { label: 'İletişim', to: '/iletisim' },
]

// Ana ekrandaki 3 büyük kategori butonu → iç sayfalara gider
export const CATEGORIES: NavLink[] = [
  { label: 'Matbaa', to: '/matbaa' },
  { label: 'Promosyon', to: '/promosyon' },
  { label: 'Reklam', to: '/reklam' },
]

// Ana ekranda yatay kayan çipler (Figma ile birebir sıra)
export const TAGS = [
  'etiket', 'ikaz levhaları', 'kumlama folyo', 'ledbox', 'örümcek stand', 'mesh branda',
  'reklam dubaları', 'branda afiş', 'yelken bayrak', 'rollup', 'lightbox', 'promosyon ürünleri',
  'tanıtım standı', 'kartvizit', 'oneway cam giydirme', 'flyer', 'masa bayrağı', 'katalog', 'broşür',
  'araç magnetleri', 'nfc kart', 'folyo kaplama', 'kırlangıç bayrak', 'fuar hazırlıkları', 'tabela',
  'marka oluşturma', 'logo tasarımı', 'totem',
] as const

export const CONTACT = {
  company: 'İncir Ofset',
  phone: '+90 262 643 44 80',
  phoneHref: 'tel:+902626434480',
  email: 'info@incirofset.com.tr',
  emailHref: 'mailto:info@incirofset.com.tr',
  city: 'Kocaeli',
  address: 'Hacı Halil Mh. Menzilhane Cd. No:4 Gebze - Kocaeli, TR',
}

export type Service = {
  title: string
  desc: string
  slug: string
}

// İç sayfalarda kullanılan genel hizmet listesi (şimdilik)
export const SERVICES: Service[] = [
  { title: 'Katalog', slug: 'katalog', desc: 'Kurumsal katalog tasarımı ve baskısı.' },
  { title: 'Broşür', slug: 'brosur', desc: 'El ilanı ve broşür baskı çözümleri.' },
  { title: 'Kartvizit', slug: 'kartvizit', desc: 'Özel kesim ve kaplama kartvizitler.' },
  { title: 'Tabela', slug: 'tabela', desc: 'Işıklı ve kutu harf tabela üretimi.' },
  { title: 'Totem', slug: 'totem', desc: 'Yönlendirme ve reklam totemleri.' },
  { title: 'Logo Tasarımı', slug: 'logo-tasarimi', desc: 'Özgün ve akılda kalıcı logo tasarımı.' },
]
