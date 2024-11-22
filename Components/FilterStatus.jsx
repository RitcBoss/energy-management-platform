'use client';

import React from 'react'

import { useRoomContext } from '@/app/Context/RoomContext'



const FilterStatus = () => {
    const { countRoomsByStatus } = useRoomContext();

    const ROOM_STATUS = ['Occupied', 'Unoccupied', 'Paused'];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Occupied':
                return 'border-primary-text-blue border bg-primary-bg-blue-light text-primary-text-blue';
            case 'Unoccupied':
                return 'border-primary-bg-green-dark border bg-primary-bg-green-light text-white';
            case '':
                return 'bg-primary-bg-linear-lightgray border-dashed border border-primary-bg-green-dark/40 text-primary-text-gray-dark';
            case 'Paused':
                return 'bg-primary-bg-orange-light/50 border border-primary-bg-orange-light text-primary-bg-orange';
            default:
                return 'bg-gray-100 border-gray-500 text-gray-500';
        }
    };


    return (
        [ROOM_STATUS.map((status) => (
            <div key={status} className={`flex items-center justify-center text-center gap-2 ${getStatusStyle(status)} border-[1px] px-4 py-1 rounded-full`}>
                <p className='sm:text-[10px] 2xl:text-[14px] font-medium '>{status}</p>
                <p className='text-[15px] font-semibold'>{countRoomsByStatus(status)}</p>
            </div>
        ))]
    )
}

export default FilterStatus