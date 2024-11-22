"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import logo from '@/public/logo.png'
import analytic_icon from '@/public/analytic_icon.svg'
import dashboard_icon from '@/public/dashboard_icon.svg'
import system_icon from '@/public/system_icon.svg'
import building_icon from '@/public/building_icon.svg'
import report_icon from '@/public/report_icon.svg'
import setting_icon from '@/public/setting_icon.svg'
import Link from 'next/link'

const Slidebar = () => {

  const [menu, setMenu] = useState("Dashboard")

  const menuItems = [
    {
      icon: dashboard_icon,
      label: 'Dashboard'
    },
    {
      icon: system_icon,
      label: 'System'
    },
    {
      icon: analytic_icon,
      label: 'Analytic'
    },
    {
      icon: building_icon,
      label: 'Building Insights'
    },
    {
      icon: report_icon,
      label: 'Report'
    },
    {
      icon: setting_icon,
      label: 'Setting'
    },
  ]

  return (
    <div className='flex-col top-0 left-0 h-screen m-0 bg-white pt-[40px] border-r-2 z-50 hidden sm:hidden lg:flex'>
      <Link href={"/"}>
        <div className='flex justify-center items-center mb-[80px] w-[72px]'>
          <Image className='w-9' src={logo} alt='altotech logo' />
        </div>
      </Link>
      <div className='flex flex-col items-center w-[72px] cursor-pointer gap-2'>

        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => { setMenu(item.label) }}
            className='relative flex flex-col items-center justify-center w-full h-[72px]'>
            <Image
              src={item.icon}
              alt='dashboard icon'
              className='z-50' />
            <p className='text-[10px] text-center font-semibold text-primary-text-blue mt-2 z-50'>{item.label}</p>
            {menu === item.label
              ? <div className='absolute h-full w-full border-l-[5px] border-primary-bg-linear-blue bg-gradient-to-r from-primary-bg-blue-light/40 to-primary-bg-linear-lightgray/40 z-0' />
              : " "}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slidebar