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
        <img src={heroImage} alt="José Navarro Psicólogo" className={styles.heroBg} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroTextWrap}>
          <HeroSection />
        </div>
      </section>

      <HeroRibbon />

      <Section2 />

      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,48 C180,72 360,24 540,48 C720,72 900,24 1080,48 C1260,72 1380,36 1440,48 L1440,80 L0,80 Z" fill="#eaf1f8" />
        </svg>
      </div>

      <Section3 />

      <Footer />

      {/* Sticky WhatsApp CTA */}
      <div className={styles.stickyWa}>
        <CTAButton className={styles.stickyBtn} iconOnly />
      </div>
    </>
  )
}
