import { ReactNode } from 'react'

export type Props = {
  columnComponents: ReactNode[]
  isHeader?: boolean
  onClick?: () => void
}
