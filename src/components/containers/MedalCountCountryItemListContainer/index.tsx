import React from 'react'
import { getCountryInfo } from 'helpers/country'
import { Props } from './type'
import MedalCountCountryItemContainer from './MedalCountCountryItemContainer'
import MedalCountCountryItemHeaderContainer from './MedalCountCountryItemHeaderContainer'

const Component = (props: Props): JSX.Element => {
  return (
    <ul>
      <li>
        <MedalCountCountryItemHeaderContainer />
      </li>
      {props.medalCountCountries.map((medalCountCountry) => {
        const countryInfo = getCountryInfo(
          medalCountCountry.country_alpha_2_code,
          props.countryInfos
        )
        return countryInfo ? (
          <li className="border-b">
            <MedalCountCountryItemContainer
              key={`medalCountCountries_${medalCountCountry.id}`}
              countryInfo={countryInfo}
              medalCountCountry={medalCountCountry}
            />
          </li>
        ) : (
          ''
        )
      })}
    </ul>
  )
}

export default Component
