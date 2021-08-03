import React from 'react'
import { getCountryInfo } from 'helpers/country'
import { Props } from './type'
import MedalCountCountryItemRowContainer from './MedalCountCountryItemRowContainer'
import MedalCountCountryItemRowHeaderContainer from './MedalCountCountryItemRowHeaderContainer'
import MedalCountCountryItemList from 'components/styles/MedalCountCountryItemList'

const Component = (props: Props): JSX.Element => {
  const bodyComponents = props.medalCountCountries
    .map((medalCountCountry) => {
      const countryInfo = getCountryInfo(
        medalCountCountry.country_alpha_2_code,
        props.countryInfos
      )
      return countryInfo ? (
        <MedalCountCountryItemRowContainer
          key={`medalCountCountries_${medalCountCountry.id}`}
          countryInfo={countryInfo}
          medalCountCountry={medalCountCountry}
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
