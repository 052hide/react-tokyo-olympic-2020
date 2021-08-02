import React from 'react'
import { getCountryInfo, getCountryName } from 'helpers/country'
import { Props } from './type'
import MedalCountCountryItem from './MedalCountCountryItem'

const Component = (props: Props): JSX.Element => {
  return (
    <ul>
      {props.medalCountCountries.map((medalCountCountry) => {
        const countryInfo = getCountryInfo(
          medalCountCountry.country_alpha_2_code,
          props.countryInfos
        )
        return (
          <MedalCountCountryItem
            key={`medalCountCountries_${medalCountCountry.id}`}
            medalCountCountry={medalCountCountry}
          >
            {countryInfo ? (
              <>
                <p>{getCountryName(countryInfo)}</p>
                <div>
                  <p>{medalCountCountry.gold_count}</p>
                  <p>{medalCountCountry.silver_count}</p>
                  <p>{medalCountCountry.bronze_count}</p>
                </div>
              </>
            ) : (
              ''
            )}
          </MedalCountCountryItem>
        )
      })}
    </ul>
  )
}

export default Component
