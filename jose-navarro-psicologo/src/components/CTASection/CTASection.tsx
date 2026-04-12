import { PrimaryCTA } from '../PrimaryCTA/PrimaryCTA'
import styles from './CTASection.module.css'

interface CTASectionProps {
  title?: string
  text?: string
  buttonLabel?: string
  buttonHref?: string
  sectionClassName?: string
}

export function CTASection({
  title = '¿Listo para dar el primer paso?',
  text = 'Estoy aquí para acompañarte en tu proceso de cambio. Agenda tu primera consulta y comencemos juntos este camino hacia el bienestar.',
  buttonLabel = 'Agendar primera consulta',
  buttonHref,
  sectionClassName
}: CTASectionProps) {
  return (
    <section className={`${styles.ctaSection}${sectionClassName ? ` ${sectionClassName}` : ''}`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        <p className={styles.ctaText}>{text}</p>
        <div className={styles.ctaButton}>
          <PrimaryCTA href={buttonHref}>{buttonLabel}</PrimaryCTA>
        </div>
      </div>
    </section>
  )
}
