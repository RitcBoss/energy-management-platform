import React from 'react'
import Image from 'next/image'

import plus_icon from '@/public/plus_icon.svg'
import minus_icon from '@/public/minus_icon.svg'

const ConditionerControl = () => {
    return (
        <div className='flex flex-col justify-between items-start bg-white rounded-lg p-2 py-3 gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col items-start'>
                    <p className='lg:text-[12px] 2xl:text-[16px] font-semibold'>Air Conditioner Control</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='lg:text-[10px] 2xl:text-[14px] text-primary-text-gray-dark'>Status</p>
                    <p className='lg:text-[10px] 2xl:text-[12px] text-primary-text-blue'>On</p>
                    <div
                        className='flex container cursor-pointer'>
                        <span className="relative flex bg-primary-text-blue border-2 border-primary-text-blue transition duration-600 h-[18px] w-[30px] rounded-full">
                            <button
                                className='absolute transition duration-300 translate-x-[0.75rem] h-[14px] w-[14px] rounded-full bg-white' />
                        </span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[12px] w-full'>
                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-start text-start gap-2'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Set Temperature</p>
                            <div className='flex gap-[4px] items-end'>
                                <p className='lg:text-[14px] 2xl:text-[18px] text-black font-semibold'>25</p>
                                <p className='lg:text-[10px] 2xl:text-[14px] text-primary-text-gray-dark '>°C</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start text-start gap-1'>
                            <button className='bg-primary-bg-blue-light/50 lg:p-[2px] xl:p-1 rounded-sm border border-primary-text-blue'>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                            <button className='bg-primary-bg-blue-light/50 lg:p-[2px] xl:p-1 rounded-sm border border-primary-text-blue'>
                                <Image src={minus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-start'>
                        <div className='flex flex-col items-start text-start gap-2'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Room Temperature</p>
                            <div className='flex gap-[4px] items-end'>
                                <p className='lg:text-[14px] 2xl:text-[18px] text-black font-semibold'>25</p>
                                <p className='lg:text-[10px] 2xl:text-[14px] text-primary-text-gray-dark '>°C</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center '>
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Mode Control</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 bg-gray-300/20 rounded-md text-primary-text-gray-dark lg:text-[10px] 2xl:text-[14px]'>
                        <button>Off</button>
                        <button className='rounded-md border border-primary-text-blue text-primary-text-blue font-semibold py-[3px]'>Cool</button>
                        <button>Dry</button>
                        <button>fan</button>
                    </div>
                </div>

                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center '>
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Fan Speed</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 bg-gray-300/20 rounded-md text-primary-text-gray-dark lg:text-[10px] 2xl:text-[14px]'>
                        <button>Auto</button>
                        <button className='rounded-md border border-primary-text-blue text-primary-text-blue font-semibold py-[3px]'>Low</button>
                        <button>Med</button>
                        <button>High</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConditionerControl