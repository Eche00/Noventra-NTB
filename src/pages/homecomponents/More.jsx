import React from "react";

export default function More() {
    return (
        <main className="w-full bg-[#100A55] text-white py-20 px-6 flex flex-col items-center">
            {/* Header */}
            <div className="max-w-5xl w-full text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    We make it easy for
                    <span className="text-[#7065F0]"> our customers</span>.
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    What our customers are saying about us, real stories from people who found homes faster, easier, and with less stress.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-20">
                {/* Card 1 */}
                <div className="bg-[#3c3d6d] p-8 rounded-lg shadow-xl">
                    <div className="flex items-baseline gap-2"><img
                        src="https://img.freepik.com/free-photo/headshot-creative-smart-handsome-redhead-guy-with-bristle-glasses-blue-t-shirt-rubbing-beard-chin-gazing-with-smirk-having-great-plan-idea-gray-wall_176420-27584.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="profile"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                        <h2 className="text-[16px] font-semibold ">Daniel U.</h2>
                    </div>
                    <p className="text-gray-300 text-sm">
                        “This platform made my home search unbelievably easy. I toured multiple homes online and connected with landlords instantly.”
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#FFFFFF] text-[#0a0c48] p-8 rounded-lg shadow-xl">
                    <div className="flex items-baseline gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%2C_unedited%29.jpg"
                            alt="profile"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <h2 className="text-[16px] font-semibold ">Grace A.</h2>

                    </div>
                    <p className="text-gray-600 text-sm">
                        “I found a great deal within days! CEET helped me save my favorites and get alerts before others even saw the listing.”
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#7065F0] p-8 rounded-lg shadow-xl text-white">
                    <div className="flex items-baseline gap-2"><img
                        src="https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg"
                        alt="profile"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                        <h2 className="text-[16px] font-semibold ">Michael T.</h2>
                    </div>
                    <p className="text-gray-200 text-sm">
                        “Getting my rental documents was super fast and stress-free. Everything I needed was available in one place.”
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center w-full max-w-4xl">
                <div>
                    <h3 className="text-3xl font-bold">7.4%</h3>
                    <p className="text-gray-400 text-sm">Property Return Rate</p>
                </div>

                <div className="h-10 w-px bg-gray-600 hidden md:block" />

                <div>
                    <h3 className="text-3xl font-bold">3,856</h3>
                    <p className="text-gray-400 text-sm">Property in Sell & Rent</p>
                </div>

                <div className="h-10 w-px bg-gray-600 hidden md:block" />

                <div>
                    <h3 className="text-3xl font-bold">2,540</h3>
                    <p className="text-gray-400 text-sm"> Completed Transactions</p>
                </div>
            </div>
        </main>
    );
}
