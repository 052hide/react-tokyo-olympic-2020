import React from 'react'
import { Props } from './type'

const baseRowClassName = 'transition-colors duration-150'

const Component = (props: Props): JSX.Element => {
  return (
    <ul className="flex flex-col h-screen overflow-y-auto">
      <li className={`${baseRowClassName} sticky top-0 bg-gray-100 shadow-sm`}>
        {props.headerComponent}
      </li>
      {props.bodyComponents.map((bodyComponent, i) => (
        <li
          key={`bodyComponent_${i}`}
          className={`${baseRowClassName} cursor-pointer bg-white border-b hover:bg-gray-200`}
        >
          {bodyComponent}
        </li>
      ))}
    </ul>
  )
}

export default Component
