import type { ReactNode, AnchorHTMLAttributes } from 'react'
import { WA_URL } from '../../constants/contact'
import styles from './PrimaryCTA.module.css'

interface PrimaryCTAProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'> {
  children?: ReactNode
  href?: string
  className?: string
}

export function PrimaryCTA({
  children = 'Agendar primera consulta',
  href = WA_URL,
  className,
  ...rest
}: PrimaryCTAProps) {
  return (
    <a
      className={`${styles.primaryCta}${className ? ` ${className}` : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}
