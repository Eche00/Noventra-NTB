import { LocalActivity } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function LoanCta() {
    return (
        <div>
            <main class="w-[90%] mx-auto ">
                <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full my-5'>BANK ON THE GO</p>

                <h2 class="text-xl md:text-3xl font-bold text-blue-700 leading-tight text-center">blablabla</h2>
                <p class="text-sm md:text-xl text-gray-700 leading-relaxed  text-center mb-10">Exchange Money Internationally in minutes</p>
                <section className='relative flex flex-wrap items-center justify-center gap-8 '>

                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            We offer our customer property protection of liability coverage and insurance for a better life.
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            We offer our customer property protection of liability coverage and insurance for a better life.
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            We offer our customer property protection of liability coverage and insurance for a better life.
                        </p>
                    </div>
                </section>

                <div class="bg-linear-to-b from-blue-700/50 to-[#E0DEF700]  rounded-2xl overflow-hidden my-10">
                    <div className=' pt-8 md:px-10 px-6 flex flex-col gap-4'>
                        <h1 class="text-[32px] font-bold text-blue-700 md:leading-[120%] leading-[90%]">
                            The new way to find <br /> your new home
                        </h1>

                        <p class="text-[16px] text-[#100A55] mt-2 leading-[120%] ">
                            Find your dream place to live in with more than 10k+ properties listed.
                        </p>

                        <Link to="/properties" className="py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] w-fit">
                            Apply Now
                        </Link>
                    </div>

                    <div className='flex flex-wrap items-end justify-end w-full sm:mt-0 mt-5 gap-4'>
                        {/* {aboutsvg} */}
                        <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl md:rounded-b-0 rounded-b-2xl' alt="" />
                        <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl' alt="" />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default LoanCta