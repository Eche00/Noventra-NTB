import { Inventory, JoinFull, RealEstateAgent, ReceiptRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <div className='  w-[90%] mx-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col gap-4  '>
                {/* left hero  */}
                <motion.section initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        stiffness: 220,
                        damping: 22,
                        duration: 1,
                        delay: 0.2
                    }} className='relative flex-1  flex flex-col gap-5 sm:bg-blue-700/30 h-[80vh] rounded-4xl sm:p-4  overflow-hidden'>
                    <div className='flex flex-col gap-8 text-[#000929]  font-bold md:max-w-[544px] w-[90%] md:mx-0 mx-auto z-30'>
                        <h1 className='text-[#000929] md:text-[54px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans bg-white bg-clip-text'>
                            Invest <span className='text-blue-700'> smartly </span> and grow your wealth
                        </h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center'>
                            We provide secure and reliable investment options designed to help you maximize returns and build a stronger financial future.
                        </h3>
                    </div>


                    <div className='flex flex-1 items-end justify-start z-30'>
                        <img src="/hero.webp" className='w-[60%] max-h-[300px] object-cover rounded-2xl' alt="" />
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


                </motion.section>
                {/* right hero  */}
                <section
                    className='relative flex flex-1 flex-wrap justify-center gap-4'>
                    <motion.div initial={{ scale: 1.1, y: 40, opacity: 0 }}
                        whileInView={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tl from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl xl:max-w-[250px] max-w-[300px] ">
                        <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><Inventory /></span>
                            Stocks
                        </h3>
                        <p class="text-[#4D5461] text-sm">
                            Invest in top-performing stocks to grow your portfolio and earn consistent returns.
                        </p>
                    </motion.div>

                    <motion.div initial={{ scale: 0.6, y: 40, opacity: 0 }}
                        whileInView={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-tr from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl xl:max-w-[250px] max-w-[300px]">
                        <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><JoinFull /></span>
                            Bonds
                        </h3>
                        <p class="text-[#4D5461] text-sm">
                            Secure your funds with government and corporate bonds, offering stable returns over time.
                        </p>
                    </motion.div>

                    <motion.div initial={{ scale: 1.1, y: 40, opacity: 0 }}
                        whileInView={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-bl from-5% from-blue-700/60 to-white shadow-lg p-4 rounded-2xl xl:max-w-[250px] max-w-[300px]">
                        <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><ReceiptRounded /></span>
                            Mutual Funds
                        </h3>
                        <p class="text-[#4D5461] text-sm">
                            Diversify your investments with professionally managed mutual funds for long-term growth.
                        </p>
                    </motion.div>

                    <motion.div initial={{ scale: 0.6, y: 40, opacity: 0 }}
                        whileInView={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} viewport={{ once: true }} class="flex flex-col items-center justify-center text-center gap-3 bg-linear-to-br from-5% from-blue-700/20 to-white shadow-lg p-4 rounded-2xl xl:max-w-[250px] max-w-[300px]">
                        <h3 class="text-xl font-semibold text-blue-700 flex items-baseline gap-2">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><RealEstateAgent /></span>
                            Real Estate Investments
                        </h3>
                        <p class="text-[#4D5461] text-sm">
                            Build wealth through real estate investment opportunities with high potential returns.
                        </p>
                    </motion.div>
                </section>

            </main>
        </div>
    )
}

export default Hero