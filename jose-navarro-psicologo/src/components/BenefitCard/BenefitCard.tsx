import type { ReactNode } from 'react'
import type { BenefitCardVariant } from '../../types'
import styles from './BenefitCard.module.css'

interface BenefitCardProps {
  icon: ReactNode
  label: string
  variant?: BenefitCardVariant
}

export function BenefitCard({ icon, label, variant = 'sky' }: BenefitCardProps) {
  const iconClass = `${styles.pillIcon} ${styles[variant]}`

  return (
    <div className={styles.pillCard}>
      <div className={iconClass} aria-hidden="true">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  )
}
