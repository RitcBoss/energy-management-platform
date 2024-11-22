'use client';

import React, { useState } from 'react'
import Image from 'next/image'

import search_icon from '@/public/search_icon.svg'
import clean_icon from '@/public/clean_icon.svg'
import acclean_icon from '@/public/acclean_icon.svg'
import { useRoomContext } from '@/app/Context/RoomContext';


const SearchRoom = () => {

    const { rooms, setFilteredRooms } = useRoomContext();

    const [searchTerm, setSearchTerm] = useState('');

    const searchRooms = (term) => {
        setSearchTerm(term);
        const filtered = rooms.filter(room => room.name.includes(term) || room.id.toString().includes(term));
        setFilteredRooms(filtered);
    };

    return (
        <>
            <form className="max-w-md mx-auto w-full md:w-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search room..."
                        value={searchTerm}
                        onChange={(e) => searchRooms(e.target.value)}
                        className="
                        outline-none 
                        search-cancel:appearance-noneoutline-none 
                        block 
                        w-full 
                        p-4 
                        py-1 
                        text-sm 
                        text-gray-900 
                        border-[1.6px] 
                        border-primary-bg-linear-blue 
                        rounded-sm 
                        bg-gray-50 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        dark:placeholder-primary-text-blue "
                        required />
                    <button type="submit" className="text-white absolute end-2.5 border-none bottom-2 font-medium rounded-lg text-sm ">
                        <Image src={search_icon} alt='search icon' />
                    </button>
                </div>
            </form>

            <div className='flex flex-row rounded bg-transparent border-2 border-primary-bg-linear-blue'>
                <button className='flex items-center justify-center px-2 bg-primary-bg-linear-blue'>
                    <Image src={clean_icon} alt='clean icon' />
                </button>
                <button className='flex items-center justify-center px-2'>
                    <Image src={acclean_icon} alt='clean icon' />
                </button>
            </div>
        </>
    )
}

export default SearchRoom