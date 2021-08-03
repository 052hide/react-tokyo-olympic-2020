import React from 'react'
import { getCountryName } from '~/helpers/country'
import MedalCountCountryItemColumn from '~/components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from '~/components/styles/MedalCountCountryItemRow'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn key="name">
      {getCountryName(props.countryInfo)}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="gold"
      isCenter={true}
    >
      {props.medalCountCountry.gold_count}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="silver"
      isCenter={true}
    >
      {props.medalCountCountry.silver_count}
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="bronze"
      isCenter={true}
    >
      {props.medalCountCountry.bronze_count}
    </MedalCountCountryItemColumn>,
  ]

  return <MedalCountCountryItemRow columnComponents={columnComponents} onClick={props.onClick} />
}

export default Component
