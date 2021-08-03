import React, { ReactChild } from 'react'
import MedalCountCountryItemColumn from '~/components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from '~/components/styles/MedalCountCountryItemRow'

const TextComponent = (props: { children: ReactChild }): JSX.Element => {
  return (
    <p className="flex flex-row justify-center items-center w-full font-bold text-center text-xs sm:text-sm">
      {props.children}
    </p>
  )
}

const Component = (): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn key="name">
      <TextComponent>国</TextComponent>
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="gold">
      <TextComponent>金</TextComponent>
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="silver">
      <TextComponent>銀</TextComponent>
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="bronze">
      <TextComponent>銅</TextComponent>
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
