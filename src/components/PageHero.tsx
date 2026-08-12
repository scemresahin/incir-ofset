import { Link } from 'react-router-dom'

type Props = {
  title: string
  subtitle?: string
  breadcrumb: string
}

export default function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, var(--color-brand-400), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-sm text-white/50">
          <Link to="/" className="hover:text-white">
            Anasayfa
          </Link>{' '}
          / <span className="text-brand-300">{breadcrumb}</span>
        </div>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
