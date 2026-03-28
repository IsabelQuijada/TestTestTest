import { BenefitCard } from '../HeroSection/BenefitCard/BenefitCard'
import { CTAButton } from '../HeroSection/CTAButton/CTAButton'
import { HeartIcon } from '../HeroSection/icons/HeartIcon'
import { ShieldIcon } from '../HeroSection/icons/ShieldIcon'
import { ClockIcon } from '../HeroSection/icons/ClockIcon'
import type { BenefitItem } from '../../types'
import styles from './Section2.module.css'

const BENEFITS: BenefitItem[] = [
  { icon: <HeartIcon />,  label: 'Terapia individual',             variant: 'sky' },
  { icon: <ShieldIcon />, label: 'Enfoque cognitivo-conductual',   variant: 'green' },
  { icon: <ClockIcon />,  label: 'Sesiones de 50 minutos',         variant: 'sand' },
]

export function Section2() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.mAccent} aria-hidden="true">
        <span className={styles.mAccentDot} />
        <span className={styles.mAccentLine} />
      </div>
      <div className={styles.eyebrow} aria-hidden="true">
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Servicios · Psicología clínica</span>
      </div>
      <div className={styles.headline}>
        <h2>
          Tu bienestar <em>mental</em>
          <br />
          es nuestra <span className={styles.wordWarm}>prioridad.</span>
        </h2>
      </div>
      <p className={styles.sub}>
        Ofrecemos acompañamiento psicológico profesional adaptado a tus necesidades.
        Trabajamos contigo para desarrollar herramientas que mejoren tu calidad de vida.
      </p>
      <div className={styles.cardsRow}>
        {BENEFITS.map(({ icon, label, variant }) => (
          <BenefitCard key={label} icon={icon} label={label} variant={variant} />
        ))}
      </div>
      <CTAButton />
    </div>
  )
}
