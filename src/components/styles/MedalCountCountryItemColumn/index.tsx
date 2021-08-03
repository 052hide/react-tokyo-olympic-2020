import React from 'react'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <div className="gap-4 flex flex-row items-center py-2 px-4 text-left">
      {props.children}
    </div>
  )
}

export default Component
