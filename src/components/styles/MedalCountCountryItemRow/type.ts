import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  rootClassName?: string
  isHeader?: boolean
  onClick?: (id: number) => void
}
