import * as React from 'react'
import { css } from '@emotion/core'

export const LoginTitleLine: React.FC = ({ children }) => {
  return (
    <>
      <div className="flex justify-center pt-10 pb-4">{children}</div>
      <div className="border-white border-solid border-2 mx-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
    </>
  )
}

export const RegisterTitleLine: React.FC = ({ children }) => {
  return (
    <>
      <div className="flex justify-center pt-10 pb-4">{children}</div>
      <div className="border-white border-solid border-2 mx-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
    </>
  )
}
