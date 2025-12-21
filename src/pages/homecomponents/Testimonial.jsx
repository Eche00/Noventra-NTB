import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ReviewCard from './ReviewCard'
import { motion, animate, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

function Testimonial() {
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('Email sent to support')
        setEmail('')
    }
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const Slow_Duration = 100;
    const [duration, setDuration] = useState(Slow_Duration);


    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 24;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });
        return controls.stop;
    }, [xTranslation, width, duration]);
    const ClientTestimonials = [
        {
            img: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
            message:
                "Noventra NTB has completely changed how I manage my money. Sending and receiving funds internationally is now effortless.",
        },
        {
            img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D',
            message:
                "With Noventra NTB, I can transfer money across borders in minutes. The process is fast, secure, and reliable.",
        },
        {
            img: 'https://t3.ftcdn.net/jpg/02/43/76/54/360_F_243765470_a0hN5zuTKIonTbRGldi8KajuvhSiWvDx.jpg',
            message:
                "What I love most about Noventra NTB is the transparency. No hidden charges and real-time updates on every transaction.",
        },
        {
            img: 'https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80',
            message:
                "Using Noventra NTB has been a smooth experience. The app is intuitive, and everything I need is just a few taps away.",
        },
        {
            img: 'https://thumbs.dreamstime.com/b/portrait-young-african-american-business-woman-black-peop-isolated-white-background-people-33803836.jpg',
            message:
                "Noventra NTB gave me full control of my finances. Tracking transactions and managing my account has never been this easy.",
        },
        {
            img: 'https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740&q=80',
            message:
                "The speed of international transfers on Noventra NTB is impressive. It saves me time and stress every time I send money.",
        },
        {
            img: 'https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg',
            message:
                "Security was my biggest concern, but Noventra NTB exceeded my expectations. I feel confident banking digitally now.",
        },
        {
            img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
            message:
                "Choosing Noventra NTB was one of the best financial decisions I’ve made. It’s modern, reliable, and built for today’s banking needs.",
        },
    ];

    return (
        <div>
            <main className="w-full bg-blue-700/20 py-20 flex flex-col items-center text-center px-4 ">

                <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
                <p className="text-gray-500 mt-2 max-w-xl">
                    See why users rely on our platform every day
                </p>

                <motion.div
                    className="  top-[130px] z-30 flex  gap-6   "
                    ref={ref}
                    style={{ x: xTranslation }}>
                    {[...ClientTestimonials, ...ClientTestimonials].map((review) => (
                        <ReviewCard review={review} />
                    ))}
                </motion.div>
                <div className="flex items-center justify-center gap-4 mt-10">
                    <div className='w-fit h-fit border-2 border-l-[#E8E6F9]  border-blue-700 p-1 rounded-full'>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPZnsoh9tlFnoEK79W2lmMJBleVBBLFb81Q&s"
                            alt="user"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                    </div>
                    <img
                        src="https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
                        alt="user"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <img
                        src="https://images.pexels.com/photos/6684835/pexels-photo-6684835.jpeg"
                        alt="user"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                </div>
            </main>
            <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full mt-5 uppercase'>Virtual Card</p>
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">

                {/* Left: Card Info */}
                <div className="flex-1 space-y-6 relative sm:w-full w-[90%] mx-auto">

                    {/* Accent line */}
                    <span className="absolute -left-4 top-2 h-12 w-1 rounded-full bg-linear-to-b from-blue-600 to-indigo-500"></span>

                    {/* Title */}
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Smart
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">
                            Virtual Card
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="max-w-md text-base text-gray-600 leading-relaxed">
                        A secure, modern card crafted for seamless online payments, subscriptions,
                        and global transactions—giving you full control and peace of mind at every step.
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-4 pt-2">
                        {[
                            "Instant card issuance",
                            "Worldwide secure payments",
                            "Real-time transaction insights",
                            "One-tap freeze & unfreeze control",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-sm text-gray-700"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold">
                                    ✓
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
                        Get Your Card
                        <span className="text-lg">→</span>
                    </button>
                </div>


                {/* Right: Card Preview */}
                <div className="flex-1 relative flex items-center justify-center">

                    {/* Card Back */}
                    <div className="absolute -top-6 -right-6 w-72 h-44 rounded-2xl bg-linear-to-br from-gray-900 to-gray-700 shadow-lg"></div>

                    {/* Card Front */}
                    <div className="relative w-72 h-44 rounded-2xl bg-linear-to-br from-blue-700 to-[#9B95F5] p-5 text-white shadow-xl">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-semibold">Noventra NTB</span>
                            <span className="text-xs opacity-80">VISA</span>
                        </div>

                        <div className="mt-8 text-lg tracking-widest">
                            4532  ••••  ••••  9841
                        </div>

                        <div className="mt-6 flex justify-between text-xs">
                            <span>JOHN DOE</span>
                            <span>09 / 28</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonial