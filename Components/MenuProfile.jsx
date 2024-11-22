'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import clock_icon from '@/public/clock_icon.svg'
import notification_icon from '@/public/notification_icon.svg'
import dropdown_icon from '@/public/dropdown_icon.svg'
import account_icon from '@/public/account_icon.svg'
import cloud_icon from '@/public/cloud_icon.png'

import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const MenuProfile = () => {

    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);
    
    if (!currentTime) return null;
    
    const formatTime = (time) => time.toLocaleTimeString('en-US', { hour12: false });
    const formatDate = (date) => date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });

    
    return (
        <>
            <div className='flex flex-row justify-center items-center p-2'>
                <div className='flex items-center'>
                    <span className='flex items-center justify-center'>
                        <Image className='w-10' src={cloud_icon} alt='cloud icon' />
                    </span>
                    <div className='flex-col px-[12px]'>
                        <p className='text-[8px] lg:text-[8px] 2xl:text-[10px] font-bold'>Outdoor,Provice</p>
                        <p className='text-[8px] lg:text-[8px] 2xl:text-[10px]'>Rainy</p>
                    </div>
                    <div className='flex items-center justify-center relative'>
                        <p className='lg:text-[23px] 2xl:text-[25px] font-semibold text-primary-text-blue'>31</p>
                        <div className='absolute bottom-6 left-8 text-primary-text-blue'>
                            <RiCheckboxBlankCircleLine className='text-[8px] font-bold' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-primary-text-gray w-[1px] h-[20px]' />
            <div className='flex flex-row gap-2 items-center'>
                <span>
                    <Image src={clock_icon} alt='clock icon' />
                </span>
                <p className='text-primary-text-blue text-[12px] lg:text-[12px] 2xl:text-[14px] w-[100px]'>{formatDate(currentTime)}</p>
                <p className='text-primary-text-blue text-[12px] lg:text-[12px] 2xl:text-[14px] w-[66px]'>{formatTime(currentTime)}</p>
            </div>

            <div className='bg-primary-text-gray w-[1px] h-[20px]' />
            <div className='hidden sm:flex'>
                <Image src={notification_icon} alt='notification icon' />
            </div>

            <div className='flex flex-row gap-3 items-center text-primary-text-blue'>
                <div>
                    <Image src={account_icon} alt='account icon' />
                </div>
                <p className='text-[12px] lg:text-[16px] font-medium'>Altotech</p>
                <p>
                    <Image src={dropdown_icon} alt='dropdown icon' />
                </p>
            </div>
        </>
    )
}

export default MenuProfile