import { Search } from '@mui/icons-material'
import React from 'react'
import { fundscontrol, properties, returnrate, trusted } from '../../utils/svg'

function Hero() {

    return (
        <div className='md:max-w-[90%]  w-full md:ml-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col items-center gap-4 '>
                {/* left hero  */}
                <section className='md:max-w-[544px] w-[90%] md:mx-0 mx-auto flex flex-col gap-5 '>
                    <div className='flex flex-col gap-8 text-[#000929]  font-bold'>
                        <h1 className='text-[#000929] md:text-[64px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans'>Fast, safe, and reliable  <span className='text-[#7065F0]'> escrow  </span> services.</h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center '>We are here to handle your escrow smoothly, securely, and without complications.</h3>
                    </div>

                    {/* category and search box */}
                    <div class="md:w-full w-[90%] max-w-md bg-white rounded-2xl shadow p-4 md:mx-0 mx-auto ">

                        <div class="flex justify-between text-sm font-medium text-gray-600 px-2">
                            <button class="flex-1 text-[#7065F0] border-b-2 border-[#7065F0] pb-1">Create</button>
                            <button class="flex-1 pb-1">Success</button>
                            <button class="flex-1 pb-1">Close</button>
                        </div>


                        <div class="flex justify-between text-sm font-medium text-gray-600 p-4">

                            <p class="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">
                                Escrow Stage
                                <span class="text-[#000929] sm:text-[18px] text-[14px] font-bold">
                                    Funds Deposited
                                </span>
                            </p>

                            <p class="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">
                                Status
                                <span class="text-[#000929] sm:text-[18px] text-[14px] font-bold">
                                    Awaiting Verification
                                </span>
                            </p>

                        </div>


                    </div>
                    {/* info  */}
                    <section className='flex items-center md:gap-20 gap-2.5 md:mx-0 mx-auto'>
                        {/* properties */}
                        <div className='flex flex-col gap-6'>
                            <span>{returnrate}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>100%  <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>Return rate</span>
                            </p>
                        </div>
                        {/* trusted */}
                        <div className='flex flex-col gap-6'>
                            <span>{trusted}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>5K + <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>trusted clients</span>
                            </p>
                        </div>
                        {/* fundscontrol */}
                        <div className='flex flex-col gap-6'>
                            <span>{fundscontrol}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>100% <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>Funds control</span>
                            </p>
                        </div>
                    </section>
                </section>
                {/* right hero  */}
                <section className='w-fit h-fit relative z-10 '>


                    <img src="https://www.quorumfcu.org/wp-content/uploads/Escrow-Instagram-Template-768x768.jpg" alt="hero image" className='md:w-[1242px] md:h-[586px] object-cover  object-left  rounded-2xl' />

                </section>
            </main>
        </div>
    )
}

export default Hero