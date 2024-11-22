import React from 'react'
import MenuSelfDriving from '../MenuSelfDriving'
import MenuOccupancy from '../MenuOccupancy'
import Manageroom from './Manageroom'
import SlideOverview from './SlideOverview'

const Maincontent = () => {
    return (
        <div className='sm:flex flex-col lg:grid 2xl:grid grid-cols-7 gap-[12px] p-[12px] h-full '>
            <div className='flex flex-col col-span-5 cursor-default gap-[12px]'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 lg:gap-6 2xl:gap-10'>
                    <MenuSelfDriving />
                    <MenuOccupancy />
                </div>
                <Manageroom />
            </div>
            <div className='col-span-2 pt-3 md:p-0'>
                <SlideOverview />
            </div>
        </div>
    )
}

export default Maincontent