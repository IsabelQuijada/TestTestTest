import heroImage from '../../assets/hero-session.jpg'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { HeroRibbon } from '../../components/HeroRibbon/HeroRibbon'
import { Section2 } from '../../components/Section2/Section2'
import { Section3 } from '../../components/Section3/Section3'
import { CTAButton } from '../../components/HeroSection/CTAButton/CTAButton'
import { Footer } from '../../components/Footer/Footer'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <OrbsBackground />
      <Header />

      <section className={styles.heroPage}>
        <img src={heroImage} alt="José Navarro Psícólogo" className={styles.heroBg} fetchPriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroTextWrap}>
          <HeroSection />
        </div>
      </section>

      <HeroRibbon />

      <Section2 />

      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Secondary wave — higher, semi-transparent, creates layered depth */}
          <path d="M0,68 C240,48 480,88 720,68 C960,48 1200,88 1440,68 L1440,140 L0,140 Z" fill="rgba(23,52,80,0.45)" />
          {/* Primary wave — full opacity, organic boundary */}
          <path d="M0,98 C180,122 360,74 540,98 C720,122 900,74 1080,98 C1260,122 1380,86 1440,98 L1440,140 L0,140 Z" fill="#173450" />
        </svg>
      </div>

      <Section3 />

      <div className={styles.waveFooter} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,75 720,10 1080,45 C1260,62 1380,25 1440,38 L1440,90 L0,90 Z" fill="#0c2137" />
        </svg>
      </div>

      <Footer />

      {/* Sticky WhatsApp CTA */}
      <div className={styles.stickyWa}>
        <CTAButton className={styles.stickyBtn} iconOnly />
      </div>
    </>
  )
}
