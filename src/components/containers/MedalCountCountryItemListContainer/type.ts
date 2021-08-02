import { CountryInfo, MedalCountCountry } from 'generated/api'

export type Props = {
  rootClassName?: string
  countryInfos: CountryInfo[]
  medalCountCountries: MedalCountCountry[]
  onClick?: (id: number) => void
}
