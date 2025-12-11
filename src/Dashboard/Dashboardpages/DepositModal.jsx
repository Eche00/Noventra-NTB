import { Close } from "@mui/icons-material";
import React from "react";
import PrivateConnectivityIcon from '@mui/icons-material/PrivateConnectivity';
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export default function DepositModal({ setDeposit }) {
    const [step, setStep] = React.useState(1);
    const [showIntro, setShowIntro] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    const [formData, setFormData] = React.useState({
        amount: "1000",

        firstName: "",
        lastName: "",
        dob: "",
        nationality: "United States of America",

        address: "",
        address2: "",
        city: "",
        postalCode: "",
        state: "",
        country: "United States of America",
        documentType: "",
        documentFront: null,
        documentBack: null,
        selfie: null,
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardHolder: "",
    });

    const updateField = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center p-6 bg-black/50">
            <span className=" absolute top-5 right-5 text-white cursor-pointer" onClick={() => setDeposit(false)}><Close fontSize="large" /></span>
            {/* INTRO SCREEN (shows for 10 seconds) */}
            {showIntro && (
                <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6 text-center">

                    <h2 className="text-xl font-bold flex flex-col-reverse">Your Data Is Protected <span className=" text-[#7065F0]"><PrivateConnectivityIcon fontSize="large" /></span></h2>

                    <p className="text-gray-600 leading-relaxed text-sm">
                        All information you provide in this verification process is fully encrypted
                        and never stored on our servers. Not even we can see it.

                    </p>
                    <div className="h-10 w-10 border-x-5 border-[#7065F0] rounded-full  animate-spin mx-auto"></div>

                    <p className="text-xs text-gray-400 mt-4">Loading secure verification…</p>


                </div>
            )}
            {!showIntro && (<>
                {/* STEP 1 — AMOUNT */}

                {step === 1 && (

                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">
                        <div className="relative text-center space-y-1">


                            <input
                                type="number"
                                className="text-5xl font-bold w-full text-center pl-10 outline-none"
                                value={formData.amount}
                                onChange={(e) => updateField("amount", e.target.value)}
                            />
                            <p className="text-gray-500 text-sm">
                                Kindly input price to deposit
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {["$1,000", "$5,000", "$10,000", "$50,000"].map((amount, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        updateField("amount", amount.replace("$", "").replace(",", ""))
                                    }
                                    className="py-2 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 cursor-pointer"
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* STEP 2 — PERSONAL INFO */}
                {step === 2 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">
                        <div className="space-y-4">
                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">Legal first name</label>
                                <input
                                    className="w-full outline-none text-base"
                                    value={formData.firstName}
                                    onChange={(e) => updateField("firstName", e.target.value)}
                                />
                            </div>

                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">Legal last name</label>
                                <input
                                    className="w-full outline-none text-base"
                                    value={formData.lastName}
                                    onChange={(e) => updateField("lastName", e.target.value)}
                                />
                            </div>

                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">Date of birth</label>
                                <input
                                    className="w-full outline-none text-base"
                                    placeholder="MM/DD/YYYY"
                                    value={formData.dob}
                                    onChange={(e) => updateField("dob", e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                if (!formData.firstName || !formData.lastName || !formData.dob) {
                                    toast.error("Please fill all required fields before continuing.");
                                    return;
                                }
                                setStep(3);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/*  STEP 3 — ADDRESS SEARCH (RESTORED & MERGED) */}
                {step === 3 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setStep(2)} className="p-2 bg-gray-100 rounded-full text-xl">←</button>
                            <h2 className="text-lg font-semibold">Your residential address</h2>
                            <button className="p-2 bg-gray-100 rounded-full text-xl">✕</button>
                        </div>

                        <p className="text-gray-500 text-sm leading-snug">
                            Let us know where you mainly reside. Unfortunately, we can’t accept PO boxes
                            or business addresses.
                        </p>

                        <div className="border border-gray-400 rounded-2xl p-3">
                            <label className="text-gray-500 text-xs">Address</label>
                            <input
                                className="w-full outline-none text-base"
                                value={formData.address}
                                onChange={(e) => updateField("address", e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => {
                                if (!formData.address) {
                                    toast.error("Please fill Address before continuing.");
                                    return;
                                }
                                setStep(4);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>

                        <p className="text-center text-xs text-gray-400">Powered by • CEET</p>
                    </div>
                )}

                {/* STEP 4 — MANUAL ADDRESS */}
                {step === 4 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">

                        <div className="space-y-4">

                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">Additional info (Optional)</label>
                                <input
                                    className="w-full outline-none text-base"
                                    value={formData.address2}
                                    onChange={(e) => updateField("address2", e.target.value)}
                                />
                            </div>

                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">City or town</label>
                                <input
                                    className="w-full outline-none text-base"
                                    value={formData.city}
                                    onChange={(e) => updateField("city", e.target.value)}
                                />
                            </div>

                            <div className="border border-gray-400 rounded-2xl p-3">
                                <label className="text-gray-500 text-xs">Postal code</label>
                                <input
                                    className="w-full outline-none text-base"
                                    value={formData.postalCode}
                                    onChange={(e) => updateField("postalCode", e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                if (!formData.city || !formData.postalCode) {
                                    toast.error("Please fill all required fields before continuing.");
                                    return;
                                }
                                setStep(5);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* STEP 5 — FINAL PREVIEW */}
                {step === 5 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-4">

                        <div className="space-y-3 text-sm">
                            <div className="border rounded-2xl p-4">
                                <p className="text-gray-500 text-xs">Amount</p>
                                <p className="font-medium">${formData.amount}</p>
                            </div>

                            <div className="border rounded-2xl p-4">
                                <p className="text-gray-500 text-xs">Legal name</p>
                                <p className="font-medium">
                                    {formData.firstName} {formData.lastName}
                                </p>
                            </div>

                            <div className="border rounded-2xl p-4">
                                <p className="text-gray-500 text-xs">Date of birth</p>
                                <p className="font-medium">{formData.dob}</p>
                            </div>

                            <div className="border rounded-2xl p-4">
                                <p className="text-gray-500 text-xs">Address</p>
                                <p className="font-medium">{formData.address}</p>
                                <p className="font-medium">
                                    {formData.city}, {formData.state} {formData.postalCode}
                                </p>
                            </div>
                        </div>

                        <button onClick={() => setStep(6)} className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer">
                            Confirm & Continue
                        </button>
                    </div>
                )}

                {/* STEP 6 — DOCUMENT SELECTION */}
                {step === 6 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">

                        <h2 className="text-lg font-semibold text-center">Select your ID document</h2>
                        <p className="text-gray-500 text-sm text-center leading-snug">
                            Choose the identification you want to upload for verification.
                        </p>

                        <div className="space-y-3">

                            {/* Passport */}
                            <div
                                className={`border rounded-2xl p-4 cursor-pointer transition
                    ${formData.documentType === "passport" ? "border-[#7065F0] bg-[#F2F0FF]" : "border-gray-400"}`}
                                onClick={() => updateField("documentType", "passport")}
                            >
                                <p className="font-medium">Passport</p>
                            </div>

                            {/* National ID Card */}
                            <div
                                className={`border rounded-2xl p-4 cursor-pointer transition
                    ${formData.documentType === "id_card" ? "border-[#7065F0] bg-[#F2F0FF]" : "border-gray-400"}`}
                                onClick={() => updateField("documentType", "id_card")}
                            >
                                <p className="font-medium">National ID Card</p>
                            </div>

                            {/* Driver's License */}
                            <div
                                className={`border rounded-2xl p-4 cursor-pointer transition
                    ${formData.documentType === "driver_license" ? "border-[#7065F0] bg-[#F2F0FF]" : "border-gray-400"}`}
                                onClick={() => updateField("documentType", "driver_license")}
                            >
                                <p className="font-medium">Driver’s License</p>
                            </div>

                        </div>

                        <button
                            onClick={() => {
                                if (!formData.documentType) {
                                    toast.error("Please select a document type before continuing.");
                                    return;
                                }
                                setStep(7);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* STEP 7 — UPLOAD ID IMAGES */}
                {step === 7 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">

                        <h2 className="text-lg font-semibold text-center">Upload your {formData.documentType.replace("_", " ")}</h2>
                        <p className="text-gray-500 text-sm text-center leading-snug">
                            Upload both the front and back sides of your {formData.documentType.replace("_", " ")}.
                        </p>

                        <div className="space-y-4">

                            {/* Front Side Upload */}
                            <div className="border border-gray-400 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#7065F0] transition">
                                <label className="w-full text-center cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                updateField("documentFront", e.target.files[0]);
                                            }
                                        }}
                                    />
                                    {formData.documentFront ? (
                                        <p className="text-[#7065F0] font-medium">Front image uploaded: {formData.documentFront.name}</p>
                                    ) : (
                                        <p className="text-gray-500 font-medium">Upload Front Side</p>
                                    )}
                                </label>
                            </div>

                            {/* Back Side Upload */}
                            <div className="border border-gray-400 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#7065F0] transition">
                                <label className="w-full text-center cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                updateField("documentBack", e.target.files[0]);
                                            }
                                        }}
                                    />
                                    {formData.documentBack ? (
                                        <p className="text-[#7065F0] font-medium">Back image uploaded: {formData.documentBack.name}</p>
                                    ) : (
                                        <p className="text-gray-500 font-medium">Upload Back Side</p>
                                    )}
                                </label>
                            </div>

                        </div>

                        <button
                            onClick={() => {
                                if (!formData.documentFront || !formData.documentBack) {
                                    toast.error("Please upload both front and back images before continuing.");
                                    return;
                                }
                                setStep(8);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* STEP 8 — UPLOAD SELFIE */}
                {step === 8 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">

                        <h2 className="text-lg font-semibold text-center">Upload a selfie</h2>
                        <p className="text-gray-500 text-sm text-center leading-snug">
                            Take a clear photo of yourself for identity verification.
                        </p>

                        <div className="border border-gray-400 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#7065F0] transition">
                            <label className="w-full text-center cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            updateField("selfie", e.target.files[0]);
                                        }
                                    }}
                                />
                                {formData.selfie ? (
                                    <p className="text-[#7065F0] font-medium">Selfie uploaded: {formData.selfie.name}</p>
                                ) : (
                                    <p className="text-gray-500 font-medium">Upload Selfie</p>
                                )}
                            </label>
                        </div>

                        <button
                            onClick={() => {
                                if (!formData.selfie) {
                                    toast.error("Please upload your selfie before continuing.");
                                    return;
                                }
                                // Proceed to next step or submit form
                                setStep(9); // or handle submission
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}
                {/* STEP 9 — ENTER CARD DETAILS */}
                {step === 9 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6">

                        <h2 className="text-lg font-semibold text-center">Enter your card details</h2>
                        <p className="text-gray-500 text-sm text-center leading-snug">
                            Fill in your card information to complete the payment.
                        </p>

                        <div className="space-y-4">

                            {/* Card Number */}
                            <input
                                type="text"
                                placeholder="Card Number"
                                maxLength={16}
                                value={formData.cardNumber || ""}
                                onChange={(e) => updateField("cardNumber", e.target.value)}
                                className="w-full border border-gray-400 rounded-2xl p-4 focus:outline-none focus:border-[#7065F0]"
                            />

                            {/* Expiry Date */}
                            <input
                                type="text"
                                placeholder="Expiry Date (MM/YY)"
                                maxLength={5}
                                value={formData.expiryDate || ""}
                                onChange={(e) => updateField("expiryDate", e.target.value)}
                                className="w-full border border-gray-400 rounded-2xl p-4 focus:outline-none focus:border-[#7065F0]"
                            />

                            {/* CVV */}
                            <input
                                type="text"
                                placeholder="CVV"
                                maxLength={3}
                                value={formData.cvv || ""}
                                onChange={(e) => updateField("cvv", e.target.value)}
                                className="w-full border border-gray-400 rounded-2xl p-4 focus:outline-none focus:border-[#7065F0]"
                            />

                            {/* Cardholder Name */}
                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                value={formData.cardHolder || ""}
                                onChange={(e) => updateField("cardHolder", e.target.value)}
                                className="w-full border border-gray-400 rounded-2xl p-4 focus:outline-none focus:border-[#7065F0]"
                            />
                        </div>

                        <button
                            onClick={() => {
                                if (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.cardHolder) {
                                    toast.error("Please fill in all card details before continuing.");
                                    return;
                                }
                                // Proceed to next step or handle final submission
                                setStep(10);
                            }}
                            className="w-full py-3 bg-[#7065F0] text-white rounded-2xl text-lg font-semibold cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                )}
                {/* STEP 10 — REVIEW & EDIT */}
                {step === 10 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white rounded-3xl shadow-2xl mm:p-8 p-2 space-y-8 max-w-3xl mm:max-h-[70vh] max-h-[80vh] overflow-y-scroll mx-auto">

                        <h2 className="text-2xl font-bold text-center text-gray-800">Review Your Information</h2>
                        <p className="text-gray-500 text-center text-sm md:text-base">
                            Review all details and uploaded documents. You can edit any field before submitting.
                        </p>

                        <div className="flex flex-col gap-6">

                            {/* Personal + Address Info */}
                            <section className="flex flex-col md:flex-row gap-6">
                                {/* Personal Information */}
                                <div className="flex-1 bg-white shadow-md rounded-2xl p-6 space-y-4">
                                    <h3 className="font-semibold text-gray-700 text-lg">Personal Information</h3>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={(e) => updateField("firstName", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={(e) => updateField("lastName", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="date"
                                        placeholder="Date of Birth"
                                        value={formData.dob}
                                        onChange={(e) => updateField("dob", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nationality"
                                        value={formData.nationality}
                                        onChange={(e) => updateField("nationality", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                </div>

                                {/* Address Information */}
                                <div className="flex-1 bg-white shadow-md rounded-2xl p-6 space-y-4">
                                    <h3 className="font-semibold text-gray-700 text-lg">Address</h3>
                                    <input
                                        type="text"
                                        placeholder="Address Line 1"
                                        value={formData.address}
                                        onChange={(e) => updateField("address", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address Line 2"
                                        value={formData.address2}
                                        onChange={(e) => updateField("address2", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={(e) => updateField("city", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={(e) => updateField("state", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Postal Code"
                                        value={formData.postalCode}
                                        onChange={(e) => updateField("postalCode", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={(e) => updateField("country", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                </div>
                            </section>

                            {/* Documents + Selfie + Card */}
                            <section className="flex flex-col gap-6">

                                {/* ID Documents */}
                                <div className="bg-white shadow-md rounded-2xl p-6 space-y-3">
                                    <h3 className="font-semibold text-gray-700 text-lg">ID Document ({formData.documentType.replace("_", " ")})</h3>
                                    <div className="flex gap-4">
                                        {formData.documentFront && (
                                            <img
                                                src={URL.createObjectURL(formData.documentFront)}
                                                alt="Front"
                                                className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                                            />
                                        )}
                                        {formData.documentBack && (
                                            <img
                                                src={URL.createObjectURL(formData.documentBack)}
                                                alt="Back"
                                                className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                                            />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setStep(7)}
                                        className="mt-2 text-[#7065F0] font-medium underline hover:text-[#5045c0]"
                                    >
                                        Edit Document
                                    </button>
                                </div>

                                {/* Selfie */}
                                <div className="bg-white shadow-md rounded-2xl p-6 space-y-3 flex flex-col items-center">
                                    <h3 className="font-semibold text-gray-700 text-lg">Selfie</h3>
                                    {formData.selfie && (
                                        <img
                                            src={URL.createObjectURL(formData.selfie)}
                                            alt="Selfie"
                                            className="w-28 h-28 object-cover rounded-full border-2 border-gray-200"
                                        />
                                    )}
                                    <button
                                        onClick={() => setStep(8)}
                                        className="mt-2 text-[#7065F0] font-medium underline hover:text-[#5045c0]"
                                    >
                                        Edit Selfie
                                    </button>
                                </div>

                                {/* Card Details */}
                                <div className="bg-white shadow-md rounded-2xl p-6 space-y-3">
                                    <h3 className="font-semibold text-gray-700 text-lg">Card Details</h3>
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        value={formData.cardNumber}
                                        onChange={(e) => updateField("cardNumber", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            placeholder="Expiry Date"
                                            value={formData.expiryDate}
                                            onChange={(e) => updateField("expiryDate", e.target.value)}
                                            className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            value={formData.cvv}
                                            onChange={(e) => updateField("cvv", e.target.value)}
                                            className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Cardholder Name"
                                        value={formData.cardHolder}
                                        onChange={(e) => updateField("cardHolder", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7065F0]"
                                    />
                                </div>
                            </section>

                        </div>

                        <button
                            onClick={() => setStep(11)}
                            className="mt-6 w-full py-4 bg-linear-to-r from-[#7065F0] to-[#5045c0] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
                        >
                            Complete Transaction
                        </button>
                    </div>

                )}
                {/* STEP 11 — TRANSACTION PENDING / LOADING */}
                {step === 11 && (
                    <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6 text-center">

                        <h2 className="text-xl font-bold flex items-center justify-center flex-col-reverse">
                            <p >Transaction is <span className=" text-orange-500">Pending</span></p>
                            <PrivateConnectivityIcon fontSize="large" className="text-[#7065F0]" />
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base max-w-md">
                            Your credentials are being verified. Please wait while we confirm your identity. Once confirmed, your transaction will proceed automatically.
                        </p>

                        {/* Spinner */}
                        <div className="h-10 w-10 border-x-5 border-[#7065F0] rounded-full  animate-spin mx-auto"></div>

                        <p className="text-gray-400 text-xs">Processing secure verification…</p>
                        <p >visit <Link to='/dashboard/transactions' className=" text-[#7065F0] underline"> Transactions</Link></p>

                    </div>
                )}

            </>)}


        </div>
    );
}
