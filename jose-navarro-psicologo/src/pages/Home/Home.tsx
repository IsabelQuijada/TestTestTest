import heroImage from '../../assets/hero-session.jpg'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { HeroRibbon } from '../../components/HeroRibbon/HeroRibbon'
import { Section2 } from '../../components/Section2/Section2'
import { Section3 } from '../../components/Section3/Section3'
import { HeroImage } from '../../components/HeroSection/HeroImage/HeroImage'
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

      <div className={styles.page}>
        <Section2 />
        <div className={styles.rightCol}>
          <HeroImage src={heroImage} alt="Ilustración de servicios de psicología" />
        </div>
      </div>

      <div className={styles.page}>
        <Section3 />
        <div className={styles.rightCol}>
          <HeroImage src={heroImage} alt="Ilustración de contacto y reserva" />
        </div>
      </div>

      <Footer year={2026} licenseNumber="12831580" />

      {/* Sticky WhatsApp CTA */}
      <div className={styles.stickyWa}>
        <CTAButton className={styles.stickyBtn} iconOnly />
      </div>
    </>
  )
}
