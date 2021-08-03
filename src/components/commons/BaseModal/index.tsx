import React, { MouseEvent, useRef } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import useDidMount from '~/customHooks/useDidMount'
import { Props } from './type'

/**
 * モーダルの下の要素のスクロールを元に戻す
 **/
const resetBodyStyle = () => {
  document.body.style.overflow = 'unset'
}

/**
 * モーダルの下の要素をスクロールできなくする
 **/
const hiddenBodyStyle = () => {
  // did mount
  document.body.style.overflow = 'hidden'

  // will unmount
  return () => {
    resetBodyStyle()
  }
}

export const Component = (props: Props): JSX.Element => {
  useDidMount(hiddenBodyStyle)
  const outsideRef = useRef(null)

  const onClick = () => {
    if (props.close) {
      props.close()
    }
  }

  /**
   * モーダルの外をクリックしたときにモーダルを閉じる
   **/
  const onClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === outsideRef.current) {
      onClick()
    }
  }

  return (
    <div
      ref={outsideRef}
      className="fixed top-0 left-0 bottom-0 flex flex-col justify-end h-full w-full bg-black bg-opacity-50 sm:flex-row"
      onClick={onClickOutside}
    >
      <div className="grid grid-rows-modal h-5/6 bg-white rounded-t-lg sm:h-full sm:w-1/2 sm:rounded-t-none sm:rounded-l-lg">
        <div className="flex flex-row justify-end items-center px-2 shadow sm:justify-start">
          <button
            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200"
            onClick={onClick}
          >
            <VscChromeClose />
          </button>
        </div>
        <div className="overflow-y-auto">{props.children}</div>
      </div>
    </div>
  )
}

export default Component
