import Loader from "../../components/Loader";
import { useUserInfo } from "../../utils/userCresidentials";
import { withdrawalLogic } from "../../utils/withdrawal";

export default function Withdraw() {
    const { loading } = useUserInfo();
    const { step, passwordInput, setPasswordInput, card, setCard, handlePasswordSubmit, handleCardSubmit } = withdrawalLogic()
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                <Loader />
            </div>
        );
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] rounded-2xl shadow-lg p-8 w-full max-w-md">

                {/* STEP 0: PASSWORD */}
                {step === 0 && (
                    <form onSubmit={handlePasswordSubmit} className="space-y-5">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Enter Password</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                required
                                type="password"
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="Enter your password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7065F0] text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {/* STEP 1 — USER DETAILS */}
                {step === 1 && (
                    <form onSubmit={handleCardSubmit} className="space-y-5">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Enter Your Details
                        </h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                required
                                type="email"
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="you@example.com"
                                value={card.email}
                                onChange={(e) => setCard({ ...card, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Username</label>
                            <input
                                required
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="your username"
                                value={card.username}
                                onChange={(e) => setCard({ ...card, username: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7065F0] text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {/* STEP 2 — LOCKED VIEW */}
                {step === 2 && (
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-bold text-gray-800">Withdrawal Locked</h2>
                        <p className="text-gray-500">
                            You must wait 2 weeks before you can withdraw.
                        </p>

                        <div className="text-[24px] font-bold text-[#7065F0]">2 Weeks</div>

                        <button
                            disabled={true}
                            className="w-full py-3 rounded-lg text-lg font-semibold bg-gray-300 text-gray-600 cursor-not-allowed"
                        >
                            Withdraw
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
