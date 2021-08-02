import React from 'react'
import { getCountryName } from 'helpers/country'
import { Props } from './type'
import MedalCountCountryItemColumn from 'components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from 'components/styles/MedalCountCountryItemRow'

const Component = (props: Props): JSX.Element => {
  return (
    <MedalCountCountryItemRow>
      <MedalCountCountryItemColumn onClick={() => props.onClick}>
        {getCountryName(props.countryInfo)}
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isCenter={true}
        onClick={() => props.onClick}
      >
        {props.medalCountCountry.gold_count}
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isCenter={true}
        onClick={() => props.onClick}
      >
        {props.medalCountCountry.silver_count}
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isCenter={true}
        onClick={() => props.onClick}
      >
        {props.medalCountCountry.bronze_count}
      </MedalCountCountryItemColumn>
    </MedalCountCountryItemRow>
  )
}

export default Component
