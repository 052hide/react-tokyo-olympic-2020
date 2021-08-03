import { Nullable } from '~/types/util'
import { CountryInfo } from '~/generated/api'

export const getCountryName = (countryInfo: CountryInfo): string => {
  return countryInfo.translations?.ja || countryInfo.name
}

export const getCountryInfo = (
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
