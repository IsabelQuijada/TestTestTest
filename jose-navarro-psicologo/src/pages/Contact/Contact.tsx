import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { PrimaryCTA } from '../../components/PrimaryCTA/PrimaryCTA'
import { StickyWhatsApp } from '../../components/StickyWhatsApp/StickyWhatsApp'
import { PHONE_DISPLAY, PHONE_TEL } from '../../constants/contact'
import styles from './Contact.module.css'
import React, { useRef, useState } from 'react'

// Icon Components
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41A2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

// Main Contact Component
export function Contact() {
  return (
    <>
      <OrbsBackground />
      <Header />
      <main className={styles.contactPage}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <h1 className={styles.mainTitle}>Contáctame sin compromiso</h1>
            <p className={styles.subtitle}>
          Responderé lo antes posible y con total confidencialidad
            </p>
          </section>
        </div>

        {/* Contact Cards Container with Servicios Ribbon Background - Full Width */}
        <div className={styles.contactCardsContainer}>
          <div className={styles.contactCardsInner}>
            {/* Contact Methods - Primary CTAs */}
            <section className={styles.contactMethods}>
              {/* Desktop Grid */}
              <div className={styles.ctaGrid}>
                <a href="mailto:contacto@josenavarropsi.com" className={styles.ctaCard}>
                  <div className={styles.ctaIcon}>
                    <EmailIcon />
                  </div>
                  <p className={styles.ctaCardTitle}>Escribir correo</p>
                  <span className={styles.ctaCardEmail}>contacto@josenavarropsi.com</span>
                </a>

                <a 
                  href="https://wa.me/523313833562" 
                  className={`${styles.ctaCard} ${styles.ctaCardWa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`${styles.ctaIcon} ${styles.ctaIconWa}`}>
                    <WhatsAppIcon />
                  </div>
                  <p className={styles.ctaCardTitle}>WhatsApp</p>
                  <span className={styles.ctaCardPhone}>{PHONE_DISPLAY}</span>
                </a>

                <a href={`tel:${PHONE_TEL}`} className={`${styles.ctaCard} ${styles.ctaCardCall}`}>
                  <div className={`${styles.ctaIcon} ${styles.ctaIconCall}`}>
                    <PhoneIcon />
                  </div>
                  <p className={styles.ctaCardTitle}>Llamar</p>
                  <span className={styles.ctaCardPhone}>{PHONE_DISPLAY}</span>
                </a>
              </div>

              {/* Mobile Carousel */}
              <div className={styles.ctaCarouselWrapper}>
                <CarouselCards />
              </div>
            </section>

            {/* Essential Info - Horario y Modalidad */}
            <section className={styles.additionalInfo}>
              <div className={styles.infoItem}>
                <ClockIcon />
                <div>
                  <p className={styles.infoLabel}>Horario</p>
                  <p className={styles.infoValue}>Lunes a Viernes</p>
                  <p className={styles.infoSub}>10 am – 2 pm  ·  4 – 8 pm</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <MonitorIcon />
                <div>
                  <p className={styles.infoLabel}>Modalidad</p>
                  <p className={`${styles.infoValue} ${styles.infoValueGreen}`}>
                    Presencial · Online
                    <span className={styles.onlineDot} aria-hidden="true" />
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.container}>
          {/* Location */}
          <section className={styles.locationSection}>
            <h2 className={styles.locationTitle}>Consultorio</h2>
            <p className={styles.locationAddress}>
              Ocampo 132 B-Interior 3, Cocula, Jalisco
            </p>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps?q=Ocampo+132,+48500+Cocula,+Jalisco,+México&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio en Cocula, Jalisco"
              ></iframe>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.finalCta}>
            <PrimaryCTA>Agendar primera consulta</PrimaryCTA>
          </div>
        </div>
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

// CarouselCards Component - Mobile horizontal swipe carousel with navigation
function CarouselCards() {
  const cards = [
    {
      key: 'email',
      href: 'mailto:contacto@josenavarropsi.com',
      className: styles.ctaCard,
      iconClass: styles.ctaIcon,
      icon: <EmailIcon />,
      title: 'Escribir correo',
      value: <span className={styles.ctaCardEmail}>contacto@josenavarropsi.com</span>,
    },
    {
      key: 'wa',
      href: 'https://wa.me/523313833562',
      className: `${styles.ctaCard} ${styles.ctaCardWa}`,
      iconClass: `${styles.ctaIcon} ${styles.ctaIconWa}`,
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      value: <span className={styles.ctaCardPhone}>{PHONE_DISPLAY}</span>,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      key: 'call',
      href: `tel:${PHONE_TEL}`,
      className: `${styles.ctaCard} ${styles.ctaCardCall}`,
      iconClass: `${styles.ctaIcon} ${styles.ctaIconCall}`,
      icon: <PhoneIcon />,
      title: 'Llamar',
      value: <span className={styles.ctaCardPhone}>{PHONE_DISPLAY}</span>,
    },
  ]

  const [current, setCurrent] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touching, setTouching] = useState(false)

  function handleTouchStart(e: React.TouchEvent) {
    setTouching(true)
    setTouchStartX(e.touches[0].clientX)
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!touching || touchStartX === null) return
    const diff = e.touches[0].clientX - touchStartX
    if (Math.abs(diff) > 50) {
      if (diff < 0 && current < cards.length - 1) setCurrent(current + 1)
      if (diff > 0 && current > 0) setCurrent(current - 1)
      setTouching(false)
      setTouchStartX(null)
    }
  }

  function handleTouchEnd() {
    setTouching(false)
    setTouchStartX(null)
  }

  function goLeft() {
    if (current > 0) setCurrent(current - 1)
  }

  function goRight() {
    if (current < cards.length - 1) setCurrent(current + 1)
  }

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * current,
        behavior: 'smooth',
      })
    }
  }, [current])

  return (
    <div className={styles.carouselOuter}>
      <button
        className={styles.carouselNavBtn}
        onClick={goLeft}
        aria-label="Anterior"
        disabled={current === 0}
      >
        {'<'}
      </button>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, idx) => (
          <a
            key={card.key}
            href={card.href}
            className={card.className}
            target={card.target}
            rel={card.rel}
            tabIndex={current === idx ? 0 : -1}
            aria-hidden={current !== idx}
            style={{ minWidth: '90%', maxWidth: '90%', margin: '0 5%' }}
          >
            <div className={card.iconClass}>{card.icon}</div>
            <p className={styles.ctaCardTitle}>{card.title}</p>
            <div>{card.value}</div>
          </a>
        ))}
      </div>

      <button
        className={styles.carouselNavBtn}
        onClick={goRight}
        aria-label="Siguiente"
        disabled={current === cards.length - 1}
      >
        {'>'}
      </button>
    </div>
  )
}
