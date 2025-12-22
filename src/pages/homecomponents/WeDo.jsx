import { AreaChart, CurrencyExchange, LocalActivity, Public } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'

function WeDo() {
    return (
        <div>
            <main class="w-[90%] mx-auto ">
                <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full my-5 uppercase cursor-default hover:scale-105'>Global</p>

                <h2 class="text-xl md:text-3xl font-bold text-blue-700 leading-tight text-center">Borderless Exchange</h2>
                <p class="text-sm md:text-xl text-gray-700 leading-relaxed  text-center mb-10">Instant international money exchange.</p>
                <section className='relative flex flex-wrap items-center justify-center gap-8 '>
                    <motion.div initial={{ scale: 0.65, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        exit={{ scale: 0.65, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px] lg:-rotate-12">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><Public /></span>
                        <h3 class="text-xl font-semibold text-blue-700">Global Account</h3>
                        <p class="text-[#4D5461] text-sm">
                            Get a free digital account for fast and easy global payments.
                        </p>
                    </motion.div>
                    <motion.div initial={{ scale: 0.65, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px]">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><CurrencyExchange /></span>
                        <h3 class="text-xl font-semibold text-blue-700">International Transfers</h3>
                        <p class="text-[#4D5461] text-sm">
                            Send money to friends and family across borders using our secure platform.
                        </p>
                    </motion.div>
                    <motion.div initial={{ scale: 0.65, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl sm:max-w-[300px] lg:rotate-12">
                        <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><AreaChart /></span>
                        <h3 class="text-xl font-semibold text-blue-700">Real-Time Market Data</h3>
                        <p class="text-[#4D5461] text-sm">
                            Track market movements in real time and make informed exchange decisions.
                        </p>
                    </motion.div>

                    {/* design  */}
                </section>
            </main>

        </div>
    )
}

export default WeDo