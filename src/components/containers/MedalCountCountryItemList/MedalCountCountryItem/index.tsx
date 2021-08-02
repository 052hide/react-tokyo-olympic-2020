import React from 'react'
import { Props } from './type'
import FlexListRowLayout from 'components/layouts/FlexListRowLayout'

const Component = (props: Props): JSX.Element => {
  const colCount = 2

  return (
    <FlexListRowLayout
      colCount={colCount}
      rootClassName={props.rootClassName}
      gridTemplateColumns={`repeat(${colCount}, minmax(0, 1fr))`}
      onClick={() => props.onClick}
    >
      {props.children}
    </FlexListRowLayout>
  )
}

export default Component
