'use client';

import React from 'react';
import { useRoomContext } from '@/app/Context/RoomContext';

const FilterRooms = () => {

    const ROOM_CATEGORIES = ['VC', 'OC', 'VD', 'OD'];
    const {
        selectedCategories,
        setSelectedCategories,
        rooms,
        countRoomsByCategory,
    } = useRoomContext();

    const toggleCategory = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
    };

    return (
        <div className="flex flex-row gap-4 py-2">
            {ROOM_CATEGORIES.map((category) => (
                <div key={category} className="flex items-center justify-center gap-1">
                    <input
                        className="w-5 h-5"
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                    />
                    <p className="text-[14px] text-primary-text-blue font-bold">{category}</p>
                    <div className='flex items-center justify-center text-primary-text-gray-dark text-[12px] h-5 w-6 rounded-xl bg-primary-text-gray/25'>
                        <p>{countRoomsByCategory(category)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterRooms;