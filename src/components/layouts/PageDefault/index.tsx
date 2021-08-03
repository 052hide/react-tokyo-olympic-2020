import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      {props.children}
    </div>
  )
}

export default Component
