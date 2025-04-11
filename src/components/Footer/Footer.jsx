import React from 'react'
import Logo from '../../assets/logo-header.png'
import fb from '../../assets/icons/fb.svg'
import mail from '../../assets/icons/mail.svg'
import insta from '../../assets/icons/insta.svg'

const Footer = () => {
  return (
    <div className='bg-[#EFEFEF] max-md:pb-[20px]'>
      <div className="px-[20px] max-w-[1600px] mx-auto ">
        <div className="flex items-center justify-between max-md:flex-col">
        <img className='w-[180px] max-md:w-[120px]' src={Logo} alt="" />
        <div className="flex gap-[16px] max-md:text-[14px]">
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="flex gap-[16px] max-md:gap-[12px] max-md:pt-[12px]">
            <a href="#"> <img src={mail} alt="" /></a>
            <a href="#"> <img src={fb} alt="" /></a>
            <a href="#"> <img src={insta} alt="" /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
