import logo from '../../assets/logo.png'
import styles from './Header.module.css'

interface HeaderProps {
  badgeText?: string
}

export function Header({ badgeText = 'Próximamente' }: HeaderProps) {
  return (
    <header className={styles.siteHeader}>
      <a className={styles.headerLogo} href="/" aria-label="Ir al inicio — José Navarro Psicólogo">
        <img
          src={logo}
          alt="Logotipo José Navarro Psicólogo"
          className={styles.logoImg}
          loading="lazy"
        />
        <span className={styles.headerBrand}>
          <span className={styles.brandNameRow}>
            <strong className={styles.brandFirst}>José</strong>
            <em className={styles.brandLast}>navarro</em>
          </span>
          <span className={styles.brandRule} aria-hidden="true" />
          <span className={styles.brandTitle}>Psicólogo</span>
        </span>
      </a>

      {badgeText && (
        <span className={styles.headerBadge}>{badgeText}</span>
      )}
    </header>
  )
}
