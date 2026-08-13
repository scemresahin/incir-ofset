import { Link } from 'react-router-dom'

type Props = {
  title: string
  subtitle?: string
  breadcrumb: string
}

// İç sayfa hero'suyla aynı stil (lacivert degrade + mavi ışıma).
export default function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
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
          <Link to="/" className="hover:text-white">
            Anasayfa
          </Link>{' '}
          / <span className="text-brand-300">{breadcrumb}</span>
        </div>
        <h1 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>}
      </div>
    </section>
  )
}
