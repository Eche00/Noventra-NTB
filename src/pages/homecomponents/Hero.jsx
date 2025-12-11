import { Search } from '@mui/icons-material'
import React from 'react'
import { properties, trusted } from '../../utils/svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='max-w-[90%]  w-full mx-auto z-10'>
      <main className='flex mm:flex-row flex-col gap-4'>
        <section className='relative flex flex-col flex-1 bg-blue-700/30 h-[80vh] rounded-4xl overflow-hidden'>
          <div className='flex flex-wrap items-center justify-start gap-2 p-4 z-30'>
            <button className=' py-1 px-3 bg-white text-black shadow-2xl rounded-full text-[13px]'>Efficiency</button>
            <button className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Reliability</button>
            <button className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Large Coverage</button>
            <button className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Value</button>
          </div>
          <div className='flex flex-1 items-end justify-start z-30'>
            <img src="/hero.webp" className='w-[60%] max-h-[300px] object-cover rounded-tr-2xl' alt="" />
          </div>
          {/* designs */}
          <span className='absolute top-0 left-0 w-[20%] h-full bg-[#1D4ED8] rounded-[30px] z-20'></span>
          <span className='absolute top-[10%] left-[10%] w-[20%] h-full bg-[#476dd6] rounded-[30px] z-10'></span>
          <span className='absolute top-[20%] left-[20%] w-[20%] h-full bg-[#1D4ED8] rounded-[30px] z-0'></span>
          <span className='absolute top-[30%] left-[30%] w-[20%] h-full bg-[#476dd6] rounded-[30px] -z-10'></span>
          <span className='absolute top-[40%] left-[40%] w-[20%] h-full bg-[#1D4ED8] rounded-[30px] -z-20'></span>
          <span className='absolute top-[50%] left-[50%] w-[20%] h-full bg-[#476dd6] rounded-[30px] -z-30'></span>
          <span className='absolute top-[60%] left-[60%] w-[20%] h-full bg-[#1D4ED8] rounded-[30px] -z-40'></span>
          <span className='absolute top-[70%] left-[70%] w-[20%] h-full bg-[#476dd6] rounded-[30px] -z-50'></span>


        </section>
        <section className='relative flex flex-col flex-1 bg-blue-700/30 h-[80vh] rounded-4xl overflow-hidden'>
          <div className='flex flex-col gap-4 p-4'>
            <h1 class="text-2xl md:text-4xl font-bold text-blue-700 leading-tight ">Bank smarter, not harder, anywhere & anytime.</h1>
            <p class="text-sm md:text-xl text-gray-700 leading-relaxed ">Instant transfers, digital loans, and real-time insights turn your financial plans into achievements without stepping into a branch.</p>
            <section className='md:flex flex-1 hidden items-center justify-start gap-2 '>
              <Link to="/signin" className=' py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] '>Log in</Link>
              <Link to="/signup" className=' py-1.5 px-5 bg-white/20 text-white rounded-full text-[13px] '>Create an account</Link>
            </section>
          </div>
          <div className='flex flex-1 items-end justify-end z-30 border-t-10 border-blue-700 pt-4'>
            <img src="https://img.freepik.com/premium-photo/neon-wireframe-laptop-laptop-s-neon-outline-glows-against-dark_454018-3385.jpg?semt=ais_hybrid&w=740&q=80" className='w-[40%] h-full object-left object-cover rounded-2xl border-10 border-white' alt="" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero