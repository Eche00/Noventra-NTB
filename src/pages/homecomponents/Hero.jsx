import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='max-w-[90%]  w-full mx-auto z-10'>
      <main className='flex mm:flex-row flex-col-reverse gap-4'>
        <motion.section initial={{ scale: 0.85, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            stiffness: 220,
            damping: 22,
            duration: 1,
            delay: 0.2
          }} className='relative flex flex-col flex-1 bg-blue-700/30 h-[80vh] rounded-4xl overflow-hidden'>
          <div className='flex flex-col gap-8 text-[#000929]  font-bold md:max-w-[544px] w-[90%] md:mx-0 mx-auto z-30'>
            <div className='flex flex-wrap items-center justify-start gap-2 p-4 z-30'>
              <motion.button initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ delay: 1, duration: 0.5 }} viewport={{ once: true }} className=' py-1 px-3 bg-white text-black shadow-2xl rounded-full text-[13px]'>Efficiency</motion.button>
              <motion.button initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ delay: 1.5, duration: 0.5 }} viewport={{ once: true }} className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Reliability</motion.button>
              <motion.button initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ delay: 2, duration: 0.5 }} viewport={{ once: true }} className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Large Coverage</motion.button>
              <motion.button initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ delay: 2.5, duration: 0.5 }} viewport={{ once: true }} className=' py-1 px-3 bg-white/20 text-white shadow-2xl rounded-full text-[13px] '>Value</motion.button>
            </div>
            <h1 className='text-[#000929] md:text-[54px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans bg-white bg-clip-text sm:pl-5'>Smarter  <span className='text-blue-700'> banking, </span> built for your life.</h1>
            <h3 className='md:text-[18px] text-[16px] font-normal md:text-start text-center sm:pl-5 text-gray-900'>We empower clients to act on insights by weaving economic analysis into their core strategy and budgeting processes.</h3>

          </div>

          <div className='flex flex-1 items-end justify-start z-30'>
            <img src="/hero.webp" className='w-[60%] max-h-[300px] object-cover rounded-tr-2xl' alt="" />
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
        <motion.section initial={{ scale: 0.85, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            stiffness: 220,
            damping: 22,
            duration: 1,
            delay: 0.2
          }}
          className='relative flex flex-col flex-1 sm:bg-blue-700/30 h-[80vh] rounded-4xl overflow-hidden'>
          <div className='flex flex-col gap-4 p-4'>
            <motion.h1 initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                duration: 2
              }} viewport={{ once: true }} class="text-3xl md:text-4xl font-bold text-blue-700 leading-tight ">Bank smarter, not harder, anywhere & anytime.</motion.h1>
            <p class="text-sm md:text-xl text-gray-700 leading-relaxed ">Instant transfers, digital loans, and real-time insights turn your financial plans into achievements without stepping into a branch.</p>
            <section className='md:flex flex-1 hidden items-center justify-start gap-2 '>
              <Link to="/signin" className=' py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] '>Log in</Link>
              <Link to="/signup" className=' py-1.5 px-5 bg-white/20 text-white rounded-full text-[13px] '>Create an account</Link>
            </section>
          </div>
          <div className='flex flex-1 items-end justify-end z-30 border-t-10 border-blue-700 pt-4 '>
            <img src="/hero2.png" className='sm:block hidden w-[70%] h-full object-left object-cover rounded-4xl border-10  border-white' alt="" />
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default Hero