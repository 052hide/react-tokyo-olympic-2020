import { CountryInfo } from '~/generated/api'

export const countryInfos = (): CountryInfo[] => [
  {
    id: 1,
    name: 'Japan',
    alpha_2_code: 'JP',
    capital: 'Tokyo',
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 126960000,
    languages: [
      {
        name: 'Japanese',
      },
    ],
    translations: {
      ja: '日本',
    },
    flag: 'https://restcountries.eu/data/jpn.svg',
  },
  {
    id: 2,
    name: 'Japan',
    alpha_2_code: 'JP',
    capital: 'Tokyo',
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 126960000,
    languages: [
      {
        name: 'Japanese',
      },
    ],
    translations: {
      ja: '日本',
    },
    flag: 'https://restcountries.eu/data/jpn.svg',
  },
  {
    id: 2,
    name: 'Switzerland',
    alpha_2_code: 'CH',
    capital: 'Bern',
    region: 'Europe',
    subregion: 'Western Europe',
    population: 8341600,
    languages: [
      {
        name: 'German',
      },
      {
        name: 'French',
      },
      {
        name: 'Italian',
      },
    ],
    translations: {
      ja: 'スイス',
    },
    flag: 'https://restcountries.eu/data/che.svg',
  },
]
