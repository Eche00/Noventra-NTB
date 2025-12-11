import React from 'react'
import { aboutsvg, comission, control, insurance, price } from '../../utils/svg'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <main class="md:w-[80%] w-[90%] mx-auto  ">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* LEFT LARGE CARD  */}
                    <div class="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] border border-[#E0DEF7] rounded-2xl overflow-hidden shadow-sm max-w-[416px] ">
                        <div className=' pt-8 md:px-10 px-6 flex flex-col gap-4'>
                            <h1 class="text-[32px] font-bold text-[#100A55] md:leading-[120%] leading-[90%]">
                                The new way to find <br /> your new home
                            </h1>

                            <p class="text-[16px] text-[#100A55] mt-2 leading-[120%] ">
                                Find your dream place to live in with more than 10k+ properties listed.
                            </p>

                            <Link to="/properties" className="w-fit bg-[#100A55] text-[14px] text-white px-4 py-2.5 rounded-xl font-medium border-none">
                                Browse Properties
                            </Link>
                        </div>

                        <div className='flex items-end justify-end w-full '>
                            {aboutsvg}
                        </div>
                    </div>

                    {/* RIGHT SIDE FEATURE GRID  */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">

                        {/* Feature 1  */}
                        <div class="flex flex-col gap-3">
                            <span>{insurance}</span>
                            <h3 class="text-xl font-semibold text-[#000929]">Property Insurance</h3>
                            <p class="text-[#4D5461] text-sm">
                                We offer our customer property protection of liability coverage and insurance for a better life.
                            </p>
                        </div>

                        {/* Feature 2  */}
                        <div class="flex flex-col gap-3">
                            <span>{price}</span>
                            <h3 class="text-xl font-semibold text-[#000929]">Best Price</h3>
                            <p class="text-[#4D5461] text-sm">
                                Sweet and affordable properties, matching your budget and dream home.
                            </p>
                        </div>

                        {/* Feature 3  */}
                        <div class="flex flex-col gap-3">
                            <span>{comission}</span>
                            <h3 class="text-xl font-semibold text-[#000929]">Lowest Commission</h3>
                            <p class="text-[#4D5461] text-sm">
                                You no longer have to negotiate commissions and haggle with other agents.
                            </p>
                        </div>

                        {/* Feature 4  */}
                        <div class="flex flex-col gap-3">
                            <span>{control}</span>
                            <h3 class="text-xl font-semibold text-[#000929]">Overall Control</h3>
                            <p class="text-[#4D5461] text-sm">
                                You have overall control when it comes to your escrow and balance management.</p>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    )
}

export default About