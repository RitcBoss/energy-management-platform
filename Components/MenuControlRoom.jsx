import React from 'react'
import MenuSelfDriving from './MenuSelfDriving'

import Roomdetails from './Roomdetails'
import ConditionerControl from './ConditionerControl'


const MenuControlRoom = () => {
    return (
        <div className='flex flex-col lg:gap-2 2xl:gap-6'>
            <MenuSelfDriving />
            <Roomdetails />
            <ConditionerControl />
        </div>
    )
}

export default MenuControlRoom