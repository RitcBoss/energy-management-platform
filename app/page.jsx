import React from 'react'

import Slidebar from '@/Components/Layout/Slidebar'
import Header from '@/Components/Layout/Header'
import Maincontent from '@/Components/Layout/Maincontent'
import Footer from '@/Components/Layout/Footer'


const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex">
          <Slidebar />
          <div className='bg-primary-bg w-full flex flex-col'>
            <Header />
            <Maincontent />
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default page