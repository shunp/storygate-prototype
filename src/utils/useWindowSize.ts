import * as React from 'react'

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : 340,
      height: isClient ? window.innerHeight : 200
    }
  }
  const [windowSize, setWindowSize] = React.useState(getSize)

  React.useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
