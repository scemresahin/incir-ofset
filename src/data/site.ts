// ---------------------------------------------------------------------------
//  İncir Ofset — site geneli veri (navigasyon, hizmetler, iletişim)
//  Metinler placeholder olarak yazıldı; Figma export'u gelince güncellenecek.
// ---------------------------------------------------------------------------

export type NavLink = { label: string; to: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Matbaa', to: '/matbaa' },
  { label: 'Promosyon', to: '/promosyon' },
  { label: 'Reklam', to: '/reklam' },
  { label: 'İletişim', to: '/iletisim' },
]

export const CONTACT = {
  company: 'İncir Ofset',
  phone: '+90 262 643 44 80',
  phoneHref: 'tel:+902626434480',
  email: 'info@incirofset.com.tr',
  emailHref: 'mailto:info@incirofset.com.tr',
  city: 'Kocaeli',
  address: 'Kocaeli, Türkiye', // Tam adres Figma/İncir Ofset bilgisine göre güncellenecek
}

export type Service = {
  title: string
  desc: string
  slug: string
}

// Hero'daki hizmet etiketlerinden derlendi
export const SERVICES: Service[] = [
  { title: 'Reklam Dubaları', slug: 'reklam-dubalari', desc: 'Dikkat çeken açık hava reklam dubaları.' },
  { title: 'Branda & Afiş', slug: 'branda-afis', desc: 'Dış mekâna dayanıklı branda ve afiş baskıları.' },
  { title: 'Yelken Bayrak', slug: 'yelken-bayrak', desc: 'Fuar ve etkinlikler için yelken bayraklar.' },
  { title: 'Rollup', slug: 'rollup', desc: 'Taşınabilir rollup ve banner sistemleri.' },
  { title: 'Masa Bayrağı', slug: 'masa-bayragi', desc: 'Kurumsal masa bayrağı üretimi.' },
  { title: 'Katalog', slug: 'katalog', desc: 'Kurumsal katalog tasarımı ve baskısı.' },
  { title: 'Broşür', slug: 'brosur', desc: 'El ilanı ve broşür baskı çözümleri.' },
  { title: 'Araç Magnetleri', slug: 'arac-magnetleri', desc: 'Araç giydirme ve magnet uygulamaları.' },
  { title: 'Tabela', slug: 'tabela', desc: 'Işıklı ve kutu harf tabela üretimi.' },
  { title: 'Marka Oluşturma', slug: 'marka-olusturma', desc: 'Sıfırdan kurumsal kimlik oluşturma.' },
  { title: 'Logo Tasarımı', slug: 'logo-tasarimi', desc: 'Özgün ve akılda kalıcı logo tasarımı.' },
  { title: 'Totem', slug: 'totem', desc: 'Yönlendirme ve reklam totemleri.' },
]
