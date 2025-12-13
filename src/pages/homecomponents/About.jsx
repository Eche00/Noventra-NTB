import React from 'react'
import { aboutsvg, comission, control, insurance, price } from '../../utils/svg'
import { Link } from 'react-router-dom'
import Icon from '@mui/material/Icon'
import { LocalActivity } from '@mui/icons-material'

function About() {
    return (
        <div>
            <main class="w-[90%] mx-auto  ">
                <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full mb-5'>BANK ON THE GO</p>
                <div class=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT SIDE FEATURE GRID  */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">

                        {/* Feature 1  */}
                        <div class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Property Insurance</h3>
                            <p class="text-[#4D5461] text-sm">
                                We offer our customer property protection of liability coverage and insurance for a better life.
                            </p>
                        </div>

                        {/* Feature 2  */}
                        <div class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Best Price</h3>
                            <p class="text-[#4D5461] text-sm">
                                Sweet and affordable properties, matching your budget and dream home.
                            </p>
                        </div>

                        {/* Feature 3  */}
                        <div class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Lowest Commission</h3>
                            <p class="text-[#4D5461] text-sm">
                                You no longer have to negotiate commissions and haggle with other agents.
                            </p>
                        </div>

                        {/* Feature 4  */}
                        <div class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocalActivity /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Overall Control</h3>
                            <p class="text-[#4D5461] text-sm">
                                You have overall control when it comes to your escrow and balance management.</p>
                        </div>

                    </div>
                    {/* RIGHT LARGE CARD  */}
                    <div class="bg-linear-to-b from-blue-700/50 to-[#E0DEF700]  rounded-2xl overflow-hidden   ">
                        <div className=' pt-8 md:px-10 px-6 flex flex-col gap-4'>
                            <h1 class="text-[32px] font-bold text-blue-700 md:leading-[120%] leading-[90%]">
                                The new way to find <br /> your new home
                            </h1>

                            <p class="text-[16px] text-[#100A55] mt-2 leading-[120%] ">
                                Find your dream place to live in with more than 10k+ properties listed.
                            </p>

                            <Link to="/properties" className="py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] w-fit">
                                Loans
                            </Link>
                        </div>

                        <div className='flex items-end justify-end w-full sm:mt-0 mt-5'>
                            {/* {aboutsvg} */}
                            <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-tl-2xl' alt="" />
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default About