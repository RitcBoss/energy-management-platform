'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

import wifinotconnect_icon from '@/public/wifinotconnect_icon.svg';
import clockmain_icon from '@/public/clockmain_icon.svg';
import { useRoomContext } from '@/app/Context/RoomContext';



const FilterIotStatus = () => {
    const { rooms } = useRoomContext();

    // Memoized count functions to prevent unnecessary recalculations
    const countRoomsByIotStatus = useMemo(() => {
        return (iotStatus) => rooms.filter(room => room.iotStatus === iotStatus).length;
    }, [rooms]);

    const countRoomsByMaintenance = useMemo(() => {
        return (maintenance) => rooms.filter(room => room.maintenance === maintenance).length;
    }, [rooms]);

    // Configuration for IoT status items
    const iotStatusItems = [
        {
            icon: wifinotconnect_icon,
            label: 'IoT Disconnected',
            status: 'disconnected',
            countFunction: countRoomsByIotStatus,
            bgColor: 'bg-red-300',
            textColor: 'text-primary-text-red'
        },
        {
            icon: clockmain_icon,
            label: 'Maintenance',
            status: true,
            countFunction: countRoomsByMaintenance,
            bgColor: 'bg-blue-300',
            textColor: 'text-primary-bg-linear-blue'
        }
    ];

    return (
        <div className='flex w-full gap-6 justify-between md:justify-center md:w-auto'>
            {iotStatusItems.map(item => (
                <div
                    key={item.label}
                    className='flex items-center justify-center gap-2'
                >
                    <Image
                        src={item.icon}
                        alt={`${item.label} icon`}
                        width={24}
                        height={24}
                    />
                    <p className='text-[14px] text-black'>{item.label}</p>
                    <div
                        className={`flex items-center justify-center 
                        text-primary-text-gray-dark text-[12px] 
                        h-5 w-6 rounded-xl ${item.bgColor}`}
                    >
                        <p className={`${item.textColor} font-semibold text-[14px]`}>
                            {item.countFunction(item.status)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterIotStatus;