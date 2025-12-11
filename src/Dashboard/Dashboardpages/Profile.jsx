import React, { useState } from "react";
import { useUserInfo } from "../../utils/userCresidentials";
import Loader from "../../components/Loader";

function Profile() {
    const { user, loading, isEditing, setIsEditing, updateUserProfile, updateUserCard, handleLogOutUser, formData, cardData, handleChange, handleCardChange } = useUserInfo();



    const handleSaveChanges = async () => {
        await updateUserProfile(formData);
        await updateUserCard(cardData);
        setIsEditing(false);
    };
    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                <Loader />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-10">

            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

            {/* CARD */}
            <div className="  mb-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-linear-to-r from-purple-400 to-[#7065F0] text-white flex items-center justify-center text-3xl font-bold shadow-md">
                            {user?.username?.charAt(0)?.toUpperCase()}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {user?.name || user?.username}
                            </h2>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end w-full gap-3">
                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-6 py-2 bg-[#7065F0] text-white rounded-lg shadow hover:bg-[#5c54d1] transition cursor-pointer"
                            >
                                Edit
                            </button>
                        )}

                        <button
                            onClick={handleLogOutUser}
                            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* TABS */}
                <div className="flex gap-4 border-b pb-3 mb-8 sm:text-[12px] text-[10px]">
                    <button className="mm:px-6 px-4 py-2 bg-[#7065F0] text-white rounded-lg shadow cursor-pointer">
                        Personal Settings
                    </button>

                    <a href="#card" className="py-2 rounded-lg text-gray-600 hover:bg-gray-200 transition cursor-pointer">
                        Payment Card
                    </a>
                    <a href="#my-escrow" className="py-2 rounded-lg text-gray-600 hover:bg-gray-200 transition cursor-pointer">
                        My Escrow
                    </a>
                </div>

                {/* VIEW MODE  */}
                {!isEditing && (
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

                        {/* Header */}
                        <div className="px-6 py-5 bg-[#7065F0] flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            <h2 className="text-xl font-semibold text-white tracking-wide">
                                Profile Information
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-8 bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700]">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                {/* FIELD COMPONENT */}
                                {[
                                    { label: "Username", value: user?.username },
                                    { label: "Email", value: user?.email },
                                    { label: "Phone", value: user?.phone || "Not set" },
                                    { label: "Date of Birth", value: user?.dob || "Not set" },
                                    { label: "Gender", value: user?.gender || "Not set" },
                                    { label: "Country", value: user?.country || "Not set" },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                                    >
                                        <span className="text-[11px] font-bold text-[#7065F0] uppercase tracking-wider">
                                            {item.label}
                                        </span>
                                        <p className="text-lg mt-1 font-medium text-gray-900">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}

                                {/* Address block */}
                                <div className="md:col-span-2 p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                                    <span className="text-[11px] font-bold text-[#7065F0] uppercase tracking-wider">
                                        Address
                                    </span>
                                    <p className="text-lg mt-2 text-gray-900 leading-relaxed">
                                        {user?.address || "No address provided"}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                )}

                {/* EDIT MODE  */}
                {isEditing && (
                    <>
                        <div className="p-6 rounded-lg shadow-lg bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-semibold">Username</label>
                                <input
                                    readOnly
                                    type="text"
                                    defaultValue={user?.username}
                                    onChange={(e) => handleChange("username", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 outline-none cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Email</label>
                                <input
                                    readOnly
                                    type="email"
                                    defaultValue={user?.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 outline-none cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Phone Number</label>
                                <input
                                    type="number"
                                    defaultValue={user?.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Date of Birth</label>
                                <input
                                    type="date"
                                    defaultValue={user?.dob}
                                    onChange={(e) => handleChange("dob", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Gender</label>
                                <select
                                    defaultValue={user?.gender}
                                    onChange={(e) => handleChange("gender", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                                >
                                    <option value="">Choose gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Country</label>
                                <select
                                    defaultValue={user?.country}
                                    onChange={(e) => handleChange("country", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                                >
                                    <option value="">Select country</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm font-semibold">Address</label>
                                <textarea
                                    defaultValue={user?.address}
                                    onChange={(e) => handleChange("address", e.target.value)}
                                    className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0] h-24"
                                />
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <button
                                onClick={handleSaveChanges}
                                className="bg-[#7065F0] text-white px-10 py-3 rounded-lg shadow hover:bg-[#5c54d1] cursor-pointer"
                            >
                                Save Changes
                            </button>

                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-10 py-3 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-200 cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* PAYMENT CARD SECTION */}
            <div id="card" className="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Card</h2>

                {!isEditing ? (
                    <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">

                        {/* Front Card */}
                        <div className="flex-1 bg-linear-to-br from-[#4B79A1] to-[#283E51] text-white rounded-2xl p-6 shadow-xl border border-white/10">
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="tracking-widest text-[10px] uppercase opacity-80">
                                    {user?.cardDetails?.cardName ? "Cardholder" : "No Card Added"}
                                </span>

                                {/* Chip + Contactless */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-6 bg-yellow-300 rounded-sm"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7.5 12a4.5 4.5 0 0 1 7.5-3.536l1.061-1.06A6 6 0 0 0 6 12a6 6 0 0 0 10.061 4.596l-1.06-1.06A4.5 4.5 0 0 1 7.5 12Z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card Number */}
                            <div className="text-xl tracking-[0.2em] font-semibold mb-6">
                                {user?.cardDetails?.cardNumber
                                    ? user.cardDetails.cardNumber.replace(/.(?=.{4})/g, "•")
                                    : "•••• •••• •••• ••••"}
                            </div>

                            {/* Name + Expiry */}
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider opacity-70">Cardholder</span>
                                    <span className="font-medium">
                                        {user?.cardDetails?.cardName || "Not added"}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider opacity-70">Expiry</span>
                                    <span className="font-medium">
                                        {user?.cardDetails?.expiry || "--/--"}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider opacity-70">CVV</span>
                                    <span className="font-medium">
                                        {user?.cardDetails?.cvv ? "***" : "Not added"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Back Card */}
                        <div className="flex-1 bg-linear-to-br from-[#283E51] to-[#4B79A1] text-white rounded-2xl p-6 shadow-xl border border-white/10">
                            <div className="mb-6">
                                <span className="text-[10px] uppercase tracking-widest opacity-70">Magnetic Stripe</span>
                                <div className="h-8 bg-black rounded mt-2"></div>
                            </div>

                            <div className="mb-6">
                                <span className="text-[10px] uppercase tracking-widest opacity-70">CVV</span>
                                <div className="bg-white text-black rounded px-2 py-1 w-16 mt-1 text-center">
                                    {user?.cardDetails?.cvv ? "***" : "Not added"}
                                </div>
                            </div>

                            <div className="text-[10px] opacity-60">
                                This is the back of your card.
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-semibold">Cardholder Name</label>
                            <input
                                type="text"
                                defaultValue={user?.cardDetails?.cardName}
                                onChange={(e) => handleCardChange("cardName", e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Card Number</label>
                            <input
                                type="text"
                                defaultValue={user?.cardDetails?.cardNumber}
                                onChange={(e) => handleCardChange("cardNumber", e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Expiry</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                defaultValue={user?.cardDetails?.expiry}
                                onChange={(e) => handleCardChange("expiry", e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">CVV</label>
                            <input
                                type="password"
                                defaultValue={user?.cardDetails?.cvv}
                                onChange={(e) => handleCardChange("cvv", e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#7065F0]"
                            />
                        </div>

                    </div>
                )}


            </div>
            {/* MY ESCROWS */}
            <div id="my-escrow" className="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] rounded-xl shadow-lg p-8 mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Escrows</h2>

                {!isEditing && (
                    <>
                        {user?.myEscrow && user.myEscrow.length > 0 ? (
                            <div className="flex flex-wrap gap-6 max-w-6xl mx-auto">
                                {user.myEscrow.map((escrow, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col w-full md:w-[300px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                                    >
                                        {/* Top image */}
                                        <div className="relative w-full h-48">
                                            <img
                                                src={escrow.property?.img || "https://legaladvicebd.com/wp-content/uploads/2024/12/what-is-escrow-account-how-it-works-bangladesh.jpg"}
                                                alt={escrow.title || escrow.property?.title || "Escrow"}
                                                className="w-full h-full object-cover"
                                            />
                                            <span
                                                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${escrow.status?.toLowerCase() === "success"
                                                    ? "bg-green-100 text-green-800"
                                                    : escrow.status?.toLowerCase() === "pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {escrow.status || "Pending"}
                                            </span>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-4 flex flex-col gap-3">
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {escrow.title || escrow.property?.title || "No Title"}
                                            </h3>

                                            <p className="text-gray-600 text-sm line-clamp-3">
                                                {escrow.description || escrow.property?.description || "No Description"}
                                            </p>

                                            <div className="flex items-center justify-between mt-3">
                                                <span className="text-indigo-600 font-semibold">
                                                    ${Number(escrow.amount || escrow.property?.price || 0).toLocaleString()}
                                                </span>
                                                <span className="text-gray-500 text-xs">
                                                    Completed: {new Date(escrow.completedAt).toLocaleDateString()}
                                                </span>
                                            </div>

                                            <span className={`w-fit px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${escrow.property ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                                                }`}>
                                                {escrow.property ? "Property" : "Normal"} Escrow
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-400 py-10">
                                You have no completed escrows.
                            </div>
                        )}
                    </>
                )}
            </div>




        </div>
    );
}

export default Profile;
