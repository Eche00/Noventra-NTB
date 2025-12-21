import React from 'react'

function InvestmentsShowcase() {
    const plans = [
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }
        ,
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }
        ,
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }
        ,
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }
        ,
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }
        ,
        {

            duration: "3 Days",
            hardware: {
                cpu: "2x CPU Cores",
                gpu: "1x NVIDIA T4"
            },
            efficiency: "75% Uptime",
            blockchains: ["ETH", "BSC", "Polygon"],
            throughput: "Up to 850 TPS",
            memory: "4GB DDR4 RAM",
            storage: "100GB SSD",
            network: "1Gbps",
            cooling: "Basic Cooling System",
            market: 999,
            allocationPercentage: 30,
            currentAllocation: 30
        }

    ];
    return (
        <main className="w-full text-black py-20 flex flex-col">
            {/* Header */}
            <div className="w-full text-center mb-16">
                <p className='w-fit mx-auto px-3 py-1 text-gray-400 text-sm font-normal border-2 border-gray-300 rounded-full mb-5'>BANK ON THE GO</p>
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
                        className="relative bg-white/80 backdrop-blur-xl border border-blue-100 p-6 rounded-2xl flex flex-col gap-5 shadow-md hover:shadow-lg transition"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-700">
                                    {plan.title}
                                </h3>
                                <span className="text-sm text-gray-500 font-medium">
                                    {plan.subTitle}
                                </span>
                            </div>

                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                                {plan.allocationPercentage}%
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-blue-200 to-transparent" />

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                            {/* Duration */}
                            <div>
                                <p className="text-xs text-gray-500">Duration</p>
                                <p className="font-medium text-gray-800">{plan.duration}</p>
                            </div>

                            {/* Efficiency */}
                            <div>
                                <p className="text-xs text-gray-500">Efficiency</p>
                                <p className="font-medium text-gray-800">{plan.efficiency}</p>
                            </div>

                            {/* CPU */}
                            <div>
                                <p className="text-xs text-gray-500">CPU</p>
                                <p className="font-medium text-gray-800">{plan.hardware.cpu}</p>
                            </div>

                            {/* GPU */}
                            <div>
                                <p className="text-xs text-gray-500">GPU</p>
                                <p className="font-medium text-gray-800">{plan.hardware.gpu}</p>
                            </div>

                            {/* Memory */}
                            <div>
                                <p className="text-xs text-gray-500">Memory</p>
                                <p className="font-medium text-gray-800">{plan.memory}</p>
                            </div>

                            {/* Storage */}
                            <div>
                                <p className="text-xs text-gray-500">Storage</p>
                                <p className="font-medium text-gray-800">{plan.storage}</p>
                            </div>

                            {/* Network */}
                            <div>
                                <p className="text-xs text-gray-500">Network</p>
                                <p className="font-medium text-gray-800">{plan.network}</p>
                            </div>

                            {/* Cooling */}
                            <div>
                                <p className="text-xs text-gray-500">Cooling</p>
                                <p className="font-medium text-gray-800">{plan.cooling}</p>
                            </div>

                            {/* Blockchains (full width) */}
                            <div className="col-span-2">
                                <p className="text-xs text-gray-500">Blockchains</p>
                                <p className="font-medium text-gray-800">
                                    {plan.blockchains.join(", ")}
                                </p>
                            </div>

                            {/* Throughput (full width) */}
                            <div className="col-span-2">
                                <p className="text-xs text-gray-500">Throughput</p>
                                <p className="font-medium text-gray-800">{plan.throughput}</p>
                            </div>
                        </div>


                        {/* Footer Stats */}
                        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-xl text-sm">
                            <div>
                                <p className="text-gray-500">Market Cap</p>
                                <p className="font-semibold text-gray-900">
                                    ${Number(plan.market).toLocaleString()}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-gray-500">Current Allocation</p>
                                <p className="font-semibold text-gray-900">
                                    {plan.currentAllocation}%
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            className="mt-2 w-full py-2.5 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-600 active:scale-[0.98] transition cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>

                ))}
            </div>

        </main>
    )
}

export default InvestmentsShowcase