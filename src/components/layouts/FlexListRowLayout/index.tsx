import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <li
      className={`grid grid-cols-${props.colCount} items-center ${props.rootClassName}`}
      style={{ gridTemplateColumns: props.gridTemplateColumns }}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  )
}

export default Component
