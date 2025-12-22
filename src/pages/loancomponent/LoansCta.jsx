import { Looks3, LooksOne, LooksTwo } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

function LoanCta() {
    return (
        <div>
            <main class="w-[90%] mx-auto ">
                <motion.div initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="div">
                    <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full my-5 uppercase hover:scale-105 cursor-default'>Loans</p>

                    <h2 class="text-xl md:text-3xl font-bold text-blue-700 leading-tight text-center">
                        Loans for Every Need
                    </h2>
                    <p class="text-sm md:text-xl text-gray-700 leading-relaxed text-center mb-10">
                        Get the funds you need instantly with flexible repayment options and transparent terms.
                    </p>
                </motion.div>

                <motion.section initial={{ scale: 0.6, y: 40, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className='relative flex flex-wrap items-stretch justify-center gap-8 '>

                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LooksOne /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step 1</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            Apply online by filling out a simple loan application form with your basic details.
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><LooksTwo /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step 2</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            Get your loan approved quickly after verification of your documents and eligibility.
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <div className='flex items-center w-full gap-4'>
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><Looks3 /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Step 3</h3>
                        </div>
                        <p class="text-[#4D5461] text-sm">
                            Receive your funds directly in your account and start using your loan immediately.
                        </p>
                    </div>

                </motion.section>

                <motion.div initial={{ scale: 1.2, y: 40, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} class="bg-linear-to-b from-blue-700/50 to-[#E0DEF700]  rounded-2xl overflow-hidden my-10">
                    <motion.div initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }} className=' pt-8 md:px-10 px-6 flex flex-col gap-4'>
                        <h1 class="text-[32px] font-bold text-blue-700 md:leading-[120%] leading-[90%]">
                            The easiest way to get <br /> the loan you need
                        </h1>

                        <p class="text-[16px] text-[#100A55] mt-2 leading-[120%]">
                            Apply for personal, business, or emergency loans instantly with simple online steps and fast approvals.
                        </p>


                        <Link to="/properties" className="py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] w-fit">
                            Apply Now
                        </Link>
                    </motion.div>

                    <div className='flex flex-wrap items-end justify-end w-full sm:mt-0 mt-5 gap-4'>
                        {/* {aboutsvg} */}
                        <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl md:rounded-b-0 rounded-b-2xl' alt="" />
                        <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-t-2xl' alt="" />
                    </div>
                </motion.div>
            </main>

        </div>
    )
}

export default LoanCta