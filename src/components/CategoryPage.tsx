import { Link } from 'react-router-dom'
import {
  ArrowRight, Gauge, PenTool, Truck, CreditCard,
  Search, ClipboardCheck, Printer, PackageCheck,
} from 'lucide-react'
import { PAGES, FEATURES, PROCESS, REFERENCES, type PageConfig } from '../data/pages'
import { galleryFor } from '../lib/assets'
import ContactSection from './ContactSection'

const FEATURE_ICONS = [Gauge, PenTool, Truck, CreditCard]
const PROCESS_ICONS = [Search, ClipboardCheck, Printer, PackageCheck]

export default function CategoryPage({ slug }: { slug: PageConfig['slug'] }) {
  const cfg = PAGES[slug]
  const gallery = galleryFor(slug)

  return (
    <>
      <InnerHero cfg={cfg} />
      <FeatureStrip />
      <ProductRange cfg={cfg} gallery={gallery} />
      <ProcessSteps />
      <References />
      <ContactSection />
    </>
  )
}

/* ----------------------------- Hero ----------------------------- */
// Not: Elimizdeki hero görselleri gömülü yazılı slaytlar olduğu için temiz bir
// lacivert degrade kullanıyoruz. Yazısız, geniş bir hero fotoğrafı gelince
// buraya arka plan görseli olarak eklenebilir.
function InnerHero({ cfg }: { cfg: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 75% at 82% 12%, rgba(75,143,214,0.22), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-navy-950" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-sm text-white/50">
          <Link to="/" className="hover:text-white">Anasayfa</Link>{' '}
          / <span className="text-brand-300">{cfg.breadcrumb}</span>
        </div>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight font-extrabold text-white md:text-6xl">
          {cfg.heading}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/75">{cfg.subtitle}</p>
        <div className="mt-8">
          <a
            href={cfg.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400"
          >
            {cfg.cta.label} <ArrowRight size={18} />
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Kurumsal Ürünler', 'Hızlı Teslimat', 'Toplu Sipariş'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------- Özellik şeridi ------------------------ */
function FeatureStrip() {
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-6">
        {FEATURES.map((f, i) => {
          const Icon = FEATURE_ICONS[i]
          return (
            <div key={f} className="flex flex-col items-center gap-3 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/10 text-brand-500">
                <Icon size={22} />
              </div>
              <span className="text-sm font-semibold text-ink">{f}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* --------------------- Geniş Ürün Yelpazesi --------------------- */
function ProductRange({ cfg, gallery }: { cfg: PageConfig; gallery: string[] }) {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-ink md:text-4xl">
          Geniş Ürün Yelpazesi
        </h2>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
          {cfg.productTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-xl border border-line bg-white"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------ Süreç Deneyimi ------------------------ */
function ProcessSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Süreç Deneyimi</h2>
          <p className="mt-3 text-muted">
            Bir fikirden teslimata uzanan yol — ilk temastan sonuca yanınızdayız.
          </p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[i]
            return (
              <div
                key={p.title}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-navy-800 text-white shadow-md">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-heading text-xs font-bold tracking-wide text-brand-500">
                    ADIM 0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* -------------------------- Referanslar ------------------------- */
function References() {
  return (
    <section className="border-y border-line bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-semibold tracking-wider text-muted uppercase">
          Referanslar
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {REFERENCES.map((r) => (
            <span key={r} className="font-heading text-xl font-bold text-muted/60">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
