import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../utils/userCresidentials";
import BalanceMessages from "../BalanceMessages";
import FundInput from "../FundInput";
import { Money, MoneyOff, Wallet } from "@mui/icons-material";
import Dashescrows from "./Dashescrow";
import Loader from "../../components/Loader";
import Transactions from "./Transactions";

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
                        {/* Main Wallet Section */}
                        <div className="bg-white rounded-2xl shadow p-6 space-y-6">


                            {/* user + balance */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className=" bg-linear-to-br from-blue-700/50 to-white relative overflow-hidden rounded-xl border border-gray-200 p-4 shadow-sm">

                                    {/* Subtle Accent */}
                                    <div className="absolute -top-6 -right-6 w-24 min:h-24 bg-blue-700/10 rounded-full " />

                                    <div className="relative flex flex-wrap items-center justify-between gap-4">

                                        {/* Left Section */}
                                        <div className="flex items-center gap-3">
                                            {/* Avatar */}
                                            <div className="w-11 h-11 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold uppercase shadow-sm">
                                                {user?.username?.slice(0, 2)}
                                            </div>

                                            {/* User Info */}
                                            <div className="leading-tight">
                                                <h2 className="text-sm font-semibold text-gray-800">
                                                    {user?.username}
                                                </h2>
                                                <p className="text-[11px] text-gray-500">
                                                    Account Profile
                                                </p>
                                            </div>
                                        </div>

                                        {/* Balance */}
                                        <div className="md:text-right text-start">
                                            <p className="text-xs text-gray-500">Balance</p>
                                            <p className="text-lg font-semibold text-gray-900">
                                                ${loading ? '0.00' : Number(Number(user?.balance).toFixed(2)).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Bar */}
                                    <div className="mt-3 flex flex-wrap justify-between items-center text-[11px] text-gray-600 bg-gray-100/70 rounded-md px-3 py-2">
                                        <span>Account No:</span>
                                        <span className="font-medium text-gray-800 tracking-wide">
                                            36739390029282727
                                        </span>
                                    </div>
                                </div>


                                {/* General Wallet */}
                                <div className="rounded-xl p-5 bg-white shadow-sm border border-gray-200">
                                    <div className="flex gap-4 justify-between">
                                        {/* Deposit */}
                                        <Link
                                            to="/dashboard/deposit"
                                            className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 transition"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                                <Money fontSize="medium" />
                                            </div>
                                            <span className="text-sm font-semibold">Deposit</span>
                                        </Link>

                                        {/* Withdraw */}
                                        <Link
                                            to="/dashboard/withdraw"
                                            className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg bg-linear-to-br from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 transition"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                                                <MoneyOff fontSize="medium" />
                                            </div>
                                            <span className="text-sm font-semibold">Withdraw</span>
                                        </Link>
                                    </div>
                                </div>







                            </div>


                            {/* Small Stats Boxes */}
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Credit vs Debit
                                    </h3>
                                    <span className="text-[11px] text-gray-500">
                                        Last 7 days
                                    </span>
                                </div>

                                {/* Graph */}
                                <div className="flex items-end justify-between h-32 gap-2">
                                    {[
                                        { day: 'Mon', credit: 60, debit: 40 },
                                        { day: 'Tue', credit: 80, debit: 50 },
                                        { day: 'Wed', credit: 40, debit: 30 },
                                        { day: 'Thu', credit: 90, debit: 70 },
                                        { day: 'Fri', credit: 70, debit: 45 },
                                        { day: 'Sat', credit: 50, debit: 20 },
                                        { day: 'Sun', credit: 65, debit: 35 },
                                    ].map((item) => (
                                        <div key={item.day} className="flex flex-col items-center gap-1 w-full">

                                            {/* Bars */}
                                            <div className="flex items-end gap-1 h-full">
                                                <div
                                                    className="w-2 rounded bg-green-500"
                                                    style={{ height: `${item.credit}%` }}
                                                />
                                                <div
                                                    className="w-2 rounded bg-red-500"
                                                    style={{ height: `${item.debit}%` }}
                                                />
                                            </div>

                                            {/* Label */}
                                            <span className="text-[10px] text-gray-500">
                                                {item.day}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Legend */}
                                <div className="mt-3 flex items-center gap-4 text-[11px] text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        Credit
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                                        Debit
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*  Transactions */}
                        <div className="mt-4  ">
                            <Transactions />


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
