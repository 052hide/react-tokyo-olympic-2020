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
        medalCountCountry.country_alpha_2_code.toUpperCase() ===
        alpha2Code.toUpperCase()
    ) || null
  )
}

export const getSortedMedalCountCountriesByMedalRankCount = (
  medalCountCountries: MedalCountCountry[]
): MedalCountCountry[] => {
  const diff = (
    diffItemA: MedalCountCountry,
    diffItemB: MedalCountCountry,
    key: 'gold_count' | 'silver_count' | 'bronze_count',
    sortDirection: 'asc' | 'desc' = 'asc'
  ) => {
    if (diffItemA[key] < diffItemB[key]) {
      return sortDirection === 'asc' ? 1 : -1
    } else if (diffItemA[key] > diffItemB[key]) {
      return sortDirection === 'asc' ? -1 : 1
    } else {
      return 0
    }
  }

  return Array.from(medalCountCountries).sort((a, b) => {
    // gold
    const gold = diff(a, b, 'gold_count')
    if (gold) {
      return gold
    }

    // silver
    const silver = diff(a, b, 'silver_count')
    if (silver) {
      return silver
    }

    // bronze
    const bronze = diff(a, b, 'bronze_count')
    if (bronze) {
      return bronze
    }

    return 0
  })
}
