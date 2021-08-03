import React from 'react'
import { Props } from './type'

export const Component = (props: Props): JSX.Element => {
  return (
    <div style={{ width: props.width, height: props.height }}>
      <img src={props.src} alt={props.alt} className="max-h-full max-w-full" />
    </div>
  )
}

export default Component
