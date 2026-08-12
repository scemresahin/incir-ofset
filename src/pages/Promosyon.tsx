import PageHero from '../components/PageHero'

const ITEMS = ['Kalem', 'Kupa Bardak', 'Ajanda', 'Anahtarlık', 'Tişört', 'Çanta']

export default function Promosyon() {
  return (
    <>
      <PageHero
        breadcrumb="Promosyon"
        title="Promosyon Ürünleri"
        subtitle="Markanızı hatırlatan, kaliteli promosyon ürünleri."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm text-muted">
                  İçerik Figma tasarımına göre doldurulacak.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
