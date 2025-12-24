import React, { useState } from "react";

const steps = [
    "Set up transfer",
    "Confirm details",
    "Transferring funds",
    "Completed",
];

export default function Transfer() {
    const [currentStep, setCurrentStep] = useState(0);
    const [amount, setAmount] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [currencyRate] = useState(16.84); // USD → PESO example

    const isCompleted = currentStep === steps.length - 1;

    const parsedAmount = Number(amount || 0);
    const convertedAmount = (parsedAmount * currencyRate).toFixed(2);

    const canProceed =
        parsedAmount > 0 && accountNumber.length >= 8;

    const handleNext = () => {
        if (currentStep === 0 && !canProceed) return;
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">

                {/* Progress Bar */}
                <div className="flex gap-2 mb-6">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 flex-1 rounded-full ${index <= currentStep ? "bg-blue-600" : "bg-gray-200"
                                }`}
                        />
                    ))}
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button className="text-gray-600 disabled:cursor-not-allowed" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>← Go back</button>
                </div>

                {/* Title */}
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Transaction details</h1>
                        <p className="text-gray-500 text-sm">
                            Enter the amount and recipient account.
                        </p>
                    </div>

                    <div className="text-2xl font-bold">
                        ${parsedAmount || "0"} USD
                    </div>
                </div>

                {/* Body */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Timeline */}
                    <div className="space-y-5">
                        {steps.map((label, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 ${index < currentStep
                                        ? "bg-blue-600 border-blue-600 text-white"
                                        : index === currentStep
                                            ? "border-blue-600 text-blue-600"
                                            : "border-gray-300 text-gray-300"
                                        }`}
                                >
                                    {index < currentStep ? "✓" : ""}
                                </div>

                                <p
                                    className={`font-medium ${index <= currentStep
                                        ? "text-black"
                                        : "text-gray-400"
                                        }`}
                                >
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="space-y-6">

                        {/* STEP 1 — INPUT */}
                        {currentStep === 0 && (
                            <>
                                <div>
                                    <label className="text-sm text-gray-500">
                                        Amount (USD)
                                    </label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full mt-1 p-3 border rounded-xl focus:outline-blue-600"
                                        placeholder="Enter amount"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500">
                                        Recipient Account Number
                                    </label>
                                    <input
                                        type="text"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        className="w-full mt-1 p-3 border rounded-xl focus:outline-blue-600"
                                        placeholder="Enter account number"
                                    />
                                </div>
                            </>
                        )}

                        {/* STEP 2 — CONFIRM */}
                        {currentStep >= 1 && (
                            <>
                                <div className="border rounded-xl p-4 flex justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">You send</p>
                                        <p className="font-semibold">${parsedAmount} USD</p>
                                        <p className="text-xs text-gray-400">
                                            From checking account
                                        </p>
                                    </div>
                                    🇺🇸
                                </div>

                                <div className="border rounded-xl p-4 flex justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Recipient will receive
                                        </p>
                                        <p className="font-semibold">
                                            ${convertedAmount} PESO
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Account: {accountNumber}
                                        </p>
                                    </div>
                                    🇲🇽
                                </div>
                            </>
                        )}

                        {/* STEP 4 — SUCCESS */}
                        {isCompleted && (
                            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-center font-medium">
                                🎉 Transfer Successful
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleNext}
                    disabled={currentStep === 0 && !canProceed}
                    className={`mt-8 w-full py-4 rounded-xl font-semibold transition ${currentStep === 0 && !canProceed
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                >
                    {isCompleted ? "Transfer Complete" : "Continue"}
                </button>
            </div>
        </div>
    );
}
