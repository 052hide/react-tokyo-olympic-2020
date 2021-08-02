import React from 'react'
import { Props } from './type'
import MedalCountCountryItemColumn from 'components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from 'components/styles/MedalCountCountryItemRow'

const Component = (props: Props): JSX.Element => {
  return (
    <MedalCountCountryItemRow isHeader={true}>
      <MedalCountCountryItemColumn
        isHeader={true}
        isCenter={true}
        onClick={() => props.onClick}
      >
        国
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isHeader={true}
        isCenter={true}
        onClick={() => props.onClick}
      >
        金
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isHeader={true}
        isCenter={true}
        onClick={() => props.onClick}
      >
        銀
      </MedalCountCountryItemColumn>
      <MedalCountCountryItemColumn
        isHeader={true}
        isCenter={true}
        onClick={() => props.onClick}
      >
        銅
      </MedalCountCountryItemColumn>
    </MedalCountCountryItemRow>
  )
}

export default Component
