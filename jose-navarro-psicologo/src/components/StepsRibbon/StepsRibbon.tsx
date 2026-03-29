import styles from './StepsRibbon.module.css'

const STEPS = [
  { number: '01', label: 'Escríbeme', desc: 'Un mensaje es suficiente para empezar. Respondo en menos de 24 h.' },
  { number: '02', label: 'Primera sesión', desc: 'Nos conocemos, entiendo tu situación y trazamos el camino juntos.' },
  { number: '03', label: 'Plan personalizado', desc: 'Un proceso terapéutico diseñado a tu medida y a tu ritmo.' },
  { number: '04', label: 'Avanzamos juntos', desc: 'Seguimiento continuo con ajustes según tu progreso real.' },
]

const WA_URL = 'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

export function StepsRibbon() {
  return (
    <div className={styles.ribbon} role="complementary" aria-label="Proceso de consulta">
      <div className={styles.inner}>
        <p className={styles.label}>¿Cómo empezamos?</p>
        <div className={styles.steps}>
          {STEPS.map(({ number, label, desc }) => (
            <div key={number} className={styles.step}>
              <span className={styles.stepNum}>{number}</span>
              <div>
                <p className={styles.stepLabel}>{label}</p>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Reserva tu Consulta
          </a>
        </div>
      </div>
    </div>
  )
}
