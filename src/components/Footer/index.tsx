import * as React from 'react'
import { Logo } from 'src/components/Auth/top'
import { Montserrat } from '../SGText'

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex items-center justify-center flex-col flex-wrap bg-gradient-b-blue-pink-purple p-2 bottom-0 w-full mt-4"
    >
      <Logo className="text-white text-3xl">StoryGate</Logo>
      <div className="flex flex-row my-6">
        <div className="mx-4">
          <Montserrat className="text-white opacity-50 text-lg font-bold">About</Montserrat>
          <Montserrat className="text-white opacity-50 text-lg font-bold">Company</Montserrat>
          <Montserrat className="text-white opacity-50 text-lg font-bold">FAQ</Montserrat>
        </div>
        <div className="mx-4">
          <Montserrat className="text-white opacity-50 text-lg font-bold">Privacy Policy</Montserrat>
          <Montserrat className="text-white opacity-50 text-lg font-bold">Contact</Montserrat>
          <Montserrat className="text-white opacity-50 text-lg font-bold">Recruit</Montserrat>
        </div>
      </div>
      <Montserrat className="text-white text-lg font-bold opacity-75 mb-2">© 2020 Asymmatrix OÜ</Montserrat>
    </div>
  )
}

export default Footer
