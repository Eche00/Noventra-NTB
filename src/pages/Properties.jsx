import React from 'react'
import Hero from './propertiescomponent/Hero'
import More from './homecomponents/More'
import Listing from './propertiescomponent/Listing'

function Properties() {
    return (
        <div>
            <div className=' w-full bg-linear-to-b from-[#E0DEF7] to-white min-h-screen py-24'><Hero /></div>
            <div className=' w-full bg-linear-to-b from-white to-[#E0DEF7] min-h-screen'><Listing /></div>
            <div className=' w-full bg-[#E0DEF700] min-h-screen'><More /></div>

        </div>
    )
}

export default Properties