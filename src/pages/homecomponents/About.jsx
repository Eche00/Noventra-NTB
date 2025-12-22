import { Link } from 'react-router-dom'
import ShieldIcon from '@mui/icons-material/Shield';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AllOutIcon from '@mui/icons-material/AllOut';
import { motion } from 'framer-motion';

function About() {
    return (
        <div>
            <main class="w-[90%] mx-auto  pb-5 ">
                <motion.p initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full mb-5 hover:scale-105 cursor-default'>BANK ON THE GO</motion.p>
                <div class=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT SIDE FEATURE GRID  */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">

                        {/* Feature 1  */}
                        <motion.div initial={{ y: 50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1, delay: 0.5,
                                delay: 0.2

                            }} class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><ShieldIcon /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Secure Transactions</h3>
                            <p class="text-[#4D5461] text-sm">
                                Bank with confidence using industry-grade security to protect your money and personal data.
                            </p>
                        </motion.div>

                        {/* Feature 2  */}
                        <motion.div initial={{ y: 50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1, delay: 0.5,
                                delay: 0.2

                            }} class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><ElectricBoltIcon /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Instant Transfers</h3>
                            <p class="text-[#4D5461] text-sm">
                                Send and receive money instantly, anytime, without delays or hidden charges.
                            </p>
                        </motion.div>

                        {/* Feature 3  */}
                        <motion.div initial={{ y: 50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1, delay: 0.5,
                                delay: 0.2

                            }} class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><RemoveCircleIcon /></span>
                            <h3 class="text-xl font-semibold text-blue-700"> Low Fees
                            </h3>
                            <p className="text-[#4D5461] text-sm">
                                Enjoy transparent pricing with minimal fees—no unnecessary charges or surprises.
                            </p>
                        </motion.div>

                        {/* Feature 4  */}
                        <motion.div initial={{ y: 50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1, delay: 0.5,
                                delay: 0.2

                            }} class="flex flex-col gap-3 bg-blue-700/20 p-4 rounded-2xl">
                            <span className=' text-blue-700 w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center'><AllOutIcon /></span>
                            <h3 class="text-xl font-semibold text-blue-700">Overall Control</h3>
                            <p class="text-[#4D5461] text-sm">
                                Track balances, manage spending, and control your account—all from one dashboard.</p>
                        </motion.div>

                    </div>
                    {/* RIGHT LARGE CARD  */}
                    <motion.div initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                            duration: 2
                        }} viewport={{ once: true }} class="bg-linear-to-b from-blue-700/50 to-[#E0DEF700]  rounded-2xl overflow-hidden   ">
                        <div className=' pt-8 md:px-10 px-6 flex flex-col gap-4'>
                            <h1 class="text-[32px] font-bold text-blue-700 md:leading-[120%] leading-[90%]">
                                Built to simplify <br /> modern banking
                            </h1>

                            <p class="text-[16px] text-[#100A55] mt-2 leading-[120%] ">
                                We’re creating a secure, seamless digital banking experience that gives you
                                full control of your money, anytime and anywhere.
                            </p>

                            <Link to="/about" className="py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] w-fit">
                                More
                            </Link>
                        </div>

                        <div className='flex items-end justify-end w-full sm:mt-0 mt-5'>
                            {/* {aboutsvg} */}
                            <img src="/hero.webp" className='max-w-[360px] max-h-[254px] w-full h-full rounded-tl-2xl' alt="" />
                        </div>
                    </motion.div>

                </div>
            </main>

        </div>
    )
}

export default About