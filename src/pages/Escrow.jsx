import React from 'react'
import Hero from './escrowcomponents/Hero'
import Testimonial from './homecomponents/Testimonial'
import EscrowCta from './escrowcomponents/EscrowCta'

function Escrow() {
    return (
        <div>
            <div className=' w-full bg-linear-to-b from-[#E0DEF7] to-white min-h-screen py-24'><Hero /></div>
            <div className=' w-full bg-linear-to-b from-white to-[#E0DEF7] min-h-screen'><EscrowCta /></div>
            <div className=' w-full bg-[#E0DEF700] min-h-screen'><Testimonial /></div>

        </div>
    )
}

export default Escrow