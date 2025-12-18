import React from 'react'
import Hero from './aboutcomponent/Hero'
import Records from './aboutcomponent/Records'
import Aboutus from './aboutcomponent/Aboutus'
import Services from '../Services'

function About() {
    return (
        <div>
            <div className=' w-full min-h-screen py-24'><Hero /></div>
            <div ><Records /></div>
            <div className=' w-full bg-blue-700/10 min-h-screen '><Aboutus /></div>
            <div className=' w-full  min-h-[70vh] '><Services /></div>

        </div>
    )
}

export default About