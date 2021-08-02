import { ReactNode, CSSProperties } from 'react'

export type Props = {
  children: ReactNode
  colCount: number
  rootClassName?: string
  gridTemplateColumns?: CSSProperties['gridTemplateColumns']
  onClick?: () => void
}
