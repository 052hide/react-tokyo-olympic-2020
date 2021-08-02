import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <ul
      className={`grid grid-cols-4 items-center transition-colors duration-150${
        props.isHeader
          ? 'sticky top-0 bg-gray-100 shadow-sm'
          : 'bg-white cursor-pointer hover:bg-gray-200'
      } ${props.rootClassName}`}
    >
      {props.children}
    </ul>
  )
}

export default Component
