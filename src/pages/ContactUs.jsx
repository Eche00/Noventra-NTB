import { Email, LocalActivity, LocationCity, Phone } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'

function ContactUs() {
    return (
        <div className=' min-h-screen'>
            <div className=" flex items-center justify-center pt-24">
                <div className=" flex flex-col md:gap-6 gap-3.5 items-center mb-2">
                    <motion.p initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className=" md:text-[14px] text-[12px]  font-normal py-2.5 px-6 border rounded-full w-fit  flex items-center md:gap-2.5 gap-1.5 hover:scale-105 cursor-default">
                        Noventra NTB
                    </motion.p>
                    <motion.h1 initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className=" text-[#1A1A1A] font-bold md:text-[44px]  text-[23px]">
                        Contact Our Support
                    </motion.h1>
                </div>
            </div>

            <motion.section initial={{ scale: 0.6, y: 40, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className='relative flex flex-wrap items-stretch justify-center gap-8 w-[90%] sm:w-full mx-auto'>
                <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px] w-full  ">
                    <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><Email /></span>
                        Email</h3>
                    <p class="text-[#4D5461] text-sm">
                        support@noventrantb.com <br /> (Quick Response)
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]  w-full ">
                    <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LocationCity /></span>
                        Head Server Address
                    </h3>
                    <p class="text-[#4D5461] text-sm">
                        Opal Tower, Business Bay, Dubai, UAE
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]  w-full ">
                    <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><Phone /></span>
                        Mobile Number</h3>
                    <p class="text-[#4D5461] text-sm">
                        VIP ACCESS ONLY - May be congested or unavailable.
                    </p>
                </div>


            </motion.section>

            <motion.div initial={{ scale: 1.2, y: 40, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} class="bg-linear-to-b from-blue-700/50 to-[#E0DEF700] rounded-2xl overflow-hidden my-10 w-[90%] mx-auto">
                <motion.div initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }}
                    className='pt-8 md:px-10 px-6 flex flex-col gap-4'>
                    <h1 class="text-[32px] font-bold text-blue-700 md:leading-[120%] leading-[90%]">
                        Get in touch with <br /> our support team
                    </h1>

                    <p class="text-[16px] text-[#100A55] mt-2 leading-[120%]">
                        Have questions or need assistance? Reach out to us through any of the channels below and we’ll respond as quickly as possible.
                    </p>

                    <ul className="mt-3 flex flex-col gap-2 text-[#100A55] text-[15px]">
                        <li>
                            <span className="font-semibold text-blue-700">Email:</span> support@noventrantb.com (Quick Response)
                        </li>
                        <li>
                            <span className="font-semibold text-blue-700">Head Server Address:</span> Opal Tower, Business Bay, Dubai, UAE
                        </li>
                        <li>
                            <span className="font-semibold text-blue-700">Phone Number:</span> VIP ACCESS ONLY – May be congested or unavailable.
                        </li>
                    </ul>
                </motion.div>


                <div className='flex flex-wrap items-end justify-end w-full sm:mt-0 mt-5 gap-4'>
                    <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl md:rounded-b-0 rounded-b-2xl' alt="" />
                    <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl' alt="" />
                </div>
            </motion.div>

        </div>
    )
}

export default ContactUs