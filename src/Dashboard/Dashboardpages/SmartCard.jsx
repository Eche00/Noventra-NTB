import React, { useState } from "react";


function SmartCard() {
    const [cardType, setCardType] = useState("");
    const [billingAddress, setBillingAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            cardType,
            billingAddress,
        });
    };
    return (
        <div className="pt-5 flex flex-col lg:flex-row items-center w-full gap-4 ">

            {/* Left: Card Info */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 space-y-6 relative sm:w-full w-[90%] mx-auto px-4"
            >

                {/* Title */}
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                    Virtual Card
                </h2>

                {/* Card Type */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Card Type
                    </label>
                    <select
                        value={cardType}
                        onChange={(e) => setCardType(e.target.value)}
                        required
                        className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Select card type</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="verve">Verve</option>
                    </select>
                </div>

                {/* Billing Address */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Billing Address
                    </label>
                    <textarea
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                        required
                        rows={4}
                        placeholder="Enter your billing address"
                        className="w-full rounded-xl border border-gray-300 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition w-full sm:w-auto"
                >
                    Apply Now
                    <span className="text-lg">→</span>
                </button>
            </form>


            {/* Right: Card Preview */}
            <div className="flex-1 relative flex items-center justify-center ">


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
    )
}

export default SmartCard