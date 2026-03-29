import type { ReactNode } from 'react'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'
import styles from './CTAButton.module.css'
import { WA_URL as WHATSAPP_URL } from '../../../constants/contact'

interface CTAButtonProps {
  href?: string
  children?: ReactNode
  className?: string
  iconOnly?: boolean
}

export function CTAButton({
  href = WHATSAPP_URL,
  children = 'Agendar primera consulta',
  className,
  iconOnly = false,
}: CTAButtonProps) {
  return (
    <a
      className={`${styles.ctaBtn}${iconOnly ? ` ${styles.ctaBtnIcon}` : ''}${className ? ` ${className}` : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? 'Agendar consulta por WhatsApp' : undefined}
    >
      {iconOnly && <WhatsAppIcon />}
      {!iconOnly && children}
    </a>
  )
}
