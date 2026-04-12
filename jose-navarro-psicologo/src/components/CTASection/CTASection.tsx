import styles from './CTASection.module.css'
import { PrimaryCTA } from '../PrimaryCTA/PrimaryCTA'

interface CTASectionProps {
	text?: string
	sectionClassName?: string
}

export function CTASection({
	text = 'Agenda tu primera consulta y comienza tu proceso de transformación personal',
	sectionClassName,
}: CTASectionProps) {
	return (
		<section className={`${styles.ctaSection}${sectionClassName ? ` ${sectionClassName}` : ''}`}>
			<div className={styles.ctaContainer}>
				<h2 className={styles.ctaTitle}>¿Listo para dar el primer paso?</h2>
				<p className={styles.ctaText}>{text}</p>
				<PrimaryCTA className={styles.ctaButton}>Agendar primera consulta</PrimaryCTA>
			</div>
		</section>
	)
}
