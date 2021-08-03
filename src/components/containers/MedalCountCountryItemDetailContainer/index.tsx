import React from 'react'
import { getCountryName } from '~/helpers/country'
import BaseImage from '~/components/commons/BaseImage'
import { Props } from './type'

const RowComponent = (props: { title: string; value: string }): JSX.Element => {
  return (
    <li className="flex justify-start items-center py-2 px-4 border-b">
      <p className="w-28 text-left">{props.title}</p>
      <p className="text-left">{props.value}</p>
    </li>
  )
}

const Component = (props: Props): JSX.Element => {
  const language = props.countryInfo.languages
    ?.map((language) => language.name)
    .join(', ')
  let area = `${props.countryInfo.region}`
  area =
    area && props.countryInfo.subregion
      ? `${area}, ${props.countryInfo.subregion}`
      : `${props.countryInfo.subregion}`

  return (
    <div className="grid gap-4">
      <div className="border-t border-b border-solid border-gray-200">
        <BaseImage
          src={props.countryInfo.flag}
          alt={props.countryInfo.alpha_2_code}
          width="100%"
        />
      </div>
      <ul className="px-2">
        <RowComponent title="国名" value={getCountryName(props.countryInfo)} />
        {props.countryInfo.population ? (
          <RowComponent
            title="人口"
            value={`${props.countryInfo.population}`}
          />
        ) : (
          ''
        )}
        {language ? <RowComponent title="言語" value={language} /> : ''}
        {area ? <RowComponent title="エリア" value={area} /> : ''}
      </ul>
    </div>
  )
}

export default Component
