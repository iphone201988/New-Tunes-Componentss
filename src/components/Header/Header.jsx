import React from 'react'
import Logo from '../../assets/logo-header.png'
import SearchIcon from '../../assets/icons/search-icon.svg'
import menu from '../../assets/icons/menu.svg'

const Header = () => {
  return (
    <div>
     <div className="px-[20px] max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
        <a className='max-w-[180px] block max-lg:max-w-[120px]' href="#">
            <img src={Logo} alt="" />
        </a>
        <div className="menu flex gap-[30px] max-lg:gap-[12px] max-md:hidden">
            <a className='active' href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div className="flex items-center justify-between gap-[20px] max-md:gap-[12px]">
            <button className='btn-pri'>Join</button>
            <button className='w-[50px] cursor-pointer max-lg:w-auto'>
                <img src={SearchIcon} alt="" />
            </button>
            <button className='hidden max-md:block'><img src={menu} alt="" /></button>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Header
