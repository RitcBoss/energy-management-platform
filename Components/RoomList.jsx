'use client';

import { useRoomContext } from '@/app/Context/RoomContext';
import Image from 'next/image';
import React from 'react';

import wifinotconnect_icon from '@/public/wifinotconnect_icon.svg'
import clockmain_icon from '@/public/clockmain_icon.svg'
import Link from 'next/link';

const RoomList = () => {
    const { filteredRooms, loading, error } = useRoomContext();

    const getCategoryStyle = (status) => {
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

    if (loading) {
        return <p>Loading rooms...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        [filteredRooms.map((room) => (
            <Link 
            key={room.id} 
            href={`/rooms/${room.id}`}>
                <div className="flex justify-center flex-col items-center gap-2">
                    <div className={`relative flex flex-col justify-center items-center w-[66px] h-[74px] ${getCategoryStyle(room.status)} rounded-md`}>
                        <p className='text-lg font-medium '>{room.category}</p>
                        <p className='text-[10px] font-medium '>{room.status}</p>
                        {room.iotStatus === 'disconnected' && (
                            <div className='absolute bottom-[-10px] left-[-10px]'>
                                <Image src={wifinotconnect_icon} alt='wifinotconnect icon' />
                            </div>
                        )}
                        {room.maintenance === true && (
                            <div className='absolute bottom-[-10px] right-[-10px]'>
                                <Image src={clockmain_icon} alt='wifinotconnect icon' />
                            </div>
                        )}

                    </div>
                    <p className='text-[16px] font-semibold text-primary-text-gray-dark text-center'>{room.name}</p>
                </div>
            </Link>
        ))]

    );
};

export default RoomList;