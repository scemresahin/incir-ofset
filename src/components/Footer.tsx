import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { NAV_LINKS, SERVICES, CONTACT } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      {/* Harita */}
      <div className="h-64 w-full">
        <iframe
          title="İncir Ofset konum"
          src="https://www.google.com/maps?q=Kocaeli&output=embed"
          className="h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="font-heading text-2xl font-extrabold text-white">
            İncir<span className="text-brand-400">Ofset</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Kocaeli'nin köklü ofset matbaası. Baskı, reklam ve promosyon
            çözümlerinde çözüm ortağınız.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            Kurumsal
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            Hizmetler
          </h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            İletişim
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-400" />
              <a href={CONTACT.phoneHref} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-400" />
              <a href={CONTACT.emailHref} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-400" />
              {CONTACT.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs md:px-6">
          © {new Date().getFullYear()} İncir Ofset. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
