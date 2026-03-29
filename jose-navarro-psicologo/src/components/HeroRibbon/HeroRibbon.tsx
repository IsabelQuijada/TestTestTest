import styles from './HeroRibbon.module.css'
import { WA_URL } from '../../constants/contact'

export function HeroRibbon() {
  return (
    <div className={styles.ribbon} role="complementary" aria-label="Llamados a la acción">
      <div className={styles.inner}>
        <p className={styles.tagline}>
          Da el primer paso hacia tu bienestar — pide información sin compromiso.
        </p>
        <div className={styles.actions}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
         Solicita información
          </a>
        </div>
      </div>
    </div>
  )
}
