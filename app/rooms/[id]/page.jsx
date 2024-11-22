"use client"

import React, { useEffect } from 'react'

import Slidebar from '@/Components/Layout/Slidebar'
import Header from '@/Components/Layout/Header'
import Footer from '@/Components/Layout/Footer'
import ControlRoom from '@/Components/Layout/ControlRoom'
import { useRoomContext } from '@/app/Context/RoomContext'


const page = ({params}) => {
  const { setSelectedRoomId } = useRoomContext();

  const { id } = React.use(params);

  useEffect(() => {
    if (id) {
      setSelectedRoomId(id); 
    }
  }, [id]);
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex">
          <Slidebar />
          <div className='bg-primary-bg w-full flex flex-col'>
            <Header />
            <ControlRoom />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default page