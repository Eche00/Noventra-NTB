import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
import React, { useState, useRef, useEffect } from "react";
import { useUserInfo } from "../../utils/userCresidentials";
import BalanceMessages from "../BalanceMessages";
import FundInput from "../FundInput";
import Transactions from "./Transactions";
import DepositModal from "./DepositModal";

function Deposit() {
    const [showWidget, setShowWidget] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState("btc");
    const [amount, setAmount] = useState(100);
    const [email, setEmail] = useState('');
    const [wallet, setWallet] = useState('');
    const { user, loading } = useUserInfo();
    const [balanceMessage, setBalanceMessage] = useState('');
    const [fundEscrow, setFundEscrow] = useState(false);
    const [deposit, setDeposit] = useState(false);
    const widgetRef = useRef(null);

    const handleFundEscrow = () => {
        if (!user || user.balance <= 0) {
            setBalanceMessage("PLEASE DEPOSIT INTO YOUR ACCOUNT BEFORE FUNDING ESCROW.");
            return;
        }
        setFundEscrow(true);
    };

    const handleDepositClick = () => {
        if (!amount || !email || !wallet) {
            alert("Please fill all fields");
            return;
        }
        setShowWidget(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-[90%] mx-auto space-y-8">

                {/* Balance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Balance</h2>
                        <p className="text-3xl font-bold text-gray-900">${loading ? '0.00' : Number(user?.balance).toLocaleString()}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Deposit</h2>
                        <p className="text-3xl font-bold text-gray-900">${loading ? '0.00' : Number(user?.totalDeposit).toLocaleString()}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setDeposit(true)}
                        className=" min-w-[250px] mt-2 px-4 py-3 bg-[#7065F0] text-white rounded-lg hover:bg-[#5a54c6] transition cursor-pointer"
                    >
                        Deposit
                    </button>
                </div>
                {/* Custom Deposit Form */}
                {/* <div className="bg-white rounded-xl p-6 shadow-lg mt-8 max-w-md mx-auto space-y-4">
                    <input
                        type="number"
                        placeholder="Amount in USD"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="BTC Wallet Address"
                        value={wallet}
                        onChange={e => setWallet(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <button
                        onClick={handleDepositClick}
                        className="w-full mt-3 bg-[#7065F0] text-white py-3 rounded-xl font-medium hover:bg-[#5a54c6] transition"
                    >
                        Pay with Card
                    </button>
                </div> */}
                {deposit &&
                    <DepositModal setDeposit={setDeposit} />
                }

                {/* MoonPay iframe */}
                {showWidget && (
                    <div ref={widgetRef} className="mt-4">
                        <MoonPayBuyWidget
                            variant="overlay"
                            baseCurrencyAmount={amount}
                            baseCurrencyCode="usd"
                            defaultCurrencyCode={selectedCrypto}
                            customerEmail={email}
                            walletAddress={wallet}
                            visible
                        />
                    </div>
                )}

            </div>


            <Transactions />
        </div>
    );
}

export default Deposit;
