import { CountryInfo, MedalCountCountry } from '~/generated/api'

export type Props = {
  rootClassName?: string
  countryInfos: CountryInfo[]
  medalCountCountries: MedalCountCountry[]
  onClick?: (alpha2Code: string) => void
}
