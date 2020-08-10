import * as React from 'react'

const NavWrapper = ({ children }) => {
  return (
    <nav id="header" className="flex items-center justify-between flex-wrap p-2 w-full top-0 fixed z-20 bg-transparent">
      {children}
    </nav>
  )
}

export default NavWrapper
