import styles from './Section2.module.css'

const WA_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

const SERVICES = [
  {
    label: 'Terapia Individual',
    desc: 'Un espacio confidencial donde trabajamos juntos tus pensamientos, emociones y patrones de conducta para alcanzar el bienestar que mereces.',
    variant: 'teal',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Ansiedad y Estrés',
    desc: 'Aprende técnicas basadas en evidencia para regular tus respuestas al estrés, reducir la activación ansiosa y recuperar la calma interior.',
    variant: 'sage',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Terapia Cognitivo‑Conductual',
    desc: 'El enfoque psicoterapéutico con mayor respaldo científico. Identificamos y transformamos los esquemas de pensamiento que limitan tu vida.',
    variant: 'teal',
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Depresión',
    desc: 'Acompañamiento especializado para salir de los ciclos de tristeza, desmotivación y vacío. Recupera el color y el sentido en tu día a día.',
    variant: 'gold',
    img: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Presencial y Online',
    desc: 'Elige la modalidad que mejor se adapte a ti. Atención en consulta en Guadalajara o desde cualquier lugar vía videollamada, con la misma calidad y confidencialidad.',
    variant: 'sage',
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80',
  },
]

export function Section2() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      {/* Header */}
      <div className={styles.header}>
        <h2 id="services-heading" className={styles.title}>
          ¿En qué puedo <em>ayudarte?</em>
        </h2>
        <p className={styles.subtitle}>
          Cada persona es única. Trabajo con un enfoque personalizado
          y basado en evidencia para acompañarte en tu proceso.
        </p>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {SERVICES.map(({ label, desc, variant, img }) => (
          <article key={label} className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.cardImg}>
              <img src={img} alt={label} loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{label}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
                aria-label={`Consultar sobre ${label}`}
              >
                Pedir información
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.ctaArrow}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Section ribbon — ¿A quién va dirigido? */}
      <div className={styles.sectionRibbon}>
        <div className={styles.ribbonInner}>

          <div className={styles.ribbonHeader}>
            <h3 className={styles.ribbonTitle}>¿A quién va <em>dirigido?</em></h3>
            <span className={styles.ribbonRule} aria-hidden="true" />
          </div>

          <div className={styles.audienceGrid}>

            {/* Infancia */}
            <div className={styles.audienceGroup}>
              <div className={styles.avatarRow}>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(12,132,175,.12)"/>
                    <circle cx="22" cy="17" r="6" fill="rgba(12,132,175,.55)"/>
                    <path d="M10 38c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="rgba(12,132,175,.35)"/>
                    <path d="M16 14c1-3 5-4 8-2" stroke="rgba(12,132,175,.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(44,144,96,.12)"/>
                    <circle cx="22" cy="17" r="6" fill="rgba(44,144,96,.55)"/>
                    <path d="M10 38c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="rgba(44,144,96,.35)"/>
                    <path d="M18 13c2-2 6-2 8 0" stroke="rgba(44,144,96,.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className={styles.audienceLabel}>Infancia</p>
              <p className={styles.audienceDesc}>Desarrollo emocional y habilidades sociales en las primeras etapas</p>
            </div>

            <div className={styles.audienceDivider} aria-hidden="true" />

            {/* Adolescencia */}
            <div className={styles.audienceGroup}>
              <div className={styles.avatarRow}>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(12,132,175,.12)"/>
                    <circle cx="22" cy="16" r="7" fill="rgba(12,132,175,.55)"/>
                    <path d="M9 40c0-7.18 5.82-13 13-13s13 5.82 13 13" fill="rgba(12,132,175,.35)"/>
                    <path d="M15 12c2-4 8-4 10-1" stroke="rgba(12,132,175,.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(194,148,56,.12)"/>
                    <circle cx="22" cy="16" r="7" fill="rgba(194,148,56,.55)"/>
                    <path d="M9 40c0-7.18 5.82-13 13-13s13 5.82 13 13" fill="rgba(194,148,56,.35)"/>
                    <path d="M16 11c1-3 9-4 11 0" stroke="rgba(194,148,56,.7)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className={styles.audienceLabel}>Adolescencia</p>
              <p className={styles.audienceDesc}>Cambios hormonales, identidad y gestión de las emociones</p>
            </div>

            <div className={styles.audienceDivider} aria-hidden="true" />

            {/* Edad Adulta */}
            <div className={styles.audienceGroup}>
              <div className={styles.avatarRow}>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(12,132,175,.12)"/>
                    <circle cx="22" cy="16" r="7" fill="rgba(12,132,175,.45)"/>
                    <path d="M9 40c0-7.18 5.82-13 13-13s13 5.82 13 13" fill="rgba(12,132,175,.28)"/>
                    <path d="M15 12c1-2 4-3 7-2s5 3 5 5" stroke="rgba(12,132,175,.6)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className={styles.avatar}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="22" fill="rgba(44,144,96,.12)"/>
                    <circle cx="22" cy="16" r="7" fill="rgba(44,144,96,.45)"/>
                    <path d="M9 40c0-7.18 5.82-13 13-13s13 5.82 13 13" fill="rgba(44,144,96,.28)"/>
                    <path d="M16 11c2-2 6-2 9 1" stroke="rgba(44,144,96,.6)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className={styles.audienceLabel}>Edad Adulta</p>
              <p className={styles.audienceDesc}>Bienestar, resiliencia y plenitud en la madurez de la vida</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
