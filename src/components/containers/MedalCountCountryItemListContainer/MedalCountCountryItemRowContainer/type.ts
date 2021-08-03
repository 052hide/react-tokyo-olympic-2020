import { CountryInfo, MedalCountCountry } from 'generated/api'

export type Props = {
  rootClassName?: string
  countryInfo: CountryInfo
  medalCountCountry: MedalCountCountry
  onClick?: (id: number) => void
}
