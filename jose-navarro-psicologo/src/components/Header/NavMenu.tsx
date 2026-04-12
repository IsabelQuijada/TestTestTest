import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryCTA } from '../PrimaryCTA/PrimaryCTA'
import styles from './NavMenu.module.css'

export interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio',          href: '/' },
  { label: 'Servicios',       href: '/servicios' },
  { label: 'Acerca de mí',    href: '/acerca-de-mi' },
  { label: 'Contacto',        href: '/contacto' },
]

export function NavMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    if (open) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div className={styles.navWrapper}>
      {/* Desktop nav */}
      <nav className={styles.desktopNav} aria-label="Navegación principal">
        <ul className={styles.navList} role="list">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              {href.startsWith('#') ? (
                <a href={href} className={styles.navLink}>{label}</a>
              ) : (
                <Link to={href} className={styles.navLink}>{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA */}
      <PrimaryCTA className={styles.ctaBtn}>
        Agendar primera consulta
      </PrimaryCTA>

      {/* Hamburger button — only visible on mobile */}
      <button
        ref={buttonRef}
        className={styles.hamburger}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className={`${styles.bar} ${open ? styles.barTopOpen : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barMidOpen : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barBotOpen : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          <ul className={styles.mobileNavList} role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                {href.startsWith('#') ? (
                  <a
                    href={href}
                    className={styles.mobileNavLink}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={href}
                    className={styles.mobileNavLink}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <PrimaryCTA
          className={styles.mobileCta}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          Agendar primera consulta
        </PrimaryCTA>
      </div>
    </div>
  )
}
