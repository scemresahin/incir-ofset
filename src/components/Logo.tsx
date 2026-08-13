import { Flame } from 'lucide-react'

type Props = {
  className?: string
  /** ikon rengini vurgu mavisi yapmak için */
  accentIcon?: boolean
}

/**
 * İncir Ofset wordmark'ı — alev ikonu + "incirofset" yazısı.
 * Not: Gerçek marka logosu (SVG/PNG) elimize geçince bu bileşen onunla
 * değiştirilecek; boyut font-size ile ölçeklenir (ikon em bazlı).
 */
export default function Logo({ className = '', accentIcon = false }: Props) {
  return (
    <span className={`logo-wm ${className}`}>
      <Flame
        className="logo-wm__icon"
        strokeWidth={2.4}
        style={accentIcon ? { color: 'var(--color-brand-400)' } : undefined}
        aria-hidden="true"
      />
      <span className="logo-wm__text">incirofset</span>
    </span>
  )
}
