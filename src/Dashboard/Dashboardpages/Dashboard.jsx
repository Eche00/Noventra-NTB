import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../utils/userCresidentials";
import BalanceMessages from "../BalanceMessages";
import FundInput from "../FundInput";
import { Wallet } from "@mui/icons-material";
import Dashescrows from "./Dashescrow";
import Loader from "../../components/Loader";

function Dashboard() {
    const { user, loading, difference, changeText } = useUserInfo();
    const [balanceMessage, setBalanceMessage] = useState('');
    const [fundEscrow, setFundEscrow] = useState(false);


    const handleFundEscrow = () => {
        if (!user || user.balance <= 0) {
            setBalanceMessage("PLEASE DEPOSIT INTO YOUR ACCOUNT BEFORE FUNDING ESCROW.");
            return;
        }
        setFundEscrow(true)
    };

    return (
        <div>
            {user ?
                <div className="min-h-screen bg-gray-100 py-10 px-4">
                    <div className="max-w-6xl mx-auto space-y-8">

                        {/* Header */}
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Welcome, <span className=" capitalize">{loading ? '' : user?.username || 'customer'}</span>

                        </h1>

                        {/* Main Wallet Section */}
                        <div className="bg-white rounded-2xl shadow p-6 space-y-6">

                            {/* Wallet Title */}
                            <p className="text-sm font-semibold text-gray-500">WALLETS</p>

                            {/* Wallets */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* General Wallet */}
                                <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Balance</h2>

                                    <p className="text-3xl font-bold text-gray-900">${loading ? '0.00' : Number(Number(user?.balance).toFixed(2)).toLocaleString()}</p>
                                    <p className="text-green-600 text-xs mt-1 flex items-baseline justify-between"><span
                                        className={
                                            difference > 0
                                                ? "text-green-600"
                                                : difference < 0
                                                    ? "text-red-600"
                                                    : "text-gray-500"
                                        }
                                    >
                                        {changeText}
                                    </span>
                                        <Link to="/dashboard/deposit" className=" px-4 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#7065F0] transition">
                                            Deposit
                                        </Link>
                                    </p>


                                </div>
                                {/* Escrow Wallet */}
                                <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Escrow Balance</h2>

                                    <p className="text-3xl font-bold text-gray-900">${loading ? '0.00' : Number(Number(user?.escrowBalance).toFixed(2)).toLocaleString()}</p>
                                    <p className="text-[#7065F0] text-xs mt-1 flex items-center justify-between">
                                        <Wallet />
                                        <button onClick={handleFundEscrow} className=" px-4 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#7065F0] transition">
                                            Fund
                                        </button>
                                    </p>

                                </div>



                            </div>


                            {/* Small Stats Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

                                {/* Total Deposit */}
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                                    <p className="text-xs font-medium text-gray-500">TOTAL DEPOSIT</p>
                                    <h3 className="text-2xl font-bold text-gray-800 mt-2">${loading ? '0.00' : Number(Number(user?.totalDeposit).toFixed(2)).toLocaleString()}</h3>
                                </div>

                                {/* Total Withdrawal */}
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                                    <p className="text-xs font-medium text-gray-500">TOTAL WITHDRAWAL</p>
                                    <h3 className="text-2xl font-bold text-gray-800 mt-2">${loading ? '0.00' : Number(Number(user?.totalWithdrawal).toFixed(2)).toLocaleString()}</h3>
                                </div>

                                {/* Total Debit */}
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                                    <p className="text-xs font-medium text-gray-500">TOTAL DEBIT</p>
                                    <h3 className="text-2xl font-bold text-gray-800 mt-2">${loading ? '0.00' : Number(Number(user?.totalDebit).toFixed(2)).toLocaleString()}</h3>
                                </div>

                            </div>
                        </div>

                        {/* Active Escrow */}
                        <div className="bg-white rounded-2xl shadow ">
                            <div className="mt-4  ">
                                {user?.escrowsManagement.length > 0 ? <Dashescrows />
                                    : <p className="p-6 text-center text-gray-600 flex flex-col items-center justify-center border border-gray-400 rounded-xl">You do not have an active escrow at the moment.
                                        <div className="mt-4">
                                            <Link to="/dashboard/create-escrow" className=" w-full bg-[#7065F0] text-white py-2 px-4 rounded-xl font-medium text-sm hover:bg-[#7065F0] ">Create Escrow</Link>
                                        </div></p>}

                            </div>
                        </div>


                    </div>
                    {/* Show modal if there’s a balance message */}
                    {balanceMessage && (
                        <BalanceMessages
                            message={balanceMessage}
                            onClose={() => setBalanceMessage('')}
                        />
                    )}
                    <FundInput
                        open={fundEscrow}
                        onClose={() => setFundEscrow(false)}
                    />
                </div> : <Loader />}
        </div>
    );
}

export default Dashboard;
