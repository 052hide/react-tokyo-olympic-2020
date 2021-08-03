import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <ul className="grid grid-cols-flexFirst4rem items-center" onClick={props.onClick}>
      {props.columnComponents.map((columnComponent, i) => (
        <li key={`columnComponent_${i}`}>{columnComponent}</li>
      ))}
    </ul>
  )
}

export default Component
