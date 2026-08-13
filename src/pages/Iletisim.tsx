import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'
import { CONTACT } from '../data/site'

const INFO = [
  { icon: Phone, title: 'Telefon', lines: [CONTACT.phone], href: CONTACT.phoneHref },
  { icon: Mail, title: 'E-posta', lines: [CONTACT.email], href: CONTACT.emailHref },
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Hacı Halil Mh. Menzilhane Cd. No:4', 'Gebze - Kocaeli, TR'],
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    lines: ['Hafta içi 09:00 – 18:00', 'Cumartesi 09:00 – 14:00'],
  },
]

export default function Iletisim() {
  return (
    <>
      <PageHero
        breadcrumb="İletişim"
        title="İletişim"
        subtitle="Projeniz için bize ulaşın, en kısa sürede dönüş yapalım."
      />

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          {INFO.map((c) => {
            const Icon = c.icon
            const inner = (
              <>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-ink">{c.title}</h3>
                {c.lines.map((l, i) => (
                  <p key={i} className="mt-1 text-sm text-muted">
                    {l}
                  </p>
                ))}
              </>
            )
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                className="rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {inner}
              </a>
            ) : (
              <div key={c.title} className="rounded-2xl border border-line bg-white p-6">
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
