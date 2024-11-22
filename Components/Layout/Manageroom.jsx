import React from 'react'


import RoomList from '../RoomList'
import FilterRooms from '../FilterRoom'
import SearchRoom from '../SearchRoom'
import FilterStatus from '../FilterStatus'
import FilterIotStatus from '../FilterIotStatus'


const Manageroom = () => {
  return (
    <div className='flex items-center bg-slate-600/0 w-full '>
      <div className='flex flex-col w-full bg-white shadow-lg shadow-primary-text-gray-dark/10 rounded-lg overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-between p-2 mb-2 bg-white shadow-lg shadow-primary-text-gray-dark/10'>
          <div className='flex flex-row gap-4 py-2 w-full md:w-auto'>

            <FilterRooms />

          </div>
          <div className='flex flex-row gap-2 w-full md:w-auto'>

            <SearchRoom />

          </div>
        </div>
        <div className='flex flex-col w-full p-2 gap-8 '>
          <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0'>

            <FilterIotStatus />

            <div className='flex items-center justify-end gap-4'>

              <FilterStatus />

            </div>
          </div>

          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-[100px] gap-3 px-3 items-start justify-normal'>
              <button className='flex items-center justify-center w-[55px] h-[25px] rounded-full border border-primary-text-blue text-primary-text-blue'>
                <p className='text-[10px]'>ALL FL</p>
              </button>
              <button className='flex items-center justify-center w-[55px] h-[25px] rounded-full border border-primary-text-gray-dark'>
                <p className='text-[10px]'>FL. 1</p>
              </button>
            </div>

            <div className='flex w-screen'>
              <div className='flex items-start justify-start px-4 gap-4 flex-wrap overflow-y-auto max-h-[575px]'>

                <RoomList />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Manageroom