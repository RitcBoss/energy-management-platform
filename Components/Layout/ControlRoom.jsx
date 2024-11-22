'use client';

import React from 'react';
import NavControlRoom from '../NavControlRoom';
import MenuControlRoom from '../MenuControlRoom';
import Roomviews from '../Roomviews';
import { useRoomContext } from '@/app/Context/RoomContext';

const ControlRoom = () => {
  const { selectedRoom, loading, error } = useRoomContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading room...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!selectedRoom) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No room selected.</p>
      </div>
    );
  }

  return (
    <div className="bg-primary-bg-gray-dark/50 h-full z-0">
      <div className="flex items-center justify-center h-full">
        <div className="bg-primary-bg gap-5 flex flex-col w-full lg:w-[900px] lg:h-[600px] xl:w-[1000px]  2xl:w-[1380px] 2xl:h-[700px] lg:mx-[30px] 2xl:mx-[80px] p-[16px] lg:rounded-lg">
          <NavControlRoom />
          <div className="flex flex-col lg:grid lg:grid-cols-6 gap-5">
            <div className="col-span-4 h-[500px] lg:h-auto">
              <Roomviews />
            </div>
            <div className="col-span-2">
              <MenuControlRoom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlRoom;