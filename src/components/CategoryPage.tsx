import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Gauge, PenTool, Truck, CreditCard,
  Search, ClipboardCheck, Printer, PackageCheck,
  MapPin, Phone, Mail,
} from 'lucide-react'
import { PAGES, FEATURES, PROCESS, REFERENCES, type PageConfig } from '../data/pages'
import { CONTACT } from '../data/site'
import { galleryFor } from '../lib/assets'

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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[i]
            return (
              <div key={p.title} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-white">
                    <Icon size={20} />
                  </div>
                  <span className="font-heading text-3xl font-extrabold text-line">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
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

/* ------------------------ İletişim Formu ------------------------ */
function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      `Telefon: ${phone}`,
      '',
      message,
    ].join('\n')
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      'İletişim Formu',
    )}&body=${encodeURIComponent(body)}`
  }

  const inputCls =
    'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none'

  return (
    <section id="iletisim" className="bg-navy-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-white">İletişim Formu</h2>
          <p className="mt-2 text-white/60">
            Formu gönderin, ekibimiz en kısa sürede size dönsün.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" className={inputCls} />
            <div className="grid gap-3 sm:grid-cols-2">
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" className={inputCls} />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefon" className={inputCls} />
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mesajınız" rows={4} className={inputCls} />
            <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400">
              Gönder
            </button>
          </form>
        </div>

        <div>
          <div className="h-64 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="İncir Ofset konum"
              src="https://www.google.com/maps?q=Gebze,Kocaeli&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-navy-800 p-5 text-sm text-white/70">
            <div className="font-semibold text-white">Merkez Ofis</div>
            <div className="mt-3 flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
              {CONTACT.address}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Phone size={16} className="text-brand-400" />
              <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phone}</a>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Mail size={16} className="text-brand-400" />
              <a href={CONTACT.emailHref} className="hover:text-white">{CONTACT.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
