import React, { useState } from "react";
import { useUserInfo } from "../../utils/userCresidentials";
import { db } from "../../lib/firebase";
import { doc, updateDoc, arrayUnion, collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import BalanceMessages from "../BalanceMessages";
import { Link } from "react-router-dom";

export default function CreateEscrow() {
    const [mode, setMode] = useState("normal"); // normal | house
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { user, reloadUser } = useUserInfo();
    const [balanceMessage, setBalanceMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        title: "",
        amount: "",
        reciever: "",
        seller: "",
        account: "",
        code: "",
        description: "",
    });

    const handleChange = (e) => {
        setLoading(false)
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const checkBalance = (amount) => {
        if (!user) return false;
        if (user.escrowBalance < Number(amount)) {
            setBalanceMessage(
                "Insufficient escrow balance. Please fund your account before creating this escrow."
            );
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        if (!user) return toast.error("User not loaded yet");
        if (!checkBalance(form.amount)) return;

        const amountNumber = Number(form.amount);

        const escrowData = {
            ...form,
            creator: { uid: user.uid, name: user.name, email: user.email },
            status: "pending",
            createdAt: new Date().toISOString(),
        };

        try {
            const userRef = doc(db, "users", user.uid);

            // Update escrow management, deduct from balance, update total debit
            await updateDoc(userRef, {
                escrowsManagement: arrayUnion(escrowData),
                escrowBalance: (user.escrowBalance || 0) - amountNumber,
                totalDebit: (user.totalDebit || 0) + amountNumber,
            });

            // Log transaction in Firestore
            const txRef = collection(db, "users", user.uid, "transactions");
            await addDoc(txRef, {
                amount: amountNumber,
                paymentMode: "USD",
                type: "escrow-debit",
                status: "success",
                date: new Date().toISOString(),
            });

            toast.success("Escrow created successfully!");
            setForm({ title: "", amount: "", reciever: "", seller: "", account: "", code: "", description: "" });
            reloadUser();
        } catch (error) {
            console.error(error);
            toast.error("Failed to create escrow. Try again.");
        } finally {
            setLoading(false)
        }
    };

    const handleHouseCreate = async () => {
        if (!user || !selectedProperty) return;
        setLoading(true)
        const amountNumber = Number(selectedProperty.price);
        if (!checkBalance(amountNumber)) return;

        const escrowData = {
            property: selectedProperty,
            creator: { uid: user.uid, name: user.name, email: user.email },
            status: "pending",
            createdAt: new Date().toISOString(),
        };

        try {
            const userRef = doc(db, "users", user.uid);

            // Add to escrowsManagement
            await updateDoc(userRef, {
                escrowsManagement: arrayUnion(escrowData),
                escrowBalance: (user.escrowBalance || 0) - amountNumber,
                totalDebit: (user.totalDebit || 0) + amountNumber,
                escrows: user.escrows.filter((p) => p.id !== selectedProperty.id), // Remove property from escrows
            });

            // Log transaction
            const txRef = collection(db, "users", user.uid, "transactions");
            await addDoc(txRef, {
                amount: amountNumber,
                paymentMode: "USD",
                type: "escrow-debit",
                status: "success",
                date: new Date().toISOString(),
            });

            toast.success("House escrow created!");
            setSelectedProperty(null);
            reloadUser();
        } catch (error) {
            console.error(error);
            toast.error("Failed to create house escrow.");
        } finally {
            setLoading(false)

        }
    };



    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-6">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center">Create Escrow</h1>

                {/* Mode Buttons */}
                <div className="flex items-center justify-center bg-gray-300 w-fit mx-auto p-2 rounded-lg gap-4 text-[12px]">
                    <button
                        onClick={() => { setMode("normal"); setSelectedProperty(null); }}
                        className={`${mode === "normal" ? "bg-white gap-2 w-fit px-5 h-12 text-[#7065F0] font-bold border-2 border-[#E0DEF7] rounded-md cursor-pointer" : "gap-2 w-fit px-5 h-12 text-[#100A55] font-bold cursor-pointer"}`}
                    >Normal Escrow</button>

                    <button
                        onClick={() => { setMode("house"); setSelectedProperty(null); }}
                        className={`${mode === "house" ? "bg-white gap-2 w-fit px-5 h-12 text-[#7065F0] font-bold border-2 border-[#E0DEF7] rounded-md cursor-pointer" : "gap-2 w-fit px-5 h-12 text-[#100A55] font-bold cursor-pointer"}`}
                    >House Escrow</button>
                </div>

                {/* Normal Escrow Form */}
                {mode === "normal" && (
                    <form onSubmit={handleSubmit} className="space-y-5 mt-4 md:w-[80%] mx-auto p-8 rounded-lg shadow-lg bg-white">
                        <div>
                            <label className="block text-sm font-medium mb-1">Escrow Title</label>
                            <input type="text" name="title" value={form.title} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Project Payment, Item Purchase, etc" />
                        </div>
                        <div className="flex sm:flex-row flex-col sm:justify-between gap-4 w-full">
                            <div className="flex-1">
                                <label className="text-sm font-medium mb-1">Amount</label>
                                <input type="number" name="amount" value={form.amount} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter escrow amount" />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm font-medium mb-1">Reciever Email</label>
                                <input type="email" name="seller" value={form.seller} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter seller email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Reciever Account </label>
                            <input type="number" name="account" value={form.account} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="* *** 00" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-indigo-500" placeholder="Explain the purpose of the escrow" />
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-[#7065F0] text-white py-3 rounded-xl font-medium text-lg cursor-pointer">{loading ? 'Creating...' : 'Create Escrow'}</button>
                    </form>
                )}

                {/* House Escrow Selection */}
                {mode === "house" && user?.escrows?.length > 0 ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800 text-center">Select a House</h2>
                        <p className="text-center text-gray-500 text-sm">Choose a property to continue.</p>

                        <div className="flex flex-wrap items-center  justify-center gap-6 my-5">
                            {user.escrows.map((property) => {
                                const isSelected = selectedProperty?.id === property.id;
                                return (
                                    <div key={property.id || property.title} className={`relative flex flex-col max-w-[300px] overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'border-indigo-500 shadow-2xl' : 'border-gray-200 hover:shadow-lg'}`} onClick={() => setSelectedProperty(property)}>
                                        <img src={property.img} alt="" className="w-full h-[200px] object-cover" />
                                        <section className="w-[90%] mx-auto flex flex-col py-5">
                                            <h3 className="text-[#7065F0] text-[18px] font-extrabold">${Number(property.price).toLocaleString()}</h3>
                                            <h2 className="text-[#000929] text-[20px] font-bold">{property.title}</h2>
                                            <h4 className="text-gray-400 text-[16px] font-normal">{property.location}</h4>
                                            <p className="text-gray-500 text-[14px] font-normal mt-2">{property.description}</p>
                                        </section>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-center mt-4">
                            <button onClick={handleHouseCreate} disabled={!selectedProperty || loading} className={`py-3 px-10 rounded-xl font-medium text-lg transition ${selectedProperty ? 'bg-[#7065F0] text-white hover:bg-indigo-600 cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>{loading ? 'Creating...' : 'Create Escrow'}</button>
                        </div>
                    </div>
                ) : <p className="p-6 text-center text-gray-600 flex flex-col items-center justify-center border border-gray-400 rounded-xl">You do not have any Property escrow at the moment.
                    <div className="mt-4">
                        <Link to="/dashboard/properties" className=" w-full bg-[#7065F0] text-white py-2 px-4 rounded-xl font-medium text-sm hover:bg-[#7065F0] ">Add Property</Link>
                    </div></p>}



                {/* Balance modal */}
                {balanceMessage && <BalanceMessages message={balanceMessage} onClose={() => setBalanceMessage('')} />}
            </div>
        </div>
    );
}
