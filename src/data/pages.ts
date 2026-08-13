import { CONTACT } from './site'

export type CtaConfig = { label: string; href: string }

export type PageConfig = {
  slug: 'matbaa' | 'promosyon' | 'reklam'
  breadcrumb: string
  heading: string
  subtitle: string
  cta: CtaConfig
  productTags: string[]
}

// İç sayfa içerikleri (ekran-2 tasarımına göre)
export const PAGES: Record<PageConfig['slug'], PageConfig> = {
  matbaa: {
    slug: 'matbaa',
    breadcrumb: 'Matbaa',
    heading: 'Kaliteli & Ekonomik Çözümler',
    subtitle:
      'Ofset ve dijital baskıda kaliteli, hızlı ve ekonomik çözümlerle markanızı en iyi şekilde yansıtıyoruz.',
    cta: { label: 'Hemen Ara', href: CONTACT.phoneHref },
    productTags: [
      'Katalog', 'Broşür', 'Kartvizit', 'Antetli Kağıt', 'Bloknot',
      'Masa Takvimi', 'Duvar Takvimi', 'Dosya', 'El İlanı', 'Cilt', 'Föy', 'Etiket',
    ],
  },
  promosyon: {
    slug: 'promosyon',
    breadcrumb: 'Promosyon',
    heading: 'Bir Hediye, Binbir Mutluluk',
    subtitle:
      'Kalemden kupaya, ajandadan çantaya her türlü promosyon ürününde markanızı hediyeye dönüştürüyoruz.',
    cta: { label: 'Katalog İndir', href: '#iletisim' },
    productTags: [
      'Kalem', 'Kupa', 'Termos', 'Bez Çanta', 'Ajanda', 'Defter',
      'Anahtarlık', 'Şemsiye', 'Powerbank', 'Çakmak', 'Duvar Saati', 'Mendil',
    ],
  },
  reklam: {
    slug: 'reklam',
    breadcrumb: 'Reklam',
    heading: 'Görünür Olmak, İz Bırakmak',
    subtitle:
      'Tabela, totem, araç giydirme ve dijital baskı çözümleriyle markanızı her yerde görünür kılıyoruz.',
    cta: { label: 'Projelendir', href: '#iletisim' },
    productTags: [
      'Tabela', 'Totem', 'Araç Giydirme', 'Branda', 'Afiş', 'Rollup',
      'Işıklı Kutu Harf', 'Cephe Giydirme', 'Yelken Bayrak', 'Dijital Baskı',
    ],
  },
}

export const FEATURES = [
  'Kaliteli & Hızlı Üretim',
  'Grafik Tasarım Desteği',
  'Zamanında & Güvenli Teslimat',
  'Cazip Ödeme Seçenekleri',
] as const

export const PROCESS = [
  { title: 'İhtiyacın Belirlenmesi', text: 'Talebinizi dinliyor, doğru ürün ve çözümü birlikte belirliyoruz.' },
  { title: 'Tasarım & Onay Süreci', text: 'Tasarımı hazırlıyor, onayınıza sunuyor ve birlikte son hâlini veriyoruz.' },
  { title: 'Üretim & Baskı', text: 'Onaylı işi kaliteli malzeme ve modern makinelerle üretiyoruz.' },
  { title: 'Teslimat & Destek', text: 'İşinizi zamanında teslim ediyor, sonrasında da yanınızda oluyoruz.' },
] as const

export const REFERENCES = ['PORLAND', 'METYX', 'TEKMAK', 'SIEMENS', 'KİĞILI', 'FLORMAR'] as const
