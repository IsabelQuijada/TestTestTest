import { BenefitCard } from '../BenefitCard/BenefitCard'
import { CTAButton } from '../CTAButton/CTAButton'
import { HeartIcon } from '../icons/HeartIcon'
import { ShieldIcon } from '../icons/ShieldIcon'
import { ClockIcon } from '../icons/ClockIcon'
import type { BenefitItem } from '../../types'
import styles from './HeroSection.module.css'

const BENEFITS: BenefitItem[] = [
  { icon: <HeartIcon />,  label: 'Atención personalizada',        variant: 'sky' },
  { icon: <ShieldIcon />, label: 'Espacio seguro y confidencial', variant: 'green' },
  { icon: <ClockIcon />,  label: 'A tu ritmo, sin presión',       variant: 'sand' },
]

export function HeroSection() {
  return (
    <div className={styles.heroContent}>

      {/* Acento decorativo — solo visible en mobile */}
      <div className={styles.mAccent} aria-hidden="true">
        <span className={styles.mAccentDot} />
        <span className={styles.mAccentLine} />
      </div>

      {/* Eyebrow */}
      <div className={styles.eyebrow} aria-hidden="true">
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Próximamente · 2026</span>
      </div>

      {/* Headline principal */}
      <div className={styles.headline}>
        <h1>
          Un lugar <em>seguro</em>
          <br />
          está <span className={styles.wordWarm}>naciendo</span> para&nbsp;ti.
        </h1>
      </div>

      {/* Subtítulo */}
      <p className={styles.sub}>
        Nuestro sitio está en construcción. Estamos preparando algo especial para ti.
        Mientras tanto, puedes escribirnos para reservar tu lugar o resolver cualquier duda.
      </p>

      {/* Tarjetas de beneficio */}
      <div className={styles.cardsRow}>
        {BENEFITS.map(({ icon, label, variant }) => (
          <BenefitCard key={label} icon={icon} label={label} variant={variant} />
        ))}
      </div>

      {/* CTA de WhatsApp */}
      <CTAButton />

    </div>
  )
}
