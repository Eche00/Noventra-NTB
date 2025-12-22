import { Check, Circle, Key, MonetizationOn } from "@mui/icons-material"
import { motion } from "framer-motion"

function Aboutus() {
    return (
        <div className="sm:w-[85%] w-[90%] mx-auto py-[100px] ">
            <motion.p initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }} className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full mb-5 uppercase hover:scale-105 cursor-default'>About us</motion.p>


            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ABOUT THE BANK */}
                <section className="py-20 flex flex-col lg:flex-row items-center gap-14">
                    {/* Text */}
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6, ease: "easeOut",
                            delay: 0.45
                        }} viewport={{ once: true }} className="flex flex-col gap-5 lg:w-1/2">
                        <span className="text-blue-700 font-semibold uppercase tracking-widest sm:text-4xl text-2xl">
                            About Our Bank
                        </span>

                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight max-w-sm">
                            Modern banking built for real life.
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed max-w-md">
                            We provide secure, fast, and transparent digital banking solutions for
                            individuals and businesses — designed for everyday use.
                        </p>
                    </motion.div>

                    {/* Image Card */}
                    <motion.div initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                            duration: 2,
                            delay: 0.45
                        }} viewport={{ once: true }} className="lg:w-1/2 w-full">
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/about1.png"
                                className="w-full h-[480px] object-cover object-bottom"
                                alt=""
                            />

                            {/* Overlay */}
                            <motion.section initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6, ease: "easeOut",
                                    delay: 1
                                }} viewport={{ once: true }} className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-linear-to-t from-blue-700 to-blue-700/40 p-8 rounded-t-3xl">
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    Smart Digital Banking <MonetizationOn />
                                </h3>

                                <p className="text-white/90 text-sm sm:text-base mb-6">
                                    Manage your money effortlessly with real-time access, powerful tools,
                                    and bank-grade security.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/90 rounded-xl p-4 text-sm font-medium">
                                        <p className="text-gray-800 font-semibold mb-1">Instant Transfers</p>
                                        <p className="text-gray-600">
                                            Send & receive funds in seconds
                                        </p>
                                    </div>

                                    <div className="bg-white/90 rounded-xl p-4 text-sm font-medium">
                                        <p className="text-gray-800 font-semibold mb-1">Secure Wallets</p>
                                        <p className="text-gray-600">
                                            Protected balances & fraud control
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        </div>

                        <p className="mt-6 text-gray-500 text-base max-w-md">
                            Our platform simplifies banking while maintaining the highest standards
                            of reliability, security, and transparency.
                        </p>
                    </motion.div>
                </section>

                {/* MISSION & VALUES */}
                <section className="py-20 flex flex-col lg:flex-row-reverse items-center gap-14">
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6, ease: "easeOut",
                            delay: 0.45
                        }} viewport={{ once: true }} className="flex flex-col gap-5 lg:w-1/2 lg:text-right">
                        <span className="text-blue-700 font-semibold uppercase tracking-widest sm:text-4xl text-2xl">
                            Our Mission
                        </span>

                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight max-w-sm lg:ml-auto">
                            Banking that puts people first.
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed max-w-md lg:ml-auto">
                            We empower users with simple, transparent tools to control, grow,
                            and protect their finances.
                        </p>
                    </motion.div>

                    <motion.div initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                            duration: 2,
                            delay: 0.45
                        }} viewport={{ once: true }} className="lg:w-1/2 w-full">
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/about2.webp"
                                className="w-full h-[480px] object-cover"
                                alt=""
                            />

                            <motion.section initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6, ease: "easeOut",
                                    delay: 1
                                }} viewport={{ once: true }} className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-linear-to-t from-blue-700 to-blue-700/40 p-8 rounded-t-3xl">
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    Trust & Transparency <Key />
                                </h3>
                                <p className="text-white/90 text-sm sm:text-base">
                                    Built on ethical practices, strong values, and modern financial
                                    technology.
                                </p>
                            </motion.section>
                        </div>

                        <p className="mt-6 text-gray-500 text-base max-w-md">
                            Our mission is to remove complexity from banking and give users confidence
                            in every transaction they make.
                        </p>
                    </motion.div>
                </section>
            </main>


        </div>
    )
}

export default Aboutus