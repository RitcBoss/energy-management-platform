import React from 'react'
import Image from 'next/image'

import energy_icon from '@/public/energy_icon.svg'

const MenuEnergyIntensity = () => {
    return (
        <>
            <div className='flex flex-col w-full gap-2'>
                <div className='justify-between flex'>
                    <div className='flex flex-col items-start'>
                        <p className='lg:text-[10px] 2xl:text-[16px] font-semibold'>Energy Use Intensity</p>
                        <p className='lg:text-[8px] 2xl:text-[10px] font-light'>since Nov 1, 2023</p>
                    </div>
                    <div className='flex items-start px-2'>
                        <div className='bg-primary-bg-blue-light flex items-center lg:px-1 2xl:px-2 py-1 rounded-md border border-primary-bg-linear-blue'>
                            <p className='text-[10px] lg:text-[6px] 2xl:text-[8px] text-primary-text-blue'>BEC standard</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center bg-primary-text-red rounded-l-2xl py-[1px] text-[10px] md:text-[10px] 2xl:text-[14px] text-white font-semibold'>BEC</div>
                        <p className='text-[10px] md:text-[10px] text-primary-text-gray-dark font-semibold'>199</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center bg-primary-bg-orange-light py-[1px] text-[10px] md:text-[10px] 2xl:text-[14px] text-white font-semibold'>HEPS</div>
                        <p className='text-[10px] md:text-[10px] text-primary-text-gray-dark font-semibold'>160</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center bg-primary-bg-green-light py-[1px] text-[10px] md:text-[10px] 2xl:text-[14px] text-white font-semibold'>ECON</div>
                        <p className='text-[10px] md:text-[10px] text-primary-text-gray-dark font-semibold'>116</p>
                    </div>
                    <div className='flex flex-col relative'>
                        <div className='flex items-center justify-center bg-primary-bg-blue-dark rounded-r-2xl py-[1px] text-[10px] md:text-[10px] 2xl:text-[14px] text-white font-semibold'>
                            <Image
                                className='absolute left-[2px] lg:w-5 2xl:w-8'
                                src={energy_icon}
                                alt='energy icon' />
                            <p>EB</p>
                        </div>
                        <span className='flex w-full justify-between'>
                            <p className='text-[10px] text-primary-text-gray-dark font-semibold'>97</p>
                            <p className='text-[10px] text-primary-text-gray-dark font-semibold'>0</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-3 px-3 border-2 border-primary-text-blue rounded-lg'>
                <p className='text-[14px] md:text-[18px] 2xl:text-[24px] font-bold text-primary-text-blue'>36.43</p>
                <p className='text-[8px] md:text-[7px] 2xl:text-[9px] text-primary-text-gray-dark'>kWh / m2 / year</p>
            </div>
        </>
    )
}

export default MenuEnergyIntensity