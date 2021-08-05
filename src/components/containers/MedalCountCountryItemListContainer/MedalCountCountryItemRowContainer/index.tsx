import React, { ReactChild } from 'react'
import { getCountryName } from '~/helpers/country'
import BaseImage from '~/components/commons/BaseImage'
import MedalCountCountryItemColumn from '~/components/styles/MedalCountCountryItemColumn'
import MedalCountCountryItemRow from '~/components/styles/MedalCountCountryItemRow'
import { Props } from './type'

const NameContentComponent = (props: {
  name: string
  imageSrc: string
}): JSX.Element => {
  return (
    <div className="gap-4 grid w-full grid-cols-1 xs:grid-cols-countryNameWithFlag">
      <div className="flex flex-row justify-center items-center">
        <BaseImage
          src={props.imageSrc}
          alt={props.name}
          height="100%"
          width="auto"
          className="border h-6"
        />
      </div>
      <div className="hidden xs:flex xs:flex-row xs:justify-start xs:items-center">
        <p className="text-sm sm:text-base truncate ...">{props.name}</p>
      </div>
    </div>
  )
}

const CountContentComponent = (props: {
  children: ReactChild
  color: 'gold' | 'silver' | 'bronze'
  isCenter: boolean
}): JSX.Element => {
  return (
    <p
      className={`flex flex-row items-center w-full font-bold text-sm sm:text-base ${
        props.isCenter
          ? 'justify-center text-center'
          : 'justify-start text-left'
      } text-${props.color}-default`}
    >
      {props.children}
    </p>
  )
}

const Component = (props: Props): JSX.Element => {
  const columnComponents = [
    <MedalCountCountryItemColumn key="name">
      <NameContentComponent
        imageSrc={props.countryInfo.flag}
        name={getCountryName(props.countryInfo)}
      />
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="gold">
      <CountContentComponent color="gold" isCenter={true}>
        {props.medalCountCountry.gold_count}
      </CountContentComponent>
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="silver">
      <CountContentComponent color="silver" isCenter={true}>
        {props.medalCountCountry.silver_count}
      </CountContentComponent>
    </MedalCountCountryItemColumn>,
    <MedalCountCountryItemColumn key="bronze">
      <CountContentComponent color="bronze" isCenter={true}>
        {props.medalCountCountry.bronze_count}
      </CountContentComponent>
    </MedalCountCountryItemColumn>,
  ]

  return (
    <MedalCountCountryItemRow
      columnComponents={columnComponents}
      onClick={props.onClick}
    />
  )
}

export default Component
