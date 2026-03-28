import logo from '../../assets/logo.png'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Sobre mí',   href: '#sobre-mi' },
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
        <nav className={styles.col} aria-label="Servicios">
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
            <li>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                +52 331 383 3562
              </a>
            </li>
            <li className={styles.muted}>Guadalajara, México</li>
            <li className={styles.muted}>Presencial · Online</li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 José Navarro Psicólogo · Todos los derechos reservados
        </p>
        <p className={styles.license}>
          Céd. Prof.:&nbsp;12831580 · Atención ética y confidencial
        </p>
      </div>
    </footer>
  )
}
