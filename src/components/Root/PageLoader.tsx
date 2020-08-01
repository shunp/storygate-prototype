import * as React from 'react'
import 'src/styles/loader.css'

const onLoad = () => {
  const doc = document.getElementById('loader-wrapper')
  doc?.classList.remove('opacity-100')
  doc?.classList.add('transition')
  doc?.classList.add('delay-1000')
  doc?.classList.add('ease-in-out')
  doc?.classList.add('duration-2000')
  doc?.classList.add('opacity-0')
  doc?.classList.remove('z-01')
  doc?.classList.add('z-50')
  setTimeout(() => {
    doc?.classList.remove('z-50')
    doc?.classList.add('z-01')
  }, 2500)
}

const PageLoader = () => {
  React.useEffect(() => {
    onLoad()
  }, [])
  return (
    <div id="loader-wrapper" className="loader-wrapper">
      <span className="loader">
        <span className="loader-inner" />
      </span>
    </div>
  )
}

export default PageLoader
