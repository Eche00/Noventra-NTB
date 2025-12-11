import React, { useState } from "react";
import { useUserInfo } from "../../utils/userCresidentials";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import toast from "react-hot-toast";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
function EscrowManagement() {
    const { user } = useUserInfo();
    const [cancelingId, setCancelingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const escrows = user?.escrowsManagement || [];

    const handleCancelEscrow = async (escrow) => {
        if (!user) return toast.error("User not loaded");
        setCancelingId(escrow.createdAt);
        try {
            const userRef = doc(db, "users", user.uid);
            const refundAmount = Number(escrow.amount || escrow.property?.price || 0);

            // Remove escrow
            const updatedEscrows = (user.escrowsManagement || []).filter(
                (e) => e.createdAt !== escrow.createdAt
            );

            await updateDoc(userRef, {
                escrowsManagement: updatedEscrows,
                escrowBalance: (user.escrowBalance || 0) + refundAmount,
            });

            // Add transaction
            const txRef = collection(db, "users", user.uid, "transactions");
            await addDoc(txRef, {
                amount: refundAmount,
                paymentMode: "USD",
                type: "escrow-refund",
                status: "success",
                date: new Date().toISOString(),
            });

            toast.success("Escrow cancelled & funds refunded!");

            navigate('/dashboard/transactions')


        } catch (error) {
            console.error(error);
            toast.error("Failed to cancel escrow.");
        } finally {
            setCancelingId(null);
        }
    };
    const handleMarkSuccess = async (escrow) => {
        if (!user) return toast.error("User not loaded");

        setLoading(true);

        try {
            const userRef = doc(db, "users", user.uid);

            // 1. REMOVE from escrowsManagement
            const updatedEscrows = (user.escrowsManagement || []).filter(
                (e) => e.createdAt !== escrow.createdAt
            );

            // 2. ADD to myEscrow as a completed escrow
            const updatedMyEscrow = [
                ...(user.myEscrow || []),
                {
                    ...escrow,
                    status: "success",
                    completedAt: new Date().toISOString(),
                },
            ];

            // 3. UPDATE FIRESTORE (NO BALANCE, NO TRANSACTIONS)
            await updateDoc(userRef, {
                escrowsManagement: updatedEscrows,
                myEscrow: updatedMyEscrow,
            });

            toast.success("Escrow marked as Successful!");
            navigate('/dashboard/profile#my-escrow')
        } catch (error) {
            console.error(error);
            toast.error("Failed to mark escrow as successful.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Escrow Management
                </h1>

                {escrows.length > 0 ? (
                    <div className='flex flex-wrap items-center md:justify-between justify-center gap-6 my-5'>
                        {escrows.map((e, i) => (
                            <div
                                key={i}
                                className={`relative flex mm:flex-row flex-col w-full overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF] justify-between gap-4`}>
                                {/* Top image */}
                                <div className="relative mm:w-fit  overflow-hidden">
                                    <img
                                        src={e.property?.img || "https://legaladvicebd.com/wp-content/uploads/2024/12/what-is-escrow-account-how-it-works-bangladesh.jpg"}
                                        alt={e.title || e.property?.title || "Escrow Image"}
                                        className="mm:w-[250px] w-full h-[200px] mm:h-full object-cover"
                                    />
                                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${e.status?.toLowerCase() === "pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : e.status?.toLowerCase() === "paid"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                        }`}>
                                        {e.status || "Pending"}
                                    </span>
                                </div>

                                {/* Card body */}
                                <div className="p-4 flex flex-wrap flex-1 gap-4">
                                    {/* Title & Type */}
                                    <div className="flex flex-col gap-2 justify-between mb-3">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            {(typeof e?.title === "string" && e.title.slice(0, 10)) ||
                                                (typeof e?.property?.title === "string" && e.property.title.slice(0, 10)) ||
                                                "No Title"}...

                                        </h2>
                                        <span className={`w-fit px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${e.property ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                                            }`}>
                                            {e.property ? "Property" : "Normal"}
                                        </span>
                                        {/* Description */}
                                        <p className="text-gray-600 mb-5 line-clamp-3 text-[12px] w-[200px] overflow-scroll h-[50px] border-2 border-gray-400 rounded-lg p-2">
                                            {e.description || e.property?.description || "No Description"}
                                        </p>
                                    </div>



                                    {/* Amount */}


                                    {/* Details */}
                                    <div className="grid grid-cols-1 gap-3 mb-5">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MonetizationOnIcon />
                                            <span>Buyer: {user.username || "N/A"}</span>
                                        </div>
                                        {e.property ?
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-purple-100 text-purple-800`}>
                                                Property Escrow
                                            </span> :
                                            <div className="grid grid-cols-1 gap-3 mb-5">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <PriceCheckIcon />
                                                    <span>Receiver: {e.seller || "N/A"}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <AssuredWorkloadIcon />
                                                    <span>Account: {e.account || "N/A"}</span>
                                                </div>
                                            </div>
                                        }
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="text-lg font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl shadow">
                                                ${Number(e.amount || e.property?.price || 0).toLocaleString()}
                                            </div>

                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-1 flex-wrap justify-end  gap-3">
                                        <button onClick={() => handleCancelEscrow(e)} disabled={cancelingId === e.createdAt} className=" w-fit h-fit px-4 py-2 bg-red-500 disabled:bg-red-500/50  text-white rounded-xl text-sm hover:bg-red-600 transition cursor-pointer">
                                            {cancelingId === e.createdAt ? "Canceling..." : "Cancel"}
                                        </button>
                                        <button
                                            onClick={() => handleMarkSuccess(e)}
                                            disabled={loading}
                                            className="w-fit h-fit px-4 py-2 bg-green-600 text-white rounded-xl text-sm hover:bg-green-700 transition cursor-pointer"
                                        >
                                            {loading ? "Processing..." : "Success"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                ) : (
                    <div className="text-center text-gray-400 py-10">
                        No successful escrows found.
                    </div>
                )}
            </div>
        </div>
    );
}

export default EscrowManagement;
