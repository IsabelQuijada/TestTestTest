import { useRef, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CTASection } from '../../components/CTASection/CTASection'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { StickyWhatsApp } from '../../components/StickyWhatsApp/StickyWhatsApp'
import styles from './Servicios.module.css'

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
  image: string
  imageAlt: string
  title: string
  description: string
  benefits: string[]
}

const SERVICES: Service[] = [
  {
    id: 'terapia-individual',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop',
    imageAlt: 'Espacio de bienestar y meditacion',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    imageAlt: 'Pareja en contexto de terapia positiva',
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
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&h=800&fit=crop',
    imageAlt: 'Sesion de terapia online en ambiente calido',
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
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=800&fit=crop',
    imageAlt: 'Bienestar emocional y calma',
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
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1200&h=800&fit=crop',
    imageAlt: 'Acompanamiento emocional con esperanza',
    title: 'Depresión',
    description: 'Acompañamiento profesional para superar la depresión, recuperar la motivación y el sentido de bienestar.',
    benefits: [
      'Identificación de patrones depresivos',
      'Activación conductual y recuperación de intereses',
      'Trabajo sobre autoestima y autoimagen',
      'Estrategias para prevenir recaídas'
    ]
  },
  {
    id: 'hipnoterapia-clinica',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop',
    imageAlt: 'Ambiente relajante para hipnoterapia clinica',
    title: 'Hipnoterapia Clínica',
    description: 'Intervencion especializada para cambios profundos y duraderos en ansiedad, habitos, bloqueos emocionales y bienestar integral.',
    benefits: [
      'Trabajo terapeutico profundo y enfocado',
      'Tecnicas seguras con acompañamiento profesional',
      'Apoyo para cambios emocionales sostenibles',
      'Integracion con tu proceso psicoterapeutico'
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
                  styles['serviceCard--dorado'],
                ][idx % 3];
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`${styles.serviceCard} ${accentClass}`}
                  >
                    <div className={styles.serviceMedia}>
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className={styles.serviceImage}
                        loading="lazy"
                      />
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

      <div className={styles.waveFooter} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,75 720,10 1080,45 C1260,62 1380,25 1440,38 L1440,90 L0,90 Z" fill="#0c2137" />
        </svg>
      </div>

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
            styles['serviceCard--dorado'],
          ][idx % 3]

          return (
            <article
              key={service.id}
              id={`${service.id}-mobile`}
              className={`${styles.serviceCard} ${accentClass} ${styles.carouselCard}`}
            >
              <div className={styles.serviceMedia}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className={styles.serviceImage}
                  loading="lazy"
                />
              </div>
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
