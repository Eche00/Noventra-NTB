import { Search } from '@mui/icons-material'
import React from 'react'
import { bathrooms, beds, direction, properties, sizes, trusted } from '../../utils/svg'

function Hero() {

    return (
        <div className='  w-[90%] mx-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col items-stretch gap-4 mt-6 '>
                {/* left hero  */}
                <section className='relative flex-1  flex flex-col gap-5 sm:bg-blue-700/30 h-[80vh] rounded-4xl sm:p-4  overflow-hidden'>
                    <div className='flex flex-col gap-8 text-[#000929]  font-bold md:max-w-[544px] w-[90%] md:mx-0 mx-auto z-30'>
                        <h1 className='text-[#000929] md:text-[54px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans'>Buy <span className='text-blue-700'> and </span> rent properties easily</h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center '>We focus on customer satisfaction to buy and even rent properties without any commisions.</h3>
                    </div>


                    {/* info  */}
                    <section className='flex items-center md:gap-20 gap-2.5 md:mx-0 mx-auto z-30'>
                        {/* properties */}
                        <div className='flex flex-col gap-6'>
                            <span>{properties}</span>
                            <p className='text-blue-700 md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>10K +  <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>properties</span>
                            </p>
                        </div>
                        {/* trusted */}
                        <div className='flex flex-col gap-6'>
                            <span>{trusted}</span>
                            <p className='text-blue-700 md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>5K + <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>renters</span>
                            </p>
                        </div>
                    </section>

                    {/* category and search box */}
                    <div className="md:w-[80%] w-[90%]  bg-white rounded-2xl shadow p-4 md:mx-0 mx-auto flex-1 z-30 sm:mb-0 mb-5">

                        <div className="flex justify-between text-sm font-medium text-gray-600 px-2">
                            <button className="flex-1 text-blue-700 border-b-2 border-blue-700 pb-1">Rent</button>
                            <button className="flex-1 pb-1">Buy</button>
                        </div>


                        <div className="flex justify-between text-sm font-medium text-gray-600 p-4">
                            <p className="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">Location
                                <span className=" text-[#000929] sm:text-[18px] text-[14px] font-bold">Barcelona, Spain</span>
                            </p>
                            <p className="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">When
                                <span className=" text-[#000929] sm:text-[18px] text-[14px] font-bold">Move-in Date</span>
                            </p>
                        </div>

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
                {/* right hero  */}
                <section className='flex flex-1 items-center justify-center bg-blue-700/30  rounded-4xl p-4 relative z-10 '>


                    <img src="/iPhone-13-PRO.png" alt="hero image" className=' max-h-[70vh] object-cover' />

                </section>
            </main>
        </div>
    )
}

export default Hero