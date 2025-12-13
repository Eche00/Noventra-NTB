import React from 'react'
import Hero from './homecomponents/Hero'
import About from './homecomponents/About'
import InvPlans from './homecomponents/InvPlans'
import Testimonial from './homecomponents/Testimonial'
import ListingCta from './propertiescomponent/ListingCta'
import WeDo from './homecomponents/WeDo'

function Home() {
  return (
    <div>
      <div className=' w-full  min-h-screen py-24'><Hero /></div>
      <div className=' w-full  min-h-[80vh] '><About /></div>
      <div className=' w-full  min-h-[60vh] bg-blue-700/10 py-10 '><WeDo /></div>
      {/* <div className=' w-full  min-h-screen'><ListingCta /></div> */}
      <div className=' w-full  min-h-screen'><InvPlans /></div>
      <div className=' w-full  min-h-screen'><Testimonial /></div>
    </div>
  )
}

export default Home