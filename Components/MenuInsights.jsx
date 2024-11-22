import React from 'react'
import Image from 'next/image'

import energyview_icon from '@/public/energyview_icon.svg'
import boxleaf_icon from '@/public/boxleaf_icon.svg'
import information_icon from '@/public/information_icon.svg'
import boxenergy_icon from '@/public/boxenergy_icon.svg'
import boxco2_icon from '@/public/boxco2_icon.svg'
import boxforest_icon from '@/public/boxforest_icon.svg'

const MenuInsights = () => {
    return (
        <>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col items-start'>
                    <p className='text-[16px] md:text-[12px] 2xl:text-[16px] font-semibold'>Sustainability Insights</p>
                    <p className='text-[8px] md:text-[6px] 2xl:text-[8px] text-primary-text-gray-dark font-medium'>based on CHSBI (Cornell Hotel Sustainability Benchmarking Index)</p>
                </div>
                <div className='flex items-start justify-end'>
                    <div className='flex items-center text-primary-bg-blue-dark bg-primary-bg-blue-light rounded-sm px-1 border border-primary-text-blue'>
                        <p className='text-[8px] lg:text-[8px] 2xl:text-[14px] px-1 text-end '>View Energy</p>
                        <Image src={energyview_icon} alt='energyview icon' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[12px] w-full'>
                <div className='flex flex-col bg-gradient-to-r p-2 rounded-lg from-primary-bg-orange/15 to-primary-bg'>
                    <div className='flex lg:flex-col 2xl:flex-row justify-between'>
                        <div className='flex items-center justify-start gap-2'>
                            <Image
                                src={boxleaf_icon}
                                alt='boxleaf icon'
                                className='' />
                            <div className='flex flex-col items-start text-start'>
                                <p className='lg:text-[8px] 2xl:text-[14px] font-semibold text-primary-bg-orange'>GHG Emissions</p>
                                <p className='lg:text-[8px] 2xl:text-[10px] text-primary-text-gray-dark'>This Month</p>
                            </div>
                        </div>
                        <div className='flex items-end justify-end'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark' >CHSBI m.3</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-row items-end gap-2'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>kg-CO2 / occ. room</p>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-primary-bg-orange font-semibold'>23.56</p>
                        </div>
                        <div className='flex flex-row items-end gap-1'>
                            <p className='text-[8px]'>36th percentile, Thailand</p>
                            <Image src={information_icon} alt='information icon' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-gradient-to-r p-2 rounded-lg from-primary-bg-orange-light/15 to-primary-bg'>
                    <div className='flex lg:flex-col 2xl:flex-row justify-between'>
                        <div className='flex items-center justify-start gap-2'>
                            <Image src={boxenergy_icon} alt='boxleaf icon' />
                            <div className='flex flex-col items-start text-start'>
                                <p className='lg:text-[8px] 2xl:text-[14px]  font-semibold text-primary-bg-orange'>Energy Usage</p>
                                <p className='lg:text-[8px] 2xl:text-[10px]] text-primary-text-gray-dark'>This Month</p>
                            </div>
                        </div>
                        <div className='flex items-end justify-end'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark' >CHSBI m.5</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-row items-end gap-2'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>KWh / occ. room</p>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-primary-bg-orange font-semibold'>16,856.99</p>
                        </div>
                        <div className='flex flex-row items-end gap-1'>
                            <p className='text-[8px]'>24th percentile, Thailand</p>
                            <Image src={information_icon} alt='information icon' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-gradient-to-r p-2 rounded-lg from-primary-bg-linear-blue/15 to-primary-bg'>
                    <div className='flex'>
                        <div className='flex items-center justify-start gap-2'>
                            <Image src={boxco2_icon} alt='boxleaf icon' />
                            <div className='flex flex-col items-start text-start'>
                                <p className='lg:text-[8px] 2xl:text-[14px]  font-semibold text-primary-text-blue'>OC Emission Saved</p>
                                <p className='lg:text-[8px] 2xl:text-[10px] text-primary-text-gray-dark'>All Time</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-row items-end gap-2'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>kg-CO2</p>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-primary-text-blue font-semibold'>2,000,000</p>
                        </div>
                        <div className='flex flex-row items-end gap-1'>
                            <p className='text-[8px]'>0.4857 kg per kWh</p>
                            <Image src={information_icon} alt='information icon' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-gradient-to-r p-2 rounded-lg from-primary-bg-linear-greed/15 to-primary-bg'>
                    <div className='flex'>
                        <div className='flex items-center justify-start gap-2'>
                            <Image src={boxforest_icon} alt='boxleaf icon' />
                            <div className='flex flex-col items-start text-start'>
                                <p className='lg:text-[8px] 2xl:text-[14px]  font-semibold text-primary-text-green'>Equivalent Trees Planted</p>
                                <p className='lg:text-[8px] 2xl:text-[10px] text-primary-text-gray-dark'>All Time</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-row items-end gap-2'>
                            <p className='lg:text-[8px] 2xl:text-[12px] text-primary-text-gray-dark font-medium'>trees</p>
                            <p className='lg:text-[12px] 2xl:text-[16px] text-primary-text-blue font-semibold'>187,6</p>
                        </div>
                        <div className='flex flex-row items-end gap-1'>
                            <p className='text-[8px]'>33.5 kg per tree/year</p>
                            <Image src={information_icon} alt='information icon' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MenuInsights