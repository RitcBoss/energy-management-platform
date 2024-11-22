import Image from 'next/image'
import React from 'react'

import ac_icon from '@/public/ac_icon.svg'

const MenuOccupancy = () => {
    return (
        <div className='flex flex-col flex-auto '>
            <div className='flex flex-col'>
                <p className='text-[13px]'>People Occupancy</p>
                <div className='h-[12px] w-full bg-primary-bg-green-light rounded-md my-1 overflow-hidden'>
                    <div className='bg-primary-bg-linear-blue w-3/5 h-full'></div>
                </div>
            </div>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='grid grid-cols-4 justify-between items-center w-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='bg-primary-bg-linear-blue lg:w-[14px] lg:h-[14px] 2xl:w-[20px] h-[20px] rounded-md' />
                        <p className='text-[10px] 2xl:text-[13px]'>Occupied rooms</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-[10px] 2xl:text-[16px] font-semibold text-primary-text-blue'>84</p>
                        <p className='text-[10px] 2xl:text-[13px]'>rooms</p>
                        <p className='text-[10px] 2xl:text-[14px] text-primary-text-blue'>62%</p>
                    </div>
                    <div className='flex flex-row items-center justify-end gap-2 col-span-2'>
                        <div className='bg-primary-bg-linear-greed lg:w-[14px] lg:h-[14px] 2xl:w-[20px] h-[20px] rounded-md' />
                        <p className='text-[10px] 2xl:text-[13px]'>Unoccupied room</p>
                        <p className='text-[10px] 2xl:text-[16px]  font-semibold text-primary-text-blue'>40</p>
                        <p className='text-[10px] 2xl:text-[13px]'>rooms</p>
                        <p className='text-[10px] 2xl:text-[14px]  text-primary-text-blue'>38%</p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='grid grid-cols-4 justify-between items-center w-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <Image src={ac_icon} alt='ac icon' className='w-5' />
                        <p className='text-[10px] lg:text-[10px] 2xl:text-[13px] text-primary-text-blue'>AC On</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-[10px] 2xl:text-[16px]  font-semibold text-primary-text-red'>34</p>
                        <p className='text-[10px] 2xl:text-[13px]'>rooms</p>
                        <p className='text-[10px] 2xl:text-[14px]  text-primary-text-red'>54%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuOccupancy