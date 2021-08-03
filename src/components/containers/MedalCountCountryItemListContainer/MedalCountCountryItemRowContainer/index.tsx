import React from 'react'
import { getCountryName } from 'helpers/country'
import { Props } from './type'
import MedalCountCountryItemColumn from 'components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from 'components/styles/MedalCountCountryItemRow'

const Component = (props: Props): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn key="name" onClick={() => props.onClick}>
      {getCountryName(props.countryInfo)}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="gold"
      isCenter={true}
      onClick={() => props.onClick}
    >
      {props.medalCountCountry.gold_count}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="silver"
      isCenter={true}
      onClick={() => props.onClick}
    >
      {props.medalCountCountry.silver_count}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="bronze"
      isCenter={true}
      onClick={() => props.onClick}
    >
      {props.medalCountCountry.bronze_count}
    </MedalCountCountryItemColumn>,
  ]

  return <MedalCountCountryItemRow columnComponents={columnComponents} />
}

export default Component
