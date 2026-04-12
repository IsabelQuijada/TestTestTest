import { useRef, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CTASection } from '../../components/CTASection/CTASection'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { StickyWhatsApp } from '../../components/StickyWhatsApp/StickyWhatsApp'
import styles from './Servicios.module.css'

// Icono para cada servicio
function TherapyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function CoupleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function OnlineIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
}

function AnxietyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  )
}

function DepressionIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  )
}

function HypnosisIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}

const SERVICES: Service[] = [
  {
    id: 'terapia-individual',
    icon: <TherapyIcon />,
    title: 'Terapia Individual',
    description: 'Espacio seguro y confidencial para trabajar en tu bienestar emocional, desarrollo personal y superación de dificultades.',
    benefits: [
      'Atención personalizada y adaptada a tus necesidades',
      'Manejo de emociones y pensamientos',
      'Desarrollo de habilidades de afrontamiento',
      'Proceso de autoconocimiento y crecimiento personal'
    ]
  },
  {
    id: 'terapia-pareja',
    icon: <CoupleIcon />,
    title: 'Terapia de Pareja',
    description: 'Fortalece tu relación, mejora la comunicación y resuelve conflictos en un ambiente de respeto y comprensión.',
    benefits: [
      'Mejora de la comunicación efectiva',
      'Resolución de conflictos recurrentes',
      'Reconstrucción de la confianza',
      'Fortalecimiento del vínculo emocional'
    ]
  },
  {
    id: 'terapia-online',
    icon: <OnlineIcon />,
    title: 'Terapia Online',
    description: 'Atención psicológica profesional desde la comodidad de tu hogar, con la misma calidad y confidencialidad.',
    benefits: [
      'Flexibilidad de horarios',
      'Comodidad y privacidad desde tu espacio',
      'Misma efectividad que la terapia presencial',
      'Ideal para agenda ocupada o movilidad reducida'
    ]
  },
  {
    id: 'ansiedad-estres',
    icon: <AnxietyIcon />,
    title: 'Ansiedad y Estrés',
    description: 'Tratamiento especializado para manejar y superar la ansiedad, el estrés y sus manifestaciones físicas y emocionales.',
    benefits: [
      'Técnicas de relajación y mindfulness',
      'Manejo de crisis de ansiedad',
      'Reestructuración de pensamientos negativos',
      'Prevención de recaídas'
    ]
  },
  {
    id: 'depresion',
    icon: <DepressionIcon />,
    title: 'Depresión',
    description: 'Acompañamiento profesional para superar la depresión, recuperar la motivación y el sentido de bienestar.',
    benefits: [
      'Identificación de patrones depresivos',
      'Activación conductual y recuperación de intereses',
      'Trabajo sobre autoestima y autoimagen',
      'Estrategias para prevenir recaídas'
    ]
  }
]

export function Servicios() {
  return (
    <>
      <OrbsBackground />
      <Header />

      <main className={styles.serviciosPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Servicios de <span className={styles.heroHighlight}>Psicología Clínica</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Atención profesional, ética y personalizada para tu bienestar emocional y mental
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {SERVICES.map((service, idx) => {
                // Asigna una clase de color/acento por índice
                const accentClass = [
                  styles['serviceCard--azul'],
                  styles['serviceCard--verde'],
                  styles['serviceCard--teal'],
                  styles['serviceCard--dorado'],
                  styles['serviceCard--navy'],
                ][idx % 5];
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={styles.serviceCard + ' ' + accentClass}
                  >
                    <div className={styles.serviceIcon}>
                      {service.icon}
                    </div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <div className={styles.benefitsWrapper}>
                      <h3 className={styles.benefitsTitle}>Beneficios:</h3>
                      <ul className={styles.benefitsList}>
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className={styles.benefitItem}>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className={styles.servicesCarouselWrapper}>
              <ServicesCarousel />
            </div>
          </div>
        </section>

        {/* Hipnoterapia Special Section */}
        <section id="hipnoterapia" className={styles.hypnosisSection}>
          <div className={styles.container}>
            <div className={styles.hypnosisCard}>
              <div className={styles.hypnosisIcon}>
                <HypnosisIcon />
              </div>
              <div className={styles.hypnosisContent}>
                <h2 className={styles.hypnosisTitle}>Hipnoterapia Clínica</h2>
                <p className={styles.hypnosisSubtitle}>
                  Técnica terapéutica especializada para el cambio profundo y duradero
                </p>
                <p className={styles.hypnosisDescription}>
                  La hipnoterapia clínica es una herramienta terapéutica científicamente validada que permite acceder 
                  al subconsciente para trabajar en la raíz de diversos problemas psicológicos. A través de un estado 
                  de relajación profunda y concentración enfocada, puedes lograr cambios significativos en patrones 
                  de pensamiento, emociones y comportamientos.
                </p>
                
                <div className={styles.hypnosisGrid}>
                  <div className={styles.hypnosisBlock}>
                    <h3 className={styles.hypnosisBlockTitle}>¿Para qué sirve?</h3>
                    <ul className={styles.hypnosisList}>
                      <li>Superar fobias y miedos específicos</li>
                      <li>Manejo de dolor crónico</li>
                      <li>Control de hábitos (tabaco, alimentación)</li>
                      <li>Tratamiento de traumas y estrés postraumático</li>
                      <li>Mejora del rendimiento y concentración</li>
                      <li>Trastornos de ansiedad y pánico</li>
                    </ul>
                  </div>
                  
                  <div className={styles.hypnosisBlock}>
                    <h3 className={styles.hypnosisBlockTitle}>Proceso terapéutico</h3>
                    <ul className={styles.hypnosisList}>
                      <li>Evaluación inicial y establecimiento de objetivos</li>
                      <li>Inducción hipnótica personalizada</li>
                      <li>Trabajo profundo con el subconsciente</li>
                      <li>Integración de cambios y aprendizajes</li>
                      <li>Seguimiento y consolidación de resultados</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.hypnosisNote}>
                  <p>
                    <strong>Nota importante:</strong> La hipnoterapia clínica es completamente segura, 
                    profesional y científica. Durante todo el proceso mantienes el control y la consciencia. 
                    Es una colaboración entre terapeuta y paciente para alcanzar tus objetivos terapéuticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          text="Agenda tu primera consulta y comienza tu proceso de transformación personal"
          sectionClassName={styles.ctaSection}
        />
      </main>

      <Footer />

      <StickyWhatsApp />
    </>
  )
}

function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function scrollToIndex(index: number) {
    if (!carouselRef.current) return

    const targetIndex = Math.max(0, Math.min(index, SERVICES.length - 1))
    const firstCard = carouselRef.current.firstElementChild as HTMLElement | null
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 14
    carouselRef.current.scrollTo({
      left: targetIndex * (cardWidth + gap),
      behavior: 'smooth',
    })
    setActiveIndex(targetIndex)
  }

  function handleScroll() {
    if (!carouselRef.current) return
    const firstCard = carouselRef.current.firstElementChild as HTMLElement | null
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 14
    const nextIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.max(0, Math.min(nextIndex, SERVICES.length - 1)))
  }

  return (
    <div className={styles.servicesCarouselOuter}>
      <button
        type="button"
        className={styles.servicesNavBtn}
        onClick={() => scrollToIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Ver servicio anterior"
      >
        ‹
      </button>

      <div
        ref={carouselRef}
        className={styles.servicesCarousel}
        onScroll={handleScroll}
      >
        {SERVICES.map((service, idx) => {
          const accentClass = [
            styles['serviceCard--azul'],
            styles['serviceCard--verde'],
            styles['serviceCard--teal'],
            styles['serviceCard--dorado'],
            styles['serviceCard--navy'],
          ][idx % 5]

          return (
            <article
              key={service.id}
              id={`${service.id}-mobile`}
              className={`${styles.serviceCard} ${accentClass} ${styles.carouselCard}`}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.benefitsWrapper}>
                <h3 className={styles.benefitsTitle}>Beneficios:</h3>
                <ul className={styles.benefitsList}>
                  {service.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className={styles.benefitItem}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>

      <button
        type="button"
        className={styles.servicesNavBtn}
        onClick={() => scrollToIndex(activeIndex + 1)}
        disabled={activeIndex === SERVICES.length - 1}
        aria-label="Ver siguiente servicio"
      >
        ›
      </button>

      <div className={styles.servicesDots} role="tablist" aria-label="Paginación de servicios">
        {SERVICES.map((service, idx) => (
          <button
            key={service.id}
            type="button"
            className={`${styles.servicesDot} ${idx === activeIndex ? styles.servicesDotActive : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir al servicio ${idx + 1}`}
            aria-selected={idx === activeIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
