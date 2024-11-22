"use client"

import React, { useState } from 'react'
import MenuProfile from '../MenuProfile';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='flex-row flex w-full h-[72px] justify-between p-[12px]'>
      <div className='flex flex-row justify-center items-center gap-6 px-[8px]'>
        <h4 className='
        bg-gradient-to-r 
        from-primary-text-blue 
        to-primary-text-green 
        text-transparent 
        bg-clip-text
        hidden 
        sm:hidden
        lg:flex
        sm:text-[16px] 
        2xl:text-[24px] 
        font-semibold 
        '> Real-Time Dashboard </h4>

        <div className='flex-row gap-3 items-center justify-center hidden sm:hidden lg:flex'>
          <p className='sm:text-[10px] 2xl:text-[16px] font-semibold text-primary-text-gray-dark'>HERO</p>
          <div
            onClick={handleToggle}
            className='flex container cursor-pointer'>
            <span className=
              {`relative flex 
            ${!isToggled
                  ? 'bg-primary-text-blue border-2 border-primary-text-blue transition duration-600'
                  : 'bg-primary-text-gray-dark border-2 border-primary-text-gray-dark transition duration-400'} 
            h-[18px] 
            w-[30px] 
            rounded-full`}>

              <button
                className=
                {`absolute 
                ${!isToggled
                    ? 'transition duration-300 translate-x-[0.75rem]'
                    : 'transition duration-300 translate-x-[0rem]'} h-[14px] w-[14px] rounded-full bg-white`} />
            </span>
          </div>
          <p className='
              bg-gradient-to-r 
              from-primary-text-blue 
              to-primary-text-green 
              text-transparent 
              bg-clip-text 
              sm:text-[10px] 
              2xl:text-[16px] 
              font-semibold
              '>CERO</p>
        </div>
      </div>

      <div className='
          flex 
          flex-row 
          justify-between
          lg:justify-center 
          items-center 
          bg-white
          w-full
          lg:w-auto 
          lg:gap-6 
          2xl:gap-10 
          px-[8px] 
          rounded-md 
          shadow-lg 
          shadow-primary-text-gray-dark/10'>

        <MenuProfile />

      </div>
    </div>
  )
}

export default Header