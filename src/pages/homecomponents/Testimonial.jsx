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
    const HomeReview = [
        {
            img: '/logomain.png',
            message:
                "Zion Tech Hub has helped me transition into data analytics smoothly!",
        },
        {
            img: '/logomain.png',
            message:
                "Thanks to the comprehensive training at Zion Tech Hub, I was able to secure a job shortly after completing the course.",
        },
        {
            img: '/logomain.png',
            message:
                "What I love most about Zion Tech Hub team is their receptiveness to feedback and consideration of the learners’ requests.",
        },
        {
            img: '/logomain.png',
            message:
                "I had a fantastic experience in Zion Tech Hub mentorship program. The program was well structured & the mentor was supportive.",
        },
        {
            img: '/logomain.png',
            message:
                "This training in data analytics has had a profound impact on my professional journey! In just a few weeks, I went from a newbie to solution-provider.",
        },
        {
            img: '/logomain.png',
            message:
                "Beyond technical skills, Ndoma’s emphasis on leveraging LinkedIn for job networking was invaluable!",
        },
        {
            img: '/logomain.png',
            message:
                "One amazing thing about Zion Tech Hub is giving participants the opportunity to learn from different repertoire of skills and perspective.",
        },
        {
            img: '/logomain.png',
            message:
                "Joining Zion Tech Hub is one of the best decision I made in my career. I’ve learnt so much in a short period of time.",
        },
    ];
    return (
        <div>
            <main className="w-full bg-blue-700/20 py-20 flex flex-col items-center text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
                <p className="text-gray-500 mt-2 max-w-xl">
                    See why users rely on our escrow platform every day
                </p>

                <motion.div
                    className="  top-[130px] z-30 flex  gap-6   "
                    ref={ref}
                    style={{ x: xTranslation }}>
                    {[...HomeReview, ...HomeReview].map((review) => (
                        <ReviewCard review={review} />
                    ))}
                </motion.div>
                <div className="flex items-center justify-center gap-4 mt-10">
                    <div className='w-fit h-fit border-2 border-l-[#E8E6F9]  border-[#7065F0] p-1 rounded-full'>
                        <img
                            src="https://img.freepik.com/free-photo/young-woman-with-short-curly-hair-colorful-shirt-looking-confused-standing-white-wall_141793-29361.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="user"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                    </div>
                    <img
                        src="https://thumbs.dreamstime.com/b/handsome-african-american-man-beard-having-charming-smile-holding-hands-heart-wanting-to-show-love-sympathy-isolated-117964327.jpg"
                        alt="user"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <img
                        src="https://img.buzzfeed.com/buzzfeed-static/static/2023-05/22/16/asset/ca74781d259d/sub-buzz-1020-1684773196-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
                        alt="user"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                </div>
            </main>
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