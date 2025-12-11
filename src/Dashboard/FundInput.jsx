import React, { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
import { useUserInfo } from "../utils/userCresidentials";
import { useNavigate } from "react-router-dom";

function FundInput({ open, onClose }) {
    const { user } = useUserInfo();
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    if (!open) return null;

    const handleFunding = async () => {
        const value = Number(amount);

        if (!value || value <= 0) return toast.error("Enter a valid amount");
        if (value > user.balance) return toast.error("Insufficient balance");

        try {
            setLoading(true);

            const userRef = doc(db, "users", user.uid);

            const newBalance = Number(user.balance) - value;
            const newEscrowBalance = Number(user.escrowBalance) + value;

            // Update balances
            await updateDoc(userRef, {
                balance: newBalance,
                escrowBalance: newEscrowBalance,
            });

            // Log transaction
            const txRef = collection(db, "users", user.uid, "transactions");
            await addDoc(txRef, {
                amount: value,
                paymentMode: "USD",
                type: "escrow-fund",
                status: "success",
                date: new Date().toISOString(),
            });

            toast.success("Escrow funded successfully");
            navigate("/dashboard/transactions");

            setAmount("");
            onClose();
        } catch (error) {
            console.error("Funding error:", error);
            toast.error("Failed to fund escrow");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => !loading && onClose()}
        >
            <div
                className="bg-linear-to-b from-[#E0DEF7] to-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => !loading && onClose()}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
                    disabled={loading}
                >
                    ×
                </button>

                <h2 className="text-lg font-bold text-[#100A55] mb-4">
                    Fund Escrow Wallet
                </h2>

                <p className="text-gray-600 mb-3 text-sm">
                    Enter the amount you want to move from your Main Balance into your
                    Escrow Wallet.
                </p>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-[#E0DEF7] rounded-md outline-none focus:border-[#7065F0]"
                />

                <div className="mt-6 flex gap-4 justify-end">
                    <button
                        onClick={() => !loading && onClose()}
                        disabled={loading}
                        className={`bg-white gap-2 w-fit px-5 h-12 text-[#7065F0] md:text-[18px] text-[10px] font-bold border-2 border-[#E0DEF7] rounded-md cursor-pointer ${loading && "opacity-50 cursor-not-allowed"
                            }`}
                    >
                        Close
                    </button>

                    <button
                        onClick={handleFunding}
                        disabled={loading}
                        className={`bg-[#7065F0] text-white px-6 h-12 rounded-md font-semibold flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#584fd1] cursor-pointer"
                            }`}
                    >
                        {loading ? (
                            <>
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin "></div>
                                Funding...
                            </>
                        ) : (
                            "Fund"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FundInput;
