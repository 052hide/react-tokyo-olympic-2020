import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <ul>
      <li>{props.headerComponent}</li>
      {props.bodyComponents.map((bodyComponent, i) => (
        <li key={`bodyComponent_${i}`} className="border-b">
          {bodyComponent}
        </li>
      ))}
    </ul>
  )
}

export default Component
