import joseNavarro from '../../assets/JoseNavarro.jpeg'
import styles from './Section3.module.css'

const WA_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

const VALUES = [
  {
    title: 'Empatía real',
    desc: 'Escucho sin juzgar, desde un espacio de comprensión genuina y sin prisa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: 'teal',
  },
  {
    title: 'Total confidencialidad',
    desc: 'Tu privacidad es sagrada. Todo lo que compartas queda entre nosotros.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: 'sage',
  },
  {
    title: 'Enfoque científico',
    desc: 'Trabajo con metodologías avaladas por la evidencia, adaptadas a tu realidad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: 'gold',
  },
]

const STEPS = [
  { number: '01', label: 'Escríbeme', desc: 'Un mensaje es suficiente para empezar. Respondo en menos de 24 h.' },
  { number: '02', label: 'Primera sesión', desc: 'Nos conocemos, entiendo tu situación y trazamos el camino juntos.' },
  { number: '03', label: 'Plan personalizado', desc: 'Un proceso terapéutico diseñado a tu medida y a tu ritmo.' },
  { number: '04', label: 'Avanzamos juntos', desc: 'Seguimiento continuo con ajustes según tu progreso real.' },
]

export function Section3() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">

      {/* ── Background orbs ── */}
      <div className={styles.orbA} aria-hidden="true" />
      <div className={styles.orbB} aria-hidden="true" />

      <div className={styles.layout}>

        {/* ── LEFT: Photo + badge + quote ── */}
        <div className={styles.photoCol}>
          <div className={styles.photoFrame}>
            <img
              src={joseNavarro}
              alt="José Navarro, Psicólogo Clínico"
              className={styles.photo}
              loading="lazy"
            />
            <div className={styles.photoBadge} aria-label="Más de 5 años de experiencia">
              <span className={styles.badgeNumber}>+5</span>
              <span className={styles.badgeLabel}>años de<br />experiencia</span>
            </div>
          </div>

          <div className={styles.photoMeta}>
            <p className={styles.photoName}>José Navarro</p>
            <p className={styles.photoCredential}>Psicólogo Clínico</p>
          </div>

          <blockquote className={styles.quote}>
            "Acompañarte en tu proceso de cambio no es solo mi trabajo — es mi vocación."
          </blockquote>
        </div>

        {/* ── RIGHT: Bio + values + steps + CTA ── */}
        <div className={styles.contentCol}>

          <h2 id="about-heading" className={styles.title}>
            Un enfoque <em>humano</em> y científico
          </h2>

          <p className={styles.bio}>
            Soy psicólogo clínico especializado en terapia cognitivo-conductual. Trabajo con personas
            que atraviesan momentos difíciles —ansiedad, duelo, estrés, crisis vitales— y quieren
            retomar el control de su bienestar emocional. Mi consulta es un espacio seguro, sin
            juicios, donde el cambio real es posible.
          </p>

          {/* Values */}
          <div className={styles.values}>
            {VALUES.map(({ title, desc, icon, color }) => (
              <div key={title} className={`${styles.valueCard} ${styles[`value_${color}`]}`}>
                <div className={styles.valueIcon}>{icon}</div>
                <div>
                  <p className={styles.valueTitle}>{title}</p>
                  <p className={styles.valueDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className={styles.processBlock}>
            <p className={styles.processLabel}>¿Cómo empezamos?</p>
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
          </div>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            aria-label="Reservar tu consulta por WhatsApp"
          >
            Reserva tu consulta
          </a>
        </div>
      </div>
    </section>
  )
}
