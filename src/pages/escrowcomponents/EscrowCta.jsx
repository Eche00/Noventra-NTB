import { Book, Lock, Rocket, Scale } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export default function EscrowCta() {
    return (
        <div className=" w-full mx-auto rounded-3xl p-5 md:p-16 space-y-10 ">
            {/* Header */}

            <div className='flex flex-col items-center justify-center text-center max-w-[80%] mx-auto gap-4'>
                <h1 className='text-[#000929] md:text-[40px] text-[20px]  text-center font-bold leading-[90%]'>Secure, Simple & Seamless <span className='text-[#7065F0]'> <br /> Escrow Services</span></h1>
                <h3 className='md:text-[16px] text-[12px] font-normal text-center '>Protect your transactions with our trusted escrow service. We keep funds safe
                    until both parties complete their obligations, ensuring transparency and trust.</h3>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-8 text-[#001619]">
                <div className="space-y-3 p-6 bg-[#F2F3FF] rounded-2xl shadow-sm  ">
                    <h3 className="text-lg font-semibold text-[#7065F0] flex items-center justify-between"> Secure Payments <span className=" w-10 h-10 flex items-center justify-center text-[#7065F0] border-3 border-[#7065F0] rounded-full"><Lock /></span></h3>
                    <p className="text-sm text-[#4A4A4A]">Funds are safely held until all conditions are met.</p>
                </div>

                <div className="space-y-3 p-6 bg-[#F2F3FF] rounded-2xl shadow-sm ">
                    <h3 className="text-lg font-semibold text-[#7065F0] flex items-center justify-between"> Fair Transactions <span className=" w-10 h-10 flex items-center justify-center text-[#7065F0] border-3 border-[#7065F0] rounded-full"><Scale /></span></h3>
                    <p className="text-sm text-[#4A4A4A]">Both parties are protected from fraud, scams, or misunderstandings.</p>
                </div>

                <div className="space-y-3 p-6 bg-[#F2F3FF] rounded-2xl shadow-sm ">
                    <h3 className="text-lg font-semibold text-[#7065F0] flex items-center justify-between"> Transparent Process <span className=" w-10 h-10 flex items-center justify-center text-[#7065F0] border-3 border-[#7065F0] rounded-full"><Book /></span></h3>
                    <p className="text-sm text-[#4A4A4A]">Every action is tracked clearly from deposit to release.</p>
                </div>

                <div className="space-y-3 p-6 bg-[#F2F3FF] rounded-2xl shadow-sm ">
                    <h3 className="text-lg font-semibold text-[#7065F0] flex items-center justify-between"> Fast & Easy Setup <span className=" w-10 h-10 flex items-center justify-center text-[#7065F0] border-3 border-[#7065F0] rounded-full"><Rocket /></span></h3>
                    <p className="text-sm text-[#4A4A4A]">Create an escrow agreement in minutes—no stress, no delays.</p>
                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
                <Link to="/dashboard/create-escrow" className="px-10 py-4 bg-[#7065F0] hover:bg-[#7065F0] transition-all text-white font-semibold text-lg rounded-2xl shadow-lg">
                    Create an Escrow
                </Link>
            </div>
        </div>
    );
}