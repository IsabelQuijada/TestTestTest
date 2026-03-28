import styles from './HeroRibbon.module.css'

export function HeroRibbon() {
  return (
    <div className={styles.ribbon} role="complementary" aria-label="Llamados a la acción">
      <div className={styles.inner}>
        <p className={styles.tagline}>
          Da el primer paso hacia tu bienestar — pide información sin compromiso.
        </p>
        <div className={styles.actions}>
          <a
            href="https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
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
