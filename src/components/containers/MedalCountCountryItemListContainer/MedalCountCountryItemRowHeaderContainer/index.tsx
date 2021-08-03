import React from 'react'
import { Props } from './type'
import MedalCountCountryItemColumn from 'components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from 'components/styles/MedalCountCountryItemRow'

const Component = (props: Props): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn
      key="name"
      isHeader={true}
      isCenter={true}
      onClick={() => props.onClick}
    >
      国
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="gold"
      isHeader={true}
      isCenter={true}
      onClick={() => props.onClick}
    >
      金
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="silver"
      isHeader={true}
      isCenter={true}
      onClick={() => props.onClick}
    >
      銀
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="bronze"
      isHeader={true}
      isCenter={true}
      onClick={() => props.onClick}
    >
      銅
    </MedalCountCountryItemColumn>,
  ]
  return (
    <MedalCountCountryItemRow
      isHeader={true}
      columnComponents={columnComponents}
    />
  )
}

export default Component
