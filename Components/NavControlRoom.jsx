"use client"

import React from 'react'

import { useRoomContext } from '@/app/Context/RoomContext'
import cross_icon from '@/public/cross_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const NavControlRoom = () => {
    const { selectedRoom } = useRoomContext();

    return (
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-6'>
                <h3 className='font-bold lg:text-[16px] 2xl:text-[22px]'>Room {selectedRoom.name}</h3>
                <div className='flex bg-white shadow-sm rounded-full gap-2 p-1 cursor-pointer'>
                    <p
                        className='
                        flex
                        items-center
                        lg:text-[10px]
                        2xl:text-[14px] 
                        font-semibold 
                        text-primary-bg
                        bg-gradient-to-r 
                        from-primary-bg-linear-sky
                        to-primary-bg-linear-blue
                        shadow-md shadow-primary-bg-linear-sky/50
                        rounded-full 
                        px-6 
                        lg:py-1
                        2xl:py-3
                        '>
                        Monitor & Control</p>
                    <p
                        className='
                        flex
                        items-center
                        lg:text-[10px]
                        2xl:text-[14px] 
                        font-semibold
                        text-primary-text-gray-dark
                        rounded-full 
                        px-6 
                        lg:py-1
                        2xl:py-3
                    '>Device Activity</p>
                    <p
                        className='
                        flex
                        items-center
                        lg:text-[10px]
                        2xl:text-[14px] 
                        font-semibold
                        text-primary-text-gray-dark
                        rounded-full 
                        px-6 
                        lg:py-1
                        2xl:py-3
                        '>
                        Apps</p>

                </div>
            </div>
            <div className='flex items-start justify-center'>
                <Link href={"/"}>
                    <Image src={cross_icon} alt='cross icon' />
                </Link>
            </div>
        </div>
    )
}

export default NavControlRoom