import React from 'react'
import Hero from './homecomponents/Hero'
import About from './homecomponents/About'
import More from './homecomponents/More'
import Testimonial from './homecomponents/Testimonial'
import ListingCta from './propertiescomponent/ListingCta'

function Home() {
  return (
    <div>
      <div className=' w-full  min-h-screen py-24'><Hero /></div>
      <div className=' w-full  min-h-[80vh] '><About /></div>
      <div className=' w-full  min-h-screen'><ListingCta /></div>
      <div className=' w-full  min-h-screen'><More /></div>
      <div className=' w-full  min-h-screen'><Testimonial /></div>
    </div>
  )
}

export default Home