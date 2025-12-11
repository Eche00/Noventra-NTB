// pages/WithdrawalList.tsx

import Loader from "../../components/Loader";
import { withdrawalLogic } from "../../utils/withdrawal";


function WithdrawalList() {
    const { list, loadin } = withdrawalLogic()
    if (loadin) {
        return <Loader />;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Withdrawal Requests</h2>
            <div className="bg-white shadow-lg rounded-2xl p-6">
                {list.length === 0 ? (
                    <p>No withdrawal requests yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-[12px]">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600">
                                    <th className="py-3 px-4 text-left">User ID</th>
                                    <th className="py-3 px-4 text-left">Email</th>
                                    <th className="py-3 px-4 text-left">Username</th>
                                    <th className="py-3 px-4 text-left">Requested At</th>
                                    <th className="py-3 px-4 text-left">Unlock Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((w) => (
                                    <tr key={w.id} className="border-t border-gray-200">
                                        <td className="py-3 px-4">{String(w.userId).slice(0, 5)}...</td>
                                        <td className="py-3 px-4">{w.email}</td>
                                        <td className="py-3 px-4">{w.username}</td>
                                        <td className="py-3 px-4">
                                            {new Date(w.requestedAt).toLocaleString()}
                                        </td>
                                        <td className="py-3 px-4">
                                            {new Date(w.unlockTime).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WithdrawalList;
