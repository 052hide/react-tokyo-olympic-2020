import { useEffect } from 'react'

const useDidMount = (
  effectCallBack: Parameters<typeof useEffect>[0]
): ReturnType<typeof useEffect> => {
  return useEffect(effectCallBack, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useDidMount
