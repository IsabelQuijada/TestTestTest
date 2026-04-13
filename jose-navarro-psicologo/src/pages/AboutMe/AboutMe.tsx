import { useRef } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CTASection } from '../../components/CTASection/CTASection'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { StickyWhatsApp } from '../../components/StickyWhatsApp/StickyWhatsApp'
import logo from '../../assets/logo.png'
import styles from './AboutMe.module.css'

// Imagen de psicólogo hombre profesional de Unsplash
const PROFILE_IMAGE = 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export function AboutMe() {
  const pillarsRef = useRef<HTMLDivElement>(null)

  const scrollPillars = (direction: 'left' | 'right') => {
    if (pillarsRef.current) {
      const scrollAmount = pillarsRef.current.offsetWidth * 0.85
      const newScrollPosition = direction === 'left'
        ? pillarsRef.current.scrollLeft - scrollAmount
        : pillarsRef.current.scrollLeft + scrollAmount
      
      pillarsRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <>
      <OrbsBackground />
      <Header />

      <main className={styles.aboutPage}>
        {/* Hero Section - Tagline */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <p className={styles.heroTagline}>
              Acompañándote en tu proceso de transformación personal
            </p>
          </div>
        </section>

        {/* Introduction Section - Integrated */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.imageWrapper}>
                <img 
                  src={PROFILE_IMAGE} 
                  alt="José Navarro - Psicólogo Clínico"
                  className={styles.profileImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.introText}>
                <div className={styles.logoHeader}>
                  <img 
                    src={logo} 
                    alt="José Navarro Psicólogo"
                    className={styles.brandLogo}
                  />
                  <div className={styles.brandText}>
                    <h1 className={styles.psychologistName}>
                      José<span className={styles.nameItalic}>navarro</span>
                    </h1>
                    <div className={styles.nameDivider}></div>
                    <p className={styles.psychologistTitle}>PSICÓLOGO</p>
                    <p className={styles.cedula}>Cédula Profesional: 12345678</p>
                  </div>
                </div>
                
                <p className={styles.paragraph}>
                  Hola, soy <span className={styles.highlight}>José Navarro</span>, psicólogo clínico con más de <span className={styles.highlightTeal}>10 años de experiencia</span> ayudando a personas a superar desafíos emocionales y alcanzar una vida más <span className={styles.highlightTeal}>plena y satisfactoria</span>. Mi formación incluye un <span className={styles.highlightGold}>Máster en Psicología Clínica</span> y especialización en <span className={styles.highlightTeal}>Terapia Cognitivo-Conductual</span>.
                </p>
                <p className={styles.paragraph}>
                  Mi enfoque combina técnicas basadas en evidencia con un espacio <span className={styles.highlightGold}>seguro y sin juicios</span>, donde cada persona puede explorar sus pensamientos y emociones. Creo firmemente que <span className={styles.highlightTeal}>cada individuo posee los recursos internos necesarios para el cambio</span>, y mi rol es facilitar ese proceso de transformación personal.
                </p>
                
                {/* Experience - Text Format */}
                <div className={styles.experienceIntegrated}>
                  <h2 className={styles.experienceTitle}>Experiencia Profesional</h2>
                  <div className={styles.experienceList}>
                    <div className={styles.experienceItem}>
                      <span className={styles.experienceNumber}>01</span>
                      <div className={styles.experienceContent}>
                        <h3 className={styles.experienceItemTitle}>Consulta Privada</h3>
                        <p className={styles.experienceItemText}>
                          Más de 10 años de práctica clínica atendiendo trastornos de ansiedad, depresión, duelo, crisis vitales y desarrollo personal.
                        </p>
                      </div>
                    </div>

                    <div className={styles.experienceItem}>
                      <span className={styles.experienceNumber}>02</span>
                      <div className={styles.experienceContent}>
                        <h3 className={styles.experienceItemTitle}>Terapia de Pareja y Familia</h3>
                        <p className={styles.experienceItemText}>
                          Intervenciones sistémicas para mejorar comunicación y fortalecer vínculos afectivos.
                        </p>
                      </div>
                    </div>

                    <div className={styles.experienceItem}>
                      <span className={styles.experienceNumber}>03</span>
                      <div className={styles.experienceContent}>
                        <h3 className={styles.experienceItemTitle}>Formación y Supervisión</h3>
                        <p className={styles.experienceItemText}>
                          Formador y supervisor clínico, compartiendo conocimientos con nuevos profesionales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Approach - Inspired by Hero Section */}
        <section className={styles.approachSection}>
          <div className={styles.approachContainer}>
            <div className={styles.approachContent}>
              <h2 className={styles.approachTitle}>Mi Enfoque Terapéutico</h2>
              <p className={styles.approachSubtitle}>
                Un enfoque <em>humano</em> y científico
              </p>
              <p className={styles.approachText}>
                Soy psicólogo clínico especializado en terapia cognitivo-conductual. 
                Trabajo con personas que atraviesan momentos difíciles —ansiedad, duelo, 
                estrés, crisis vitales— y quieren retomar el control de su bienestar 
                emocional. Mi consulta es un espacio seguro, sin juicios, donde el cambio 
                real es posible.
              </p>
              
              <div className={styles.carouselWrapper}>
                <button 
                  className={`${styles.navButton} ${styles.navButtonLeft}`}
                  onClick={() => scrollPillars('left')}
                  aria-label="Ver tarjeta anterior"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                
                <div ref={pillarsRef} className={styles.approachPillars}>
                <div className={styles.pillar}>
                  <div className={styles.pillarIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>Empatía y Respeto</h3>
                    <p className={styles.pillarText}>Un espacio seguro donde puedas expresarte sin juicios</p>
                  </div>
                </div>

                <div className={styles.pillar}>
                  <div className={styles.pillarIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>Basado en Evidencia</h3>
                    <p className={styles.pillarText}>Técnicas respaldadas por investigación científica</p>
                  </div>
                </div>

                <div className={styles.pillar}>
                  <div className={styles.pillarIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>Colaboración Activa</h3>
                    <p className={styles.pillarText}>Trabajamos juntos hacia tus objetivos</p>
                  </div>
                </div>
              </div>
              
              <button 
                className={`${styles.navButton} ${styles.navButtonRight}`}
                onClick={() => scrollPillars('right')}
                aria-label="Ver siguiente tarjeta"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            </div>
          </div>
        </section>

        <CTASection />
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
