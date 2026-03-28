import type { ReactNode } from 'react'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'
import styles from './CTAButton.module.css'

const WHATSAPP_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

interface CTAButtonProps {
  href?: string
  children?: ReactNode
}

export function CTAButton({
  href = WHATSAPP_URL,
  children = 'Agendar primera consulta',
}: CTAButtonProps) {
  return (
    <a
      className={styles.ctaBtn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}
