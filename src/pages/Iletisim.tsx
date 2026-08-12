import PageHero from '../components/PageHero'
import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT } from '../data/site'

export default function Iletisim() {
  return (
    <>
      <PageHero
        breadcrumb="İletişim"
        title="İletişim"
        subtitle="Projeniz için bize ulaşın, en kısa sürede dönüş yapalım."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <a
            href={CONTACT.phoneHref}
            className="rounded-2xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Phone className="text-brand-500" />
            <h3 className="mt-4 text-lg font-bold text-ink">Telefon</h3>
            <p className="mt-1 text-muted">{CONTACT.phone}</p>
          </a>
          <a
            href={CONTACT.emailHref}
            className="rounded-2xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail className="text-brand-500" />
            <h3 className="mt-4 text-lg font-bold text-ink">E-posta</h3>
            <p className="mt-1 text-muted">{CONTACT.email}</p>
          </a>
          <div className="rounded-2xl border border-line bg-white p-8">
            <MapPin className="text-brand-500" />
            <h3 className="mt-4 text-lg font-bold text-ink">Adres</h3>
            <p className="mt-1 text-muted">{CONTACT.address}</p>
          </div>
        </div>
      </section>
    </>
  )
}
