import { Search } from '@mui/icons-material'
import React from 'react'
import { bathrooms, beds, direction, properties, sizes, trusted } from '../../utils/svg'

function Hero() {
    const propertiest = [
        { img: "/hero.png", title: 'Modern 5 B...', price: '20,700', timeframe: 'month', location: 'A spacious modern duplex featuring an open living area, premium... ', bed: 2, bathroom: 1, size: '6x7.7 m' },
    ]
    return (
        <div className='md:max-w-[90%]  w-full md:ml-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col items-center gap-4 '>
                {/* left hero  */}
                <section className='md:max-w-[544px] w-[90%] md:mx-0 mx-auto flex flex-col gap-5 '>
                    <div className='flex flex-col gap-8 text-[#000929]  font-bold'>
                        <h1 className='text-[#000929] md:text-[64px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans'>Buy <span className='text-[#7065F0]'> and </span> rent properties easily</h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center '>We focus on customer satisfaction to buy and even rent properties without any commisions.</h3>
                    </div>

                    {/* category and search box */}
                    <div className="md:w-full w-[90%] max-w-md bg-white rounded-2xl shadow p-4 md:mx-0 mx-auto ">

                        <div className="flex justify-between text-sm font-medium text-gray-600 px-2">
                            <button className="flex-1 text-[#7065F0] border-b-2 border-[#7065F0] pb-1">Rent</button>
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
                    {/* info  */}
                    <section className='flex items-center md:gap-20 gap-2.5 md:mx-0 mx-auto'>
                        {/* properties */}
                        <div className='flex flex-col gap-6'>
                            <span>{properties}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>10K +  <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>properties</span>
                            </p>
                        </div>
                        {/* trusted */}
                        <div className='flex flex-col gap-6'>
                            <span>{trusted}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>5K + <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>renters</span>
                            </p>
                        </div>
                    </section>
                </section>
                {/* right hero  */}
                <section className='w-fit h-fit relative z-10 '>
                    {propertiest.map((property) => <div className='hidden md:flex flex-col max-w-[300px] absolute top-1/2 -translate-y-1/2 left-0 overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF]'>
                        <img src={property.img} alt="" className='w-full h-[200px] ' />
                        <section className='w-[90%] mx-auto flex flex-col py-5'>
                            <h3 className='text-[#7065F0] text-[24px] font-extrabold'>${property.price}  <span className=' text-gray-400 text-[16px] font-normal'> /{property.timeframe}</span></h3>
                            <h2 className='text-[#000929] text-[24px] font-bold'>{property.title}</h2>
                            <h4 className='text-gray-400 text-[16px] font-normal mb-4'>{property.location}</h4>

                            <div className='w-full border-t-[1.5px] border-[#F0EFFB] pt-4 flex flex-wrap gap-2 items-center justify-between'>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {property.bed} Beds</span>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{property.bathroom} Bathrooms</span>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {property.size}</span>
                            </div>
                        </section>
                    </div>)}

                    <img src="/propertieshero.png" alt="hero image" className='md:w-[1242px] md:h-[586px] object-cover  object-left  rounded-2xl' />
                    <span className='absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2'>{direction}</span>
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-20 left-5' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute bottom-2 left-10' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-1/2 -translate-y-1/2 right-5' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-34 left-[50%]' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-[80%] left-20' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-5 right-10' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute bottom-20 right-5' />
                </section>
            </main>
        </div>
    )
}

export default Hero