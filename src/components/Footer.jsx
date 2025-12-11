import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section className='flex sm:flex-row flex-col justify-between md:w-[80%]  w-[90%] mx-auto py-12'>
        {/* logo */}
        <div className='flex-1 text-[#100A55] text-[20px] font-bold'>
          <Link to="/" className=" text-[34px] font-extrabold">ℭ</Link>EET
        </div>
        {/* nav links */}
        <section className="flex flex-wrap gap-12 flex-1">
          <nav className='flex flex-col items-center  text-[#100A55] text-[12px] font-medium'>
            <h2 class="text-[16px] font-bold text-[#100A55] mb-2">
              Pages
            </h2>
            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Home</NavLink>
            <NavLink to="/properties" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Properties</NavLink>
            <NavLink to="/escrow" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Escrow</NavLink>
          </nav>
          <nav className='flex flex-col items-center  text-[#100A55] text-[12px] font-medium'>
            <h2 class="text-[16px] font-bold text-[#100A55] mb-2">
              Home
            </h2>
            <p >Home</p>
            <p>Properties</p>
            <p>Escrow</p>
          </nav>
          <nav className='flex flex-col items-center  text-[#100A55] text-[12px] font-medium'>
            <h2 class="text-[16px] font-bold text-[#100A55] mb-2">
              Properties
            </h2>
            <p>Home</p>
            <p >Properties</p>
            <p >Escrow</p>
          </nav>
          <nav className='flex flex-col items-center  text-[#100A55] text-[12px] font-medium'>
            <h2 class="text-[16px] font-bold text-[#100A55] mb-2">
              Escrow
            </h2>
            <p >Home</p>
            <p >Properties</p>
            <p>Escrow</p>
          </nav>
        </section>

      </section>

      <section className='border-t-[1.5px] border-[#E8E6F9] py-6 flex items-center justify-center'>
        <h2 class="text-[16px] font-[400] text-gray-500 mb-2 text-center">
          ©2023 CuttingEdgeEscrow&Title. All rights reserved
        </h2>
      </section>
    </div>
  )
}

export default Footer