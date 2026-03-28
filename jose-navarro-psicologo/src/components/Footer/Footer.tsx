import styles from './Footer.module.css'

interface FooterProps {
  year: number
  licenseNumber: string
}

export function Footer({ year, licenseNumber }: FooterProps) {
  return (
    <footer className={styles.siteFooter}>
      © {year} José Navarro Psicólogo
      <span className={styles.sep} aria-hidden="true">·</span>
      Céd. Prof.: {licenseNumber}
      <span className={styles.sep} aria-hidden="true">·</span>
      Todos los derechos reservados
    </footer>
  )
}
