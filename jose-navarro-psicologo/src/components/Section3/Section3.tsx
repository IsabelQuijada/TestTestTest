import { BenefitCard } from '../HeroSection/BenefitCard/BenefitCard'
import { CTAButton } from '../HeroSection/CTAButton/CTAButton'
import { HeartIcon } from '../HeroSection/icons/HeartIcon'
import { ShieldIcon } from '../HeroSection/icons/ShieldIcon'
import { ClockIcon } from '../HeroSection/icons/ClockIcon'
import type { BenefitItem } from '../../types'
import styles from './Section3.module.css'

const BENEFITS: BenefitItem[] = [
  { icon: <HeartIcon />,  label: 'Primera consulta gratuita',      variant: 'sky' },
  { icon: <ShieldIcon />, label: 'Atención online y presencial',   variant: 'green' },
  { icon: <ClockIcon />,  label: 'Respuesta en 24 horas',          variant: 'sand' },
]

export function Section3() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.mAccent} aria-hidden="true">
        <span className={styles.mAccentDot} />
        <span className={styles.mAccentLine} />
      </div>
      <div className={styles.eyebrow} aria-hidden="true">
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Contacto · Da el primer paso</span>
      </div>
      <div className={styles.headline}>
        <h2>
          Empieza hoy tu <em>camino</em>
          <br />
          hacia el <span className={styles.wordWarm}>equilibrio.</span>
        </h2>
      </div>
      <p className={styles.sub}>
        Reserva tu primera consulta sin compromiso. Estamos aquí para escucharte
        y guiarte hacia el cambio que necesitas.
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
