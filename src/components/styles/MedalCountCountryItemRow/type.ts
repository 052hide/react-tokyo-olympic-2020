import { ReactNode } from 'react'

export type Props = {
  columnComponents: ReactNode[]
  rootClassName?: string
  isHeader?: boolean
  onClick?: (id: number) => void
}
