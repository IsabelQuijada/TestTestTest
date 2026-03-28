import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Ribbon } from './Ribbon'
import { NavMenu } from './NavMenu'
import styles from './Header.module.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={styles.headerRoot}>
      <Ribbon hidden={scrolled} />

      <header
        className={`${styles.siteHeader} ${scrolled ? styles.siteHeaderScrolled : ''}`}
        role="banner"
      >        <div className={styles.headerInner}>
          <a
            className={styles.headerLogo}
            href="/"
            aria-label="Ir al inicio — José Navarro Psicólogo"
          >
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

          <NavMenu />
        </div>
      </header>
    </div>
  )
}
