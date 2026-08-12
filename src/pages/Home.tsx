import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight, Check } from 'lucide-react'
import { SERVICES, CONTACT } from '../data/site'

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO — arka plan videolu                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Lacivert overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/80 to-navy-950/95" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 md:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white uppercase backdrop-blur">
              Kocaeli · Matbaa &amp; Reklam
            </span>
            <h1 className="mt-6 font-heading text-4xl leading-tight font-extrabold text-white md:text-6xl">
              Markanızı <span className="text-brand-400">görünür</span> kılıyoruz
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Matbaa, reklam ve promosyon çözümlerinde İncir Ofset ile
              fikirlerinizi kaliteli baskıya dönüştürün.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400"
              >
                Teklif Al <ArrowRight size={18} />
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Hizmetlerimiz
              </a>
            </div>

            {/* Hizmet etiketleri */}
            <div className="mt-10 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <span
                  key={s.slug}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/80 backdrop-blur"
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* İletişim çubuğu */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-950/60 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-3 text-sm text-white/80 md:px-6">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={16} className="text-brand-400" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={16} className="text-brand-400" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* HİZMETLER                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section id="hizmetler" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-500 uppercase">
              Hizmetlerimiz
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Baskıdan reklamına, her ihtiyaca tek çatı
            </h2>
            <p className="mt-4 text-muted">
              Kurumsal kimliğinizi güçlendiren geniş ürün ve hizmet yelpazesi.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Check size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Projeniz için hemen teklif alın
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Uzman ekibimiz baskı ve reklam ihtiyaçlarınız için en uygun çözümü
            sunsun.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white hover:bg-brand-400"
            >
              <Phone size={18} />
              {CONTACT.phone}
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
