import { CTAButton } from '../HeroSection/CTAButton/CTAButton'
import styles from './StickyWhatsApp.module.css'

export function StickyWhatsApp() {
  return (
    <div className={styles.stickyWa}>
      <CTAButton className={styles.stickyBtn} iconOnly />
    </div>
  )
}
