import { motion } from 'framer-motion'

function Hero() {

    return (
        <div className='  w-[90%] mx-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col items-stretch gap-4  '>
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
                        <h1 className='text-[#000929] md:text-[54px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans bg-white bg-clip-text'>A new standard for digital <span className="text-blue-700"> banking</span></h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center '>We focus on security, transparency, and innovation to give you full control of your money anytime, anywhere.</h3>
                        <div className='flex flex-wrap items-center justify-start gap-2 p-4 z-30 mt-5'>
                            <button className=' py-2 w-[120px] bg-white text-black shadow-2xl rounded-full text-[13px]'>Saving</button>
                            <button className=' py-2 w-[120px] bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Loan</button>
                            <button className=' py-2 w-[120px] bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Investments</button>
                        </div>
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
                <motion.section initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        stiffness: 220,
                        damping: 22,
                        duration: 1,
                        delay: 0.2
                    }} className='flex flex-1 items-center justify-center bg-blue-700/30  rounded-4xl p-4 relative z-10 '>


                    <img src="/iPhone-13-PRO.png" alt="hero image" className=' max-h-[70vh] object-cover' />

                </motion.section>
            </main>
        </div>
    )
}

export default Hero