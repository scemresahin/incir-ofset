import PageHero from '../components/PageHero'

const ITEMS = ['Katalog', 'Broşür', 'Kartvizit', 'Antetli Kağıt', 'Dosya', 'El İlanı']

export default function Matbaa() {
  return (
    <>
      <PageHero
        breadcrumb="Matbaa"
        title="Matbaa"
        subtitle="Ofset ve dijital baskıda kaliteli, hızlı ve uygun fiyatlı çözümler."
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
