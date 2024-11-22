import Image from 'next/image'
import React from 'react'

import Roomswitches from './Roomswitches'
import room_icon from '@/public/room_icon.png'
import room_environment from '@/public/room_environment.png'
import room_fan from '@/public/room_fan.png'
import room_lifebeing from '@/public/room_lifebeing.png'
import room_tv from '@/public/room_tv.png'
import room_refrigerator from '@/public/room_refrigerator.png'
import room_switch from '@/public/room_switch.png'
import room_meter from '@/public/room_meter.png'
import room_air from '@/public/room_air.png'

const Roomviews = () => {
  return (
    <div className='relative flex justify-center items-center h-full'>
      <div className='flex'>
        <Image
          src={room_icon}
          alt='room icon'
          className='w-[450px] lg:w-80 2xl:w-[450px]' />

        <div className='absolute top-0'>
          <div className='flex gap-6'>

            <Roomswitches
              id={1}
              initialName="Exhaust Fan"
              initialStatus="On"
              imageSrc={room_fan} />
            <Roomswitches
              id={1}
              initialName="Life-Being"
              initialStatus="Disconnected"
              imageSrc={room_lifebeing} />
            <Roomswitches
              id={1}
              initialName="Environment"
              initialStatus="Off"
              imageSrc={room_environment} />

          </div>
        </div>

        <div className='absolute bottom-0'>
          <div className='flex gap-6'>

            <Roomswitches
              id={1}
              initialName="Smart TV"
              initialStatus="On"
              imageSrc={room_tv} />
            <Roomswitches
              id={1}
              initialName="Refrigerator"
              initialStatus="On"
              imageSrc={room_refrigerator} />
          </div>
        </div>

        <div className='absolute bottom-[130px] lg:bottom-[140px] 2xl:bottom-[120px] left-0'>
          <div className='flex flex-col gap-6'>

            <Roomswitches
              id={1}
              initialName="Front Switch"
              initialStatus="Off"
              imageSrc={room_switch} />
            <Roomswitches
              id={1}
              initialName="Smart Meter"
              initialStatus="Off"
              imageSrc={room_meter} />
          </div>
        </div>

        <div className='absolute bottom-[130px] lg:bottom-[140px] 2xl:bottom-[120px] right-0'>
          <div className='flex flex-col gap-6'>

            <Roomswitches
              id={1}
              initialName="Light Switch-1"
              initialStatus="On"
              imageSrc={room_switch} />
            <Roomswitches
              id={1}
              initialName="Air-Conditioner"
              initialStatus="Maintenance"
              imageSrc={room_air} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Roomviews