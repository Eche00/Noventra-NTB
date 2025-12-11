import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useUserInfo } from "../../utils/userCresidentials";
import { searchproperty } from "../../utils/svg";
import { Link } from "react-router-dom";

function Dashescrows() {
    const { user } = useUserInfo();

    const escrows = user?.escrowsManagement || [];

    return (
        <div className="  pt-10 px-4 py-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Active Escrows
                </h1>

                <div className="bg-white shadow-lg rounded-2xl p-6">

                    {/* Table Controls */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="md:flex hidden items-center gap-2">
                            <span className="border border-gray-400 rounded-lg px-2 py-1 text-sm">{escrows.length}</span>

                            <span className="text-gray-700 text-sm">Total</span>
                        </div>

                        <Link to="/dashboard/create-escrow" className=" px-4 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#7065F0] transition">
                            Create Escrow
                        </Link>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-[12px]">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600">
                                    <th className="py-3 px-4 text-left">IMG</th>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Type</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {escrows.length > 0 ? (
                                    escrows.slice(0, 5).map((e, i) => (
                                        <tr key={i} className="border-t border-gray-200">
                                            <td className="py-3 px-4">
                                                <img
                                                    src={e.property?.img || "https://legaladvicebd.com/wp-content/uploads/2024/12/what-is-escrow-account-how-it-works-bangladesh.jpg"}
                                                    alt={e.title || e.property?.title || "Escrow Image"}
                                                    className="w-10 h-10 object-cover rounded-full"
                                                />
                                            </td>
                                            <td className="py-3 px-4">{String(e.title).slice(0, 5)}...</td>
                                            <td className="py-3 px-4"> ${Number(e.amount || e.property?.price || 0).toLocaleString()}</td>
                                            <td className="py-3 px-4"> {e.property ? "Property" : "Normal"}</td>
                                            <td className="py-3 px-4">{e.status || "Pending"}</td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6">
                                            <div className="animate-spin h-6 w-6 border-2 border-[#7065F0] border-t-transparent rounded-full mx-auto"></div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashescrows;
