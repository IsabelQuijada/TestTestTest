import type { ReactNode } from 'react'

export type BenefitCardVariant = 'sky' | 'green' | 'sand'

export interface BenefitItem {
  icon: ReactNode
  label: string
  variant: BenefitCardVariant
}

export interface IconProps {
  color?: string
  size?: number
}
