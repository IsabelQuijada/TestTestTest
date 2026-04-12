import { PrimaryCTA } from '../PrimaryCTA/PrimaryCTA'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <div className={styles.heroContent}>

      {/* Headline principal */}
      <div className={styles.headline}>
        <h1>
          Tu bienestar <em>mental</em><br />
          es nuestra <span className={styles.wordWarm}>prioridad.</span>
        </h1>
      </div>

      {/* Subtítulo */}
      <p className={styles.sub}>
        Ofrecemos acompañamiento psicológico profesional adaptado
        a tus necesidades. Trabajamos contigo para desarrollar
        herramientas que mejoren tu calidad de vida.
      </p>

      {/* CTA principal */}
      <div className={styles.ctaWrap}>
        <PrimaryCTA>Agendar primera consulta</PrimaryCTA>
      </div>

    </div>
  )
}
