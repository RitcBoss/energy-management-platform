import Image from 'next/image';
import React, { useState } from 'react'

import { RiErrorWarningLine } from "react-icons/ri";

const Roomswitches = ({ id, initialName = 'Switch', initialStatus = 'Off', imageSrc }) => {
    const [name, setName] = useState(initialName);
    const [status, setStatus] = useState(initialStatus);

    const toggleStatus = () => {
        setStatus((prevStatus) => (prevStatus === 'On' ? 'Off' : 'On'));
    };

    const changeName = (e) => {
        setName(e.target.value);
    };
    return (
        <div className='flex flex-col w-[125px] lg:w-[140px] 2xl:w-[177px] py-2 bg-white rounded-lg p-2 gap-4'>
            <div className='flex justify-between items-center '>
                <div className='flex bg-primary-bg-linear-lightgray/70 p-1 border border-primary-text-gray-dark rounded-md'>
                    <Image
                        src={imageSrc}
                        alt={name}
                        className='w-[18px] lg:w-[24px] lg:h-[24px] 2xl:w-[32px] 2xl:h-[32px]'
                    />
                </div>
                <div className='flex'>
                    {status === 'Maintenance' ? (
                        <button
                            className="text-[9px] lg:text-[10px] 2xl:text-sm mt-2 px-2 py-[5px] rounded bg-primary-bg-linear-blue/80 text-white cursor-default"
                            disabled
                        >
                            {status}
                        </button>
                    ) : status === 'Disconnected' ? (
                        <button
                            className="text-[9px] lg:text-[10px] 2xl:text-sm mt-2 px-2 py-[5px] rounded bg-primary-text-red/70 text-white cursor-default"
                            disabled
                        >
                            {status}
                        </button>
                    ) : (
                        <button
                            onClick={toggleStatus}
                            className={`text-[9px] lg:text-[10px] 2xl:text-sm mt-2 px-2 py-[5px] rounded ${status === 'On'
                                ? 'bg-primary-text-green text-white'
                                : 'bg-primary-text-gray text-primary-text-gray-dark'
                                }`}
                        >
                            {status}
                        </button>
                    )}
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='text-[10px] lg:text-[10px] 2xl:text-[16px] font-semibold'>{name}</p>
                <RiErrorWarningLine />
            </div>
        </div>
    );
}

export default Roomswitches
