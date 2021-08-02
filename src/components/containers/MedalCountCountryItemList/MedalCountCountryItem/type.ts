import { ReactNode } from 'react'
import { MedalCountCountry } from 'generated/api'

export type Props = {
  children: ReactNode
  rootClassName?: string
  medalCountCountry: MedalCountCountry
  onClick?: (id: number) => void
}
