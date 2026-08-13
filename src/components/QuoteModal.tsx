import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { CONTACT } from '../data/site'

type Props = {
  open: boolean
  prefill?: string
  onClose: () => void
}

/**
 * Hızlı teklif modalı. Statik hosting (GitHub Pages) olduğu için form,
 * bilgileri toparlayıp bir mailto bağlantısıyla e-posta istemcisini açar.
 * İleride bir form servisi (Formspree) veya Worker eklenebilir.
 */
export default function QuoteModal({ open, prefill, onClose }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [product, setProduct] = useState(prefill ?? '')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setProduct(prefill ?? '')
  }, [prefill])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.body.classList.add('modal-open')
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Teklif Talebi${product ? ' – ' + product : ''}`
    const body = [
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Ürün / Hizmet: ${product}`,
      '',
      message,
    ].join('\n')
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-md rounded-3xl border border-white/10 bg-navy-900 p-7 shadow-2xl transition-all duration-300 ${
          open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <h2 className="font-heading text-2xl font-extrabold text-white">
          Hızlı Teklif Al
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Bilgilerinizi bırakın, en kısa sürede size dönelim.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ad Soyad"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none"
          />
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefon"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none"
          />
          <input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Ürün / Hizmet"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınız"
            rows={3}
            className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-brand-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-500 px-4 py-3.5 font-semibold text-white transition-colors hover:bg-brand-400"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  )
}
