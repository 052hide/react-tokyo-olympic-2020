import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <li
      className={`gap-4 flex flex-row items-center py-2 px-4 text-left ${
        props.isHeader ? 'font-bold text-xs sm:text-sm' : 'text-sm sm:text-base'
      } ${
        props.isCenter
          ? 'justify-center text-center'
          : 'justify-start  text-left'
      }`}
    >
      {props.children}
    </li>
  )
}

export default Component
