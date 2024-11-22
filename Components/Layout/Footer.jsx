import React from 'react'

const Footer = () => {
  return (
    <div className='hidden sm:flex w-full bg-primary-bg-linear-light/80 px-4 py-2 fixed bottom-0'>
        <div className='flex w-full justify-between'>
            <p className='text-sm text-primary-text-gray-dark'>Version 1.0 Copyright 2023, AltoTech</p>
            <div className='flex gap-2 text-sm text-primary-text-gray-dark font-semibold pr-20'>
                <li className='list-none'>Help</li>
                <li className='list-none'>Privacy</li>
                <li className='list-none'>Terms of Service</li>
            </div>
        </div>
    </div>
  )
}

export default Footer