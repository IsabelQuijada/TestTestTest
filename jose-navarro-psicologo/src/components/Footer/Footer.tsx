import logo from '../../assets/logo.png'
import styles from './Footer.module.css'

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function ModeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Acerca de mí', href: '#sobre-mi' },
  { label: 'Contacto',   href: '#contacto' },
]

const SERVICE_LINKS = [
  { label: 'Terapia Individual' },
  { label: 'Terapia de Pareja' },
  { label: 'Terapia Online' },
  { label: 'Ansiedad y Estrés' },
  { label: 'Depresión' },
]

const WA_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Pie de página">
      <div className={styles.inner}>

        {/* ── Brand column ── */}
        <div className={styles.brandCol}>
          <a href="/" className={styles.brandLogo} aria-label="José Navarro Psicólogo — Inicio">
            <img src={logo} alt="Logotipo" className={styles.logoImg} />
            <span className={styles.brandName}>
              <span className={styles.brandNameRow}>
                <strong className={styles.brandFirst}>José</strong>
                <em className={styles.brandLast}>navarro</em>
              </span>
              <span className={styles.brandRule} aria-hidden="true" />
              <span className={styles.brandTitle}>Psicólogo</span>
            </span>
          </a>
          <p className={`${styles.cedula} ${styles.hideOnMobileSmall}`}>Cédula Profesional: 12831580</p>
        </div>

        {/* ── Navegación ── */}
        <nav className={styles.col} aria-label="Navegación del sitio">
          <h3 className={styles.colTitle}>Navegación</h3>
          <ul className={styles.linkList} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Servicios ── */}
        <nav className={`${styles.col} ${styles.hideOnMobile}`} aria-label="Servicios">
          <h3 className={styles.colTitle}>Servicios</h3>
          <ul className={styles.linkList} role="list">
            {SERVICE_LINKS.map(({ label }) => (
              <li key={label}>
                <a href="#servicios" className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contacto ── */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contacto</h3>
          <ul className={styles.contactList} role="list">
            <li className={`${styles.contactItem} ${styles.hideOnMobileSmall}`}>
              <LocationIcon />
              <span className={styles.muted}>Cocula, Jalisco · México</span>
            </li>
            <li className={styles.contactItem}>
              <PhoneIcon />
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
                +52 331 383 3562
              </a>
            </li>
            <li className={`${styles.contactItem} ${styles.hideOnMobileSmall}`}>
              <ModeIcon />
              <span className={styles.muted}>Presencial · Online</span>
            </li>
          </ul>
          <nav className={styles.socialRow} aria-label="Redes sociales">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </nav>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 José Navarro Psicólogo · Todos los derechos reservados · Atención ética y confidencial
        </p>
      </div>
    </footer>
  )
}
