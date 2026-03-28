import heroImage from '../../assets/hero-placeholder.avif'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { HeroImage } from '../../components/HeroImage/HeroImage'
import { Footer } from '../../components/Footer/Footer'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <OrbsBackground />
      <Header />

      <div className={styles.page}>
        <HeroSection />
        <div className={styles.rightCol}>
          <HeroImage
            src={heroImage}
            alt="Ilustración de naturaleza y psicología"
          />
        </div>
      </div>

      <Footer year={2026} licenseNumber="12831580" />
    </>
  )
}
