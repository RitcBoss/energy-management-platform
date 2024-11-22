"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import altotech_icon from '@/public/altotech_icon.png'
import turnoff_icon from '@/public/turnoff_icon.svg'

const MenuSelfDriving = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className={`
                overflow-hidden 
                relative 
                flex 
                flex-row 
                flex-auto 
                px-2 
                py-2 
                pb-[16px] 
                bg-gradient-to-r 
                ${!isToggled
                ? "from-primary-text-blue to-primary-text-green border-primary-bg-blue-dark transition duration-300"
                : "bg-primary-text-gray-dark/30 from-primary-text-gray-dark to-from-primary-text-gray-dark/50 border-primary-text-gray-dark transition duration-300"}
                rounded-lg 
                gap-8 
                border
                shadow-inner`}>

            <div className='flex flex-col gap-[1px] relative'>
                <p className='text-[6px] 2xl:text-[8px] text-white font-extralight'>Self-Driving</p>
                <p className='text-[14px] 2xl:text-[16px] font-medium text-white'>Running</p>
                <div className='flex absolute top-[-2px] '>
                    <div
                        onClick={handleToggle}
                        className={`
                           cursor-pointer
                           bg-gradient-to-r
                           ${!isToggled
                                ? "bg-primary-bg-blue-dark  from-primary-bg-linear-white/60  to-primary-bg-linear-blue border-primary-bg-blue-dark transition duration-300"
                                : "bg-primary-text-gray-dark/70 from-gray-600 to-primary-text-gray-dark border-primary-text-gray-dark transition duration-300 shadow-btn-off "}
                           relative 
                           flex 
                           items-center 
                           justify-center 
                           border-[1.5px] 
                           w-[100px] 
                           h-[26px] 
                           rounded-full 
                           top-[40px] 
                           shadow-inner`}>
                        <button
                            className={`
                            absolute 
                            flex 
                            items-center 
                            justify-center 
                            ${isToggled
                                    ? 'transition duration-300 translate-x-[2.25rem]'
                                    : 'transition duration-300 translate-x-[-2.25rem]'} 
                            w-[20px] 
                            h-[20px] 
                            bg-white 
                            rounded-full `}>
                            <Image src={turnoff_icon} alt='turnoff icon' />
                        </button>
                        <p className='text-white text-[9px] font-semibold'>{isToggled ? "Turn On" : "Turn Off"}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 pr-10'>
                <div className='flex flex-row items-center gap-5'>
                    <div className='flex gap-2 items-center'>
                        <p className='sm:text-[10px] 2xl:text-[12px] font-extralight text-primary-text-gray'>For</p>
                        <p className='flex items-center justify-center bg-white/20 rounded-md px-[4px] gap-1 text-white font-extralight'>
                            <span className='sm:text-[10px] 2xl:text-[16px] font-medium'>107</span>/<span className='text-[8px] 2xl:text-[12px]'>112 rooms</span>
                        </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='text-[12px] font-extralight text-primary-text-gray'>Time</p>
                        <div className='flex items-center gap-1'>
                            <p className='flex items-center justify-center bg-white/20 rounded-sm px-[6px] gap-1 text-white font-extralight'>
                                <span className='text-[16px] font-medium'>12</span>
                            </p>
                            <p className='text-[12px] text-white'>h</p>
                            <p className='flex items-center justify-center bg-white/20 rounded-sm px-[6px] gap-1 text-white font-extralight'>
                                <span className='text-[16px] font-medium'>12</span>
                            </p>
                            <p className='text-[12px] text-white'>m</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full' >
                    <div className='flex flex-row items-center justify-end pr-5 gap-3'>
                        <div className='flex gap-2 items-center '>
                            <p className='text-[10px] font-extralight text-white'>Turned On by</p>
                            <div className='flex items-end gap-1'>
                                <p className='flex items-center justify-center bg-white/20 rounded-md px-[4px]  text-white font-extralight'>
                                    <span className='text-[10px] font-extralight'>Jay</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-normal'>
                            <p className='text-[10px] font-extralight text-white'>23-10-2023 11:59 AM</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='absolute top-[-15px] right-[-30px] w-[82px] rotate-[-20deg] flex items-center justify-center'>
                <Image src={altotech_icon} alt='altotech icon' />
            </div>
        </div>
    )
}

export default MenuSelfDriving