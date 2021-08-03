import React from 'react'
import MedalCountCountryItemColumn from '~/components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from '~/components/styles/MedalCountCountryItemRow'
import { Props } from './type'

const Component = (_props: Props): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn
      key="name"
      isHeader={true}
      isCenter={true}
    >
      国
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="gold"
      isHeader={true}
      isCenter={true}
    >
      金
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="silver"
      isHeader={true}
      isCenter={true}
    >
      銀
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn
      key="bronze"
      isHeader={true}
      isCenter={true}
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
