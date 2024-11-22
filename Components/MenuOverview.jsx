import React from 'react'
import Image from 'next/image'

import download_icon from '@/public/download_icon.svg'
import analytic_icon from '@/public/analytic_icon.svg'
import energyview_icon from '@/public/energyview_icon.svg'

const MenuOverview = () => {
    return (
        <>
            <div className='flex flex-col w-full gap-3'>
                <div className='flex justify-between items-center'>
                    <p className='lg:text-[10px] 2xl:text-[16px] font-semibold'>
                        Monthly Overview
                    </p>
                    <div className='flex flex-row items-center gap-3'>
                        <p className='lg:text-[8px] 2xl:text-[10px] font-light'>since Nov 1, 2023</p>
                        <button className='flex items-center px-3 py-2 bg-primary-bg-linear-blue rounded-md gap-2'>
                            <Image src={download_icon} alt='download icon' />
                            <p className='text-white hidden lg:text-[10px] lg:hidden 2xl:flex 2xl:text-[13px] font-semibold'>Download Report</p>
                        </button>
                    </div>
                </div>
                <div className='relative grid grid-cols-4 items-end bg-gradient-to-r from-primary-bg-linear-greed via-primary-bg-linear-blue to-primary-bg-linear-greed p-2 border border-primary-bg-blue-dark rounded-lg'>
                    <div className='flex flex-col col-span-2 items-start justify-start gap-1 h-full'>
                        <p className='lg:text-[12px] 2xl:text-[16px] text-white font-semibold'>Saving</p>
                        <div className='flex lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2'>
                            <p className='lg:text-[10px] 2xl:text-[12px] text-white font-thin'>Accumulated</p>
                            <p className='text-[8px] text-primary-bg-blue-dark font-thin bg-blue-300 rounded-sm px-1 border border-primary-text-blue'>based on IPMVP standard</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-white font-semibold'>156,856.99</p>
                            <p className='lg:text-[10px] 2xl:text-[13px] text-white font-extralight'>THB</p>
                        </div>
                        <p className='lg:text-[7px] 2xl:text-[10px] text-primary-text-greensky font-semibold'>25.1%of xxx,xxx. THB</p>
                    </div>
                    <div className='absolute w-full flex items-center justify-center'>
                        <div className='w-[1px] h-[50px] col-span-1 bg-primary-bg-blue-dark/80'></div>
                    </div>
                    <div className='flex pl-2 flex-col col-span-2 items-start justify-start gap-1 h-full'>
                        <div className='flex w-full text-end justify-end'>
                            <div className='flex text-primary-bg-blue-dark bg-blue-300 rounded-sm px-1 border border-primary-text-blue'>
                                <p className='lg:text-[8px] 2xl:text-[14px] px-1 text-end items-center justify-center '>View Analytics</p>
                                <Image className='w-4' src={analytic_icon} alt='analytic icon' />
                            </div>
                        </div>
                        <div className='flex lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2'>
                            <p className='lg:text-[10px] 2xl:text-[12px] text-white font-thin'>This month</p>
                            <p className='text-[8px] text-primary-bg-blue-dark font-thin bg-blue-300 rounded-sm px-1 border border-primary-text-blue'>standard disclaimer</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-white font-semibold'>156,856.99</p>
                            <p className='lg:text-[10px] 2xl:text-[13px] text-white font-extralight'>THB</p>
                        </div>
                        <p className='lg:text-[7px] 2xl:text-[10px] text-primary-text-greensky font-semibold'>25.1%of xxx,xxx. THB</p>
                    </div>
                </div>
                <div className='relative grid grid-cols-4 items-end rounded-lg p-2 shadow shadow-primary-text-gray-dark/40'>
                    <div className='flex flex-col col-span-2 items-start justify-start gap-1'>
                        <p className='lg:text-[12px] 2xl:text-[16px] text-primary-text-blue font-semibold'>Energy</p>
                        <div className='flex items-center'>
                            <p className='lg:text-[10px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>Total Consumption</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-black font-semibold'>156,856.99</p>
                            <p className='lg:text-[10px] 2xl:text-[13px] text-primary-text-gray-dark font-extralight'>KWh</p>
                        </div>
                        <p className='lg:text-[7px] 2xl:text-[10px] text-primary-text-greensky font-semibold'>+24.45% compare to prev.month</p>
                    </div>
                    <div className='absolute w-full flex items-center justify-center'>
                        <div className='w-[1px] h-[50px] col-span-1 bg-primary-bg-blue-dark/80'></div>
                    </div>
                    <div className='flex flex-col pl-2 col-span-2 items-start justify-start gap-1 h-full'>
                        <div className='flex w-full text-end justify-end'>
                            <div className='flex items-center text-primary-bg-blue-dark bg-primary-bg-blue-light rounded-sm px-1 border border-primary-text-blue'>
                                <p className='lg:text-[8px] 2xl:text-[14px] px-1 text-end '>View Energy</p>
                                <Image src={energyview_icon} alt='energyview icon' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='lg:text-[10px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>Total Savings</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-black font-semibold'>156,856.99</p>
                            <p className='lg:text-[10px] 2xl:text-[13px] text-primary-text-gray-dark font-extralight'>KWh</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOverview