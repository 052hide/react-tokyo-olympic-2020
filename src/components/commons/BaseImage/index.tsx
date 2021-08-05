import React from 'react'
import { Props } from './type'

export const Component = (props: Props): JSX.Element => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
    />
  )
}

export default Component
