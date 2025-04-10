import React from 'react'
import Logo from '../../assets/logo-header.png'
import SearchIcon from '../../assets/icons/search-icon.svg'

const Header = () => {
  return (
    <div>
     <div className="px-[20px] max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
        <a className='max-w-[180px] block' href="#">
            <img src={Logo} alt="" />
        </a>

        </div>
     </div>
    </div>
  )
}

export default Header
