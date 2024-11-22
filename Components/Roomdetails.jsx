import React from 'react'
import Image from 'next/image'

import energyview_icon from '@/public/energyview_icon.svg'
import circleclean_icon from '@/public/circleclean_icon.svg'
import circlepeople_icon from '@/public/circlepeople_icon.svg'
import circlestay_icon from '@/public/circlestay_icon.svg'
import circlehumidity_icon from '@/public/circlehumidity_icon.svg'
import { useRoomContext } from '@/app/Context/RoomContext'

const Roomdetails = () => {
    const { selectedRoom} = useRoomContext();

    return (
        <div className='flex flex-col justify-between items-start bg-white rounded-lg p-2 py-3 gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col items-start'>
                    <p className='lg:text-[12px] 2xl:text-[16px] font-semibold'>Room Details</p>

                </div>
                <div className='flex items-start justify-end'>
                    <div className='flex items-center text-primary-bg-blue-dark bg-primary-bg-blue-light rounded-sm px-1 border border-primary-text-blue'>
                        <p className='lg:text-[10px] 2xl:text-[14px] px-1 text-end '>View Analytics</p>
                        <Image src={energyview_icon} alt='energyview icon' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[12px] w-full'>
                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-start gap-2'>
                        <Image src={circleclean_icon} alt='boxleaf icon' />
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Cleaning Status</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center bg-gray-300/20 rounded-sm py-1 gap-3'>
                        <p className='lg:text-[14px] 2xl:text-[18px] text-primary-text-blue font-semibold'>{selectedRoom.category}</p>
                        <p className='lg:text-[10px] 2xl:text-[12px] text-primary-text-blue'>Vacant Clean</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-start gap-2'>
                        <Image src={circlepeople_icon} alt='boxleaf icon' />
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>People Status</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center bg-gray-300/20 rounded-sm py-1'>
                        <p className='lg:text-[14px] 2xl:text-[18px] text-primary-text-blue font-semibold'>{selectedRoom.status}</p>
                    </div>
                </div>


                <div className='flex flex-col gap-1 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-start gap-2'>
                        <Image src={circlestay_icon} alt='boxleaf icon' />
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Comfort level</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between py-2 gap-2'>
                        <p className='lg:text-[16px] 2xl:text-[18px] text-primary-bg-orange font-semibold'>0.65</p>
                        <div className='text-primary-bg-blue-dark bg-primary-bg-blue-light rounded-sm px-1 py-1 border border-primary-text-blue'>
                            <p className='text-[10px]'>clo zone</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-1 p-2 rounded-lg bg-white drop-shadow-xl'>
                    <div className='flex items-center justify-start gap-2'>
                        <Image src={circlehumidity_icon} alt='boxleaf icon' />
                        <div className='flex flex-col items-start text-start'>
                            <p className='lg:text-[10px] 2xl:text-[12px] font-normal text-black'>Humidity</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between py-2 gap-2'>
                        <p className='lg:text-[14px] 2xl:text-[18px] text-black font-semibold'>60°F</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roomdetails