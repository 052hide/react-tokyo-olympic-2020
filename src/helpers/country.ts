import { Nullable } from '~/types/util'
import { CountryInfo, MedalCountCountry } from '~/generated/api'

export const getCountryName = (countryInfo: CountryInfo): string => {
  return countryInfo.translations?.ja || countryInfo.name
}

export const findCountryInfo = (
  alpha2Code: CountryInfo['alpha_2_code'],
  countryInfos: CountryInfo[]
): Nullable<CountryInfo> => {
  return (
    countryInfos.find(
      (countryInfo) =>
        countryInfo.alpha_2_code.toUpperCase() === alpha2Code.toUpperCase()
    ) || null
  )
}

export const findMedalCountCountry = (
  alpha2Code: CountryInfo['alpha_2_code'],
  medalCountCountries: MedalCountCountry[]
): Nullable<MedalCountCountry> => {
  return (
    medalCountCountries.find(
      (medalCountCountry) =>
      medalCountCountry.country_alpha_2_code.toUpperCase() === alpha2Code.toUpperCase()
    ) || null
  )
}
