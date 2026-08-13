import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import QuoteModal from '../components/QuoteModal'
import { TAGS, CATEGORIES, CONTACT } from '../data/site'

// Çipleri 3 satıra böl (Figma ile aynı gruplama)
const ROW_1 = TAGS.slice(0, 10)
const ROW_2 = TAGS.slice(10, 20)
const ROW_3 = TAGS.slice(20)

// Kusursuz, boşluksuz döngü için: tek "set" geniş ekranı da dolduracak kadar
// çoğaltılır (≥28 öğe → ~2800px+), sonra ikiye katlanır. translateX(-50%) ile
// ikinci kopya birinciyi tam karşılar; viewport'tan geniş olduğu için asla
// boşluk/atlama görünmez.
function buildLoop(items: readonly string[]): string[] {
  let base: string[] = []
  while (base.length < 28) base = base.concat(items)
  return [...base, ...base]
}

function MarqueeRow({
  items,
  variant,
  onPick,
}: {
  items: readonly string[]
  variant: string
  onPick: (t: string) => void
}) {
  const loop = buildLoop(items)
  return (
    <div className="home-mrow">
      <div className={`home-mtrack ${variant}`}>
        {loop.map((t, i) => (
          <button
            key={`${variant}-${i}`}
            type="button"
            className="home-tag"
            onClick={() => onPick(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false)
  const [prefill, setPrefill] = useState<string | undefined>(undefined)

  const openQuote = (product?: string) => {
    setPrefill(product)
    setOpen(true)
  }

  return (
    <div className="home-screen">
      {/* Arka plan videosu */}
      <video
        className="home-video"
        src={`${import.meta.env.BASE_URL}background-video.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="home-tint" />
      <div className="home-overlay" />

      <div className="home-content">
        <div className="home-hero">
          <Logo className="home-logo" />

          <div
            className="home-marquee"
            role="list"
            aria-label="Ürün ve hizmetler"
          >
            <MarqueeRow items={ROW_1} variant="home-mtrack--l" onPick={openQuote} />
            <MarqueeRow items={ROW_2} variant="home-mtrack--r" onPick={openQuote} />
            <MarqueeRow items={ROW_3} variant="home-mtrack--l2" onPick={openQuote} />
          </div>

          <button className="home-cta" onClick={() => openQuote()}>
            Hızlı Teklif Al <span className="arw">→</span>
          </button>

          <div className="home-cats">
            {CATEGORIES.map((c) => (
              <Link key={c.to} to={c.to} className="home-cat">
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        <footer className="home-foot">
          <span>{CONTACT.address}</span>
          <span className="sep">|</span>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <span className="sep">|</span>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </footer>
      </div>

      <QuoteModal open={open} prefill={prefill} onClose={() => setOpen(false)} />
    </div>
  )
}
