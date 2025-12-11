import React from 'react';
import { Link } from 'react-router-dom';

function BalanceMessages({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-linear-to-b from-[#E0DEF7] to-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
                >
                    ×
                </button>
                <h2 className="text-lg font-bold text-red-600 mb-4">Insufficient Balance</h2>
                <p className="text-gray-700">{message}</p>
                <div className="mt-6 flex gap-4 justify-end">

                    <button
                        onClick={onClose}
                        className="bg-white  gap-2 w-fit px-5 h-12 text-[#7065F0] md:text-[18px] text-[10px] font-bold  border-2 border-[#E0DEF7] rounded-md cursor-pointer"
                    >
                        Close
                    </button>
                    <Link to='/dashboard/deposit'
                        onClick={onClose}
                        className="bg-[#7065F0] text-white px-4 py-2 rounded-md hover:bg-[#584fd1] flex items-center"
                    >
                        Deposit
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BalanceMessages;
