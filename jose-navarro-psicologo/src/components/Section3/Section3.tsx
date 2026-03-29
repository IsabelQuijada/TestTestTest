import joseNavarro from '../../assets/JoseNavarro.jpeg'
import styles from './Section3.module.css'

const WA_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

const STEPS = [
  { number: '01', label: 'Escríbeme',          desc: 'Un mensaje es suficiente para empezar. Respondo en menos de 24 h.' },
  { number: '02', label: 'Primera sesión',      desc: 'Nos conocemos, entiendo tu situación y trazamos el camino juntos.' },
  { number: '03', label: 'Plan personalizado',  desc: 'Un proceso terapéutico diseñado a tu medida y a tu ritmo.' },
  { number: '04', label: 'Avanzamos juntos',    desc: 'Seguimiento continuo con ajustes según tu progreso real.' },
]

function HipnosisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
    </svg>
  )
}

function IconIndividual() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconPareja() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconOnline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function IconCognitiva() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
      <path d="M8 12h8" />
    </svg>
  )
}

const THERAPIES = [
  {
    title: 'Terapia Individual',
    desc: 'Sesiones personalizadas para abordar tus preocupaciones en un espacio seguro y confidencial.',
    Icon: IconIndividual,
    variant: 'teal' as const,
  },
  {
    title: 'Terapia de Pareja',
    desc: 'Fortalece tu relación mejorando la comunicación y resolviendo conflictos juntos.',
    Icon: IconPareja,
    variant: 'sage' as const,
  },
  {
    title: 'Terapia Presencial · Online',
    desc: 'La misma calidad de atención desde la comodidad de tu hogar, sin importar dónde estés.',
    Icon: IconOnline,
    variant: 'teal' as const,
  },
  {
    title: 'Terapia Cognitivo-Conductual',
    desc: 'Enfoque basado en evidencia para identificar y transformar patrones de pensamiento negativos.',
    Icon: IconCognitiva,
    variant: 'sage' as const,
  },
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

          <a
            href="#sobre-mi"
            className={styles.ctaBtn}
            aria-label="Conoce más sobre mí"
          >
            Acerca de mí
          </a>
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

          {/* ── Tipos de Terapia header ── */}
          <div className={styles.therapyHeader}>
            <h3 className={styles.therapyTitle}>
              Tipos de <em>terapia</em>
            </h3>
            <p className={styles.therapySubtitle}>
              Ofrezco diferentes modalidades terapéuticas adaptadas a tus
              necesidades. Cada enfoque es personalizado para acompañarte
              en tu proceso de bienestar.
            </p>
          </div>

          {/* Featured — Hipnosis Clínica */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredIconWrap}>
              <div className={styles.featuredIcon}>
                <HipnosisIcon />
              </div>
              <span className={styles.featuredBadge}>Destacado</span>
            </div>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>Hipnosis Clínica</h3>
              <p className={styles.featuredDesc}>
                Técnica terapéutica que facilita el acceso a recursos internos profundos,
                ayudando a superar bloqueos emocionales, fobias y hábitos limitantes de
                forma segura y efectiva.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.featuredBtn}
              >
                Más información
              </a>
            </div>
          </div>

          {/* Therapy cards grid */}
          <div className={styles.therapyGrid}>
            {THERAPIES.map(({ title, desc, Icon, variant }, i) => (
              <article
                key={title}
                className={`${styles.card} ${styles[variant]}`}
                style={{ '--i': i + 1 } as React.CSSProperties}
              >
                <div className={styles.cardIcon}>
                  <Icon />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>{desc}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>

      {/* ── Steps + CTA — full-width below the two-column layout ── */}
      <div className={styles.stepsBlock}>
        <p className={styles.stepsLabel}>¿Cómo empezamos?</p>
        <div className={styles.stepsGrid}>
          {STEPS.map(({ number, label, desc }) => (
            <div key={number} className={styles.stepItem}>
              <span className={styles.stepNum}>{number}</span>
              <div>
                <p className={styles.stepTitle}>{label}</p>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.stepsCta}>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.stepsCtaBtn}>
            Reserva tu Consulta
          </a>
        </div>
      </div>

    </section>
  )
}
