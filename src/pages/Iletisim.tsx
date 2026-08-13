import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [`Ad Soyad: ${name}`, `E-posta: ${email}`, `Telefon: ${phone}`, '', message].join('\n')
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      'İletişim Formu',
    )}&body=${encodeURIComponent(body)}`
  }

  const inputCls =
    'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder-muted transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20'

  return (
    <>
      <PageHero
        breadcrumb="İletişim"
        title="İletişim"
        subtitle="Projeniz için bize ulaşın, en kısa sürede dönüş yapalım."
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Sol: iletişim bilgileri */}
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-ink">Bize Ulaşın</h2>
              <p className="mt-2 max-w-md text-muted">
                Baskı, reklam ve promosyon ihtiyaçlarınız için bizimle
                dilediğiniz kanaldan iletişime geçebilirsiniz.
              </p>

              <ul className="mt-8 space-y-5">
                {INFO.map((item) => {
                  const Icon = item.icon
                  const value = (
                    <>
                      <div className="font-semibold text-ink">{item.title}</div>
                      {item.lines.map((l, i) => (
                        <div key={i} className="text-sm text-muted">
                          {l}
                        </div>
                      ))}
                    </>
                  )
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-500">
                        <Icon size={22} />
                      </div>
                      {item.href ? (
                        <a href={item.href} className="transition-colors hover:text-brand-500">
                          {value}
                        </a>
                      ) : (
                        <div>{value}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Sağ: form kartı */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
              <h3 className="font-heading text-xl font-bold text-ink">Mesaj Gönderin</h3>
              <p className="mt-1 text-sm text-muted">Formu doldurun, en kısa sürede dönelim.</p>
              <form onSubmit={submit} className="mt-6 space-y-3">
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" className={inputCls} />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" className={inputCls} />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefon" className={inputCls} />
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mesajınız" rows={5} className={inputCls} />
                <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Tam genişlik harita */}
      <section aria-label="Konum" className="h-[420px] w-full">
        <iframe
          title="İncir Ofset konum"
          src="https://www.google.com/maps?q=Gebze,Kocaeli&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
