import React from 'react'
import Image from 'next/image'

import graph from '@/public/graph.png'
import MenuEnergyIntensity from '../MenuEnergyIntensity'
import MenuOverview from '../MenuOverview'
import MenuInsights from '../MenuInsights'
import RealtimeGraph from '../RealtimeGraph'


const SlideOverview = () => {
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-row justify-between items-start bg-white rounded-lg p-2 gap-2 sm:gap-4 lg:gap-2 2xl:gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
                <MenuEnergyIntensity />
            </div>

            <div className='flex flex-row justify-between items-start bg-white rounded-lg p-2 py-3 gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
                <MenuOverview />
            </div>
            <div className='flex flex-col justify-between items-start bg-white rounded-lg p-2 py-3 gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
                <MenuInsights/>
            </div>
            <div className='flex flex-col justify-between items-start bg-white rounded-lg p-2 py-3 gap-4 shadow-lg shadow-primary-text-gray-dark/10'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col items-start'>
                        <p className='lg:text-[10px] 2xl:text-[16px] font-semibold'>Power Consumption</p>
                    </div>
                    <div className='flex items-start justify-end'>
                        <div className='flex items-center '>
                            <p className='lg:text-[8px] 2xl:text-[12px] px-1 text-end text-primary-text-gray-dark'>since Jan, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <Image src={graph} alt='graph'/>
                </div>
            </div>
        </div>
    )
}

export default SlideOverview