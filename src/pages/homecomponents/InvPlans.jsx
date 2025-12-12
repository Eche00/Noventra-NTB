import React from "react";

export default function InvPlans() {
    const plans = [
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
        {
            title: "Bitcoin",
            subTitle: "BTC",
            percentage: 30,
            current: 30,
            market: 999,
        },
    ];
    return (
        <main className="w-full text-black py-20 flex flex-col">
            {/* Header */}
            <div className="w-full text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    We make it easy for
                    <span className="text-blue-700"> our customers</span>.
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    What our customers are saying about us, real stories from people who found homes faster, easier, and with less stress.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-[90%] mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-blue-700/30 p-6 rounded-xl flex flex-col text-white gap-4 "
                    >
                        <div className="flex flex-col">
                            <h3 className="flex items-center justify-between gap-4 text-blue-700 text-xl font-semibold">{plan.title} <span className="px-3 py-1 bg-blue-700/20 text-blue-700 text-xs font-normal rounded-full">{plan.percentage}</span></h3>
                            <span className="text-sm text-gray-800 font-bold">{plan.subTitle}</span>
                        </div>
                        <div className="space-y-2 text-sm rounded-t-lg text-black">
                            <p className="flex  items-center justify-between gap-1">
                                <span className="text-gray-700">Current Price:</span>{" "}
                                <span className="font-medium">${Number(plan.current).toLocaleString()}</span>
                            </p>
                            <p className="flex  items-center justify-between gap-1 mt-5">
                                <span className="text-gray-700">Market Cap:</span>{" "}
                                <span className="font-medium">
                                    {plan?.max === 10000000000 ? 'Unlimited' : '$' + Number(plan.market).toLocaleString()}
                                </span>
                            </p>

                        </div>



                        {/* Button */}
                        <button
                            className="mt-2 w-full py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-700/50 transition cursor-pointer disabled:cursor-not-allowed disabled:bg-[#68FCC6]/50">
                            Start Trade
                        </button>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-12 text-center w-full max-w-4xl">
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
