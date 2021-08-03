import React from 'react'
import BaseImage from '~/components/commons/BaseImage'
import { Props } from './type'

const Component = (props: Props): JSX.Element => {
  return (
    <div className="grid w-full" style={{ gridTemplateColumns: '4rem 1fr' }}>
      <div className="flex flex-row justify-center items-center">
        <BaseImage
          src={props.imageSrc}
          alt={props.name}
          height="1.5rem"
          width="auto"
        />
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default Component
