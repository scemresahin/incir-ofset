import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Rota değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled || !isHome || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy-900/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="font-heading text-xl font-extrabold tracking-tight">
            İncir<span className="text-brand-400">Ofset</span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-300' : 'text-white/85 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={CONTACT.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400 md:inline-flex"
        >
          <Phone size={16} /> Teklif Al
        </a>

        {/* Mobil aç/kapa */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <nav className="border-t border-white/10 bg-navy-900 md:hidden">
          <div className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? 'text-brand-300' : 'text-white/85'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="mt-2 mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} /> Teklif Al
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
