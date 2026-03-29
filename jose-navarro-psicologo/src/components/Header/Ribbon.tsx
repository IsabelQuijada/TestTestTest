import styles from './Ribbon.module.css'
import { PHONE_DISPLAY, PHONE_TEL } from '../../constants/contact'

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.98-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export function Ribbon({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className={`${styles.ribbon} ${hidden ? styles.ribbonHidden : ''}`}
      role="complementary"
      aria-label="Información de contacto"
      aria-hidden={hidden}
    >
      <div className={styles.ribbonInner}>
        <a href={`tel:${PHONE_TEL}`} className={styles.contactItem} aria-label="Llamar al teléfono">
          <PhoneIcon />
          <span>{PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  )
}

