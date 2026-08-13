import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT } from '../data/site'

/** İletişim formu + harita + Merkez Ofis bilgisi. Hem iç sayfalarda hem de
 *  İletişim sayfasında kullanılır. Form, statik hosting için mailto ile çalışır. */
export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      `Telefon: ${phone}`,
      '',
      message,
    ].join('\n')
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      'İletişim Formu',
    )}&body=${encodeURIComponent(body)}`
  }

  const inputCls =
    'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none'

  return (
    <section id="iletisim" className="bg-navy-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-white">İletişim Formu</h2>
          <p className="mt-2 text-white/60">
            Formu gönderin, ekibimiz en kısa sürede size dönsün.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" className={inputCls} />
            <div className="grid gap-3 sm:grid-cols-2">
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" className={inputCls} />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefon" className={inputCls} />
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mesajınız" rows={4} className={inputCls} />
            <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400">
              Gönder
            </button>
          </form>
        </div>

        <div>
          <div className="h-64 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="İncir Ofset konum"
              src="https://www.google.com/maps?q=Gebze,Kocaeli&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-navy-800 p-5 text-sm text-white/70">
            <div className="font-semibold text-white">Merkez Ofis</div>
            <div className="mt-3 flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
              {CONTACT.address}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Phone size={16} className="text-brand-400" />
              <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phone}</a>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Mail size={16} className="text-brand-400" />
              <a href={CONTACT.emailHref} className="hover:text-white">{CONTACT.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
