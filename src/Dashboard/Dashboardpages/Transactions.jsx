import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useUserInfo } from "../../utils/userCresidentials";

function Transactions() {
    const { user } = useUserInfo();
    const [activeTab, setActiveTab] = useState("all");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch transactions from Firestore
    const fetchTransactions = async () => {
        if (!user?.uid) return;
        setLoading(true);

        try {
            const txRef = collection(db, "users", user.uid, "transactions");
            const snap = await getDocs(txRef);

            const list = snap.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .sort((a, b) => new Date(b.date) - new Date(a.date));


            setTransactions(list);
        } catch (error) {
            console.error("Transaction fetch error:", error);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchTransactions();
    }, [user?.uid]);

    // Filter based on tab
    const filteredRows =
        activeTab === "all"
            ? transactions
            : transactions.filter((t) => t.type === activeTab);

    return (
        <div className=" bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Transaction Records
                </h1>

                <div className="bg-white shadow-lg rounded-2xl p-6">



                    {/* Table Controls */}
                    <div className="flex mm:flex-row flex-col justify-between mm:items-center mb-4 gap-4">
                        {/* Tabs */}

                        <div className="flex flex-wrap gap-3 ">
                            {[
                                { id: "all", label: "All" },
                                { id: "deposit", label: "Deposit" },
                                { id: "withdrawal", label: "Withdrawal" },
                                { id: "escrow-fund", label: "Fund Escrow" },
                                { id: "escrow-debit", label: "Escrow Debit" },
                                { id: "escrow-refund", label: "Escrow Refund" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${activeTab === tab.id
                                        ? "bg-[#7065F0] text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex  items-center gap-2">
                            <span className="border border-gray-400 rounded-lg px-2 py-1 text-sm">{filteredRows.length}</span>

                            <span className="text-gray-700 text-sm">entries</span>
                        </div>


                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-[12px]">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600">
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Payment Mode</th>
                                    <th className="py-3 px-4 text-left">Type</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                    <th className="py-3 px-4 text-left">Date Created</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6">
                                            <div className="animate-spin h-6 w-6 border-2 border-[#7065F0] border-t-transparent rounded-full mx-auto"></div>
                                        </td>
                                    </tr>
                                ) : filteredRows.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6 text-gray-500">
                                            No records found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredRows.map((t) => (
                                        <tr key={t.id} className="border-t border-gray-200">
                                            <td className="py-3 px-4">${t.amount}</td>
                                            <td className="py-3 px-4">{t.paymentMode}</td>
                                            <td className="py-3 px-4">{t.type}</td>
                                            <td className="py-3 px-4">{t.status}</td>
                                            <td className="py-3 px-4">
                                                {new Date(t.date).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Transactions;
