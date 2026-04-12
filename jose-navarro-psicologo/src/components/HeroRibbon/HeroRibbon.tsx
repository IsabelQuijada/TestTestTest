import { PrimaryCTA } from '../PrimaryCTA/PrimaryCTA'
import styles from './HeroRibbon.module.css'

export function HeroRibbon() {
  return (
    <div className={styles.ribbon} role="complementary" aria-label="Llamados a la acción">
      <div className={styles.inner}>
        <p className={styles.tagline}>
          Da el primer paso hacia tu bienestar — pide información sin compromiso.
        </p>
        <div className={styles.actions}>
          <PrimaryCTA>
            Solicitar información
          </PrimaryCTA>
        </div>
      </div>
    </div>
  )
}
