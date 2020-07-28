import * as React from 'react'
import NavWrapper from './NavWrapper'
import LoginUserIcon from './LoginUserIcon'
import HeaderLogo from './HeaderLogo'

const HeaderBase = () => {
  return (
    <NavWrapper>
      <LoginUserIcon />
      <HeaderLogo />
      <button type="button" className="inline-block text-sm px-2 py-2 leading-none text-black border-white border rounded">
        ...
      </button>
    </NavWrapper>
  )
}

export default HeaderBase
