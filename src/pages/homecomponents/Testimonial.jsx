import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Testimonial() {
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('Email sent to support')
        setEmail('')
    }
    return (
        <div>
            <main className="w-full bg-linear-to-b from-[#F7F8FC] to-white py-20 flex flex-col items-center text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
                <p className="text-gray-500 mt-2 max-w-xl">
                    See why users rely on our escrow platform every day
                </p>

                <div className="max-w-3xl mt-12">
                    <p className="md:text-[20px] text-[14px] text-[#000929] leading-relaxed">
                        “YourEscrow is the platform I rely on almost every day for secure transactions. Whether I’m buying, selling, or holding funds for a deal, the process is always smooth and transparent. Thanks for making digital transactions feel safe and stress-free, YourEscrow!”
                    </p>

                    <div className="mt-8">
                        <h4 className="font-semibold text-gray-900">Mira Culos,
                            <span className="text-gray-500  font-light"> Escrow user</span>

                        </h4>
                    </div>

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
                </div>
            </main>
            <section className="w-full bg-[#100A55] text-white py-20 px-4 flex flex-col items-center text-center">
                <p className="text-sm text-[#7065F0] font-medium">No Spam Promise</p>

                <h2 className="text-[40px] font-bold mt-2">Contact support</h2>

                <p className="text-[#D3D5DA] text-[16px] font-normal mt-2 max-w-md">
                    Encounter any issue? feel free to contact our support for help. <br /> No Spam.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-wrap p-2 items-center bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-md">
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 text-gray-800 outline-none"
                    />
                    <button

                        type="submit"
                        className="sm:w-fit w-full px-10 py-3 bg-[#7065F0] text-white text-[12px] font-bold rounded-lg hover:opacity-90 transition cursor-pointer"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-4">
                    We are here to assist you in everyway possible <span className="font-semibold">No matter the issue.</span>
                </p>
            </section>

        </div>
    )
}

export default Testimonial