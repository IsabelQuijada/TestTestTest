import React, { useRef } from 'react'
import styles from './Section2.module.css'
import { WA_URL } from '../../constants/contact'

/* ── Head silhouette SVG icons ── */
function IconDuelo() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 17L25.5 26Q28 30 30.5 26L28 17Z"
        fill="currentColor" fillOpacity=".55" stroke="none"/>
      <path d="M22 22C23 18 28 17 33 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function IconEstres() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 22C30 22 31.5 23.5 30 25C28.5 26.5 26 25.5 26.5 23.5C27 21.5 30 21 31.5 22.5C33 24 32 27 29.5 27.5C27 28 24.5 26 24 23.5C23.5 21 25 18.5 28 18"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function IconDepresion() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 20Q21 16 25 16Q26 13 30 14Q33 13 34 16Q37 16 37 20Z"
        stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity=".18" strokeLinejoin="round"/>
      <line x1="24" y1="22" x2="23" y2="27" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="28" y1="22" x2="27" y2="27" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="32" y1="22" x2="31" y2="27" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function IconAnsiedad() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 13L24 24H28.5L23 35"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconAutoestima() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="28" cy="22" r="7.5" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2"/>
      <path d="M24.5 18.5L31.5 25.5M31.5 18.5L24.5 25.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconCrecimiento() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 6C19 6 12 13 12 22C12 30 16 35 20 38L20 50L36 50L36 38C40 35 44 30 44 22C44 13 37 6 28 6Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="28" y1="36" x2="28" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M28 28Q22 26 21 19Q28 21 28 28Z"
        fill="currentColor" fillOpacity=".4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M28 23Q34 21 35 14Q28 16 28 23Z"
        fill="currentColor" fillOpacity=".4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  )
}

const VARIANTS = ['teal', 'sage', 'gold'] as const
type Variant = typeof VARIANTS[number]

const SERVICES: { label: string; desc: string; Icon: () => React.ReactElement }[] = [
  {
    label: 'Duelo',
    desc: 'Te ofrezco mi apoyo para superar la pérdida de un ser querido y encontrar la paz en momentos difíciles.',
    Icon: IconDuelo,
  },
  {
    label: 'Estrés',
    desc: 'Juntos, exploraremos herramientas efectivas para manejar el estrés en tu vida diaria y recuperar el equilibrio emocional.',
    Icon: IconEstres,
  },
  {
    label: 'Depresión',
    desc: 'Trabajaré contigo para superar la depresión, brindándote apoyo y orientación para recuperar la alegría.',
    Icon: IconDepresion,
  },
  {
    label: 'Ansiedad',
    desc: 'Enfrentaremos la ansiedad juntos, trabajando para recuperar la tranquilidad que necesitas para vivir plenamente.',
    Icon: IconAnsiedad,
  },
  {
    label: 'Baja Autoestima',
    desc: 'Te guiaré para construir una autoestima saludable y desarrollar una imagen positiva de ti mismo.',
    Icon: IconAutoestima,
  },
  {
    label: 'Crecimiento Personal',
    desc: 'Explora tu potencial y crece como individuo con mi apoyo y orientación en tu viaje de crecimiento personal.',
    Icon: IconCrecimiento,
  },
]

export function Section2() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'prev' | 'next') => {
    const el = carouselRef.current
    if (!el) return
    const card = el.querySelector('article') as HTMLElement | null
    const amount = card ? card.offsetWidth + 12 : 260
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="servicios" className={styles.section} aria-labelledby="services-heading">
      {/* Decorative background shapes */}
      <div className={styles.dots} aria-hidden="true" />
      <div className={styles.decoRing} aria-hidden="true" />
      <div className={styles.decoRingSmall} aria-hidden="true" />
      <div className={styles.decoArc} aria-hidden="true" />
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

      {/* Cards grid / mobile carousel */}
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
          onClick={() => scroll('prev')}
          aria-label="Card anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.grid} ref={carouselRef}>
          {SERVICES.map(({ label, desc, Icon }, idx) => {
            const variant: Variant = VARIANTS[idx % 3]
            return (
              <article
                key={label}
                className={`${styles.card} ${styles[variant]}`}
                style={{ '--i': idx + 1 } as React.CSSProperties}
              >
                <div className={styles.cardBody}>
                  <div className={styles.cardIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.cardTitle}>{label}</h3>
                  <p className={styles.cardDesc}>{desc}</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardBtn}
                    aria-label={`Consultar sobre ${label}`}
                  >
                    Contáctame
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <button
          className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
          onClick={() => scroll('next')}
          aria-label="Siguiente card"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </section>
  )
}
