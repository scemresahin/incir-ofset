import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, CONTACT } from '../data/site'

// lucide marka ikonlarını kaldırdığı için sosyal ikonlar inline SVG
const svgProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const SOCIAL = [
  {
    label: 'Instagram',
    icon: (
      <svg {...svgProps}>
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg {...svgProps}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg {...svgProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="text-2xl text-white">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Kocaeli'nin köklü ofset matbaası. Baskı, reklam ve promosyon
            çözümlerinde çözüm ortağınız.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            Sayfalar
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
            İletişim
          </h4>
          <ul className="space-y-3 text-sm">
            <li>{CONTACT.address}</li>
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
