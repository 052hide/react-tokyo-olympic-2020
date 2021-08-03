import React from 'react'
import { findCountryInfo } from '~/helpers/country'
import MedalCountCountryItemList from '~/components/styles/MedalCountCountryItemList'
import { Props } from './type'
import MedalCountCountryItemRowContainer from './MedalCountCountryItemRowContainer'
import MedalCountCountryItemRowHeaderContainer from './MedalCountCountryItemRowHeaderContainer'

const Component = (props: Props): JSX.Element => {
  const onClick = (alpha2Code: string) => {
    if (props.onClick) {
      props.onClick(alpha2Code)
    }
  }

  const bodyComponents = props.medalCountCountries
    .map((medalCountCountry) => {
      const countryInfo = findCountryInfo(
        medalCountCountry.country_alpha_2_code,
        props.countryInfos
      )
      return countryInfo ? (
        <MedalCountCountryItemRowContainer
          key={`medalCountCountries_${medalCountCountry.id}`}
          countryInfo={countryInfo}
          medalCountCountry={medalCountCountry}
          onClick={() => onClick(medalCountCountry.country_alpha_2_code)}
        />
      ) : null
    })
    .filter((bodyComponent) => bodyComponent !== null)

  return (
    <MedalCountCountryItemList
      headerComponent={<MedalCountCountryItemRowHeaderContainer />}
      bodyComponents={bodyComponents}
    />
  )
}

export default Component
