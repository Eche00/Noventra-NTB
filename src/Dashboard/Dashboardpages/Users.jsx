import Loader from "../../components/Loader";
import { searchproperty } from "../../utils/svg";
import { manageUsers } from "../../utils/users";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import RebaseEditIcon from "@mui/icons-material/RebaseEdit";
import React, { useState } from "react";

function Users() {
    const {
        filteredUsers,
        loading,
        search,
        setSearch,
        editing,
        balanceInputs,
        setBalanceInputs,
        startEditing,
        saveUserChanges,
    } = manageUsers();

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    const formatDate = (ts) => {
        if (!ts) return "N/A";
        if (ts?.toDate) return ts.toDate().toLocaleDateString();
        return "N/A";
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">All Users</h2>

            {/* SEARCH BAR */}
            <div className="max-w-[352px] w-full flex items-center gap-4 rounded-lg p-3 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7] mb-5">
                {searchproperty}
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 placeholder:text-gray-700 outline-none"
                />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md bg-white">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="p-4 text-left">User</th>
                            <th className="p-4 text-left">Contact</th>
                            <th className="p-4 text-left">Balances </th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {filteredUsers.map((user) => {
                            const isOpen = expanded === user.id;

                            return (
                                <React.Fragment key={user.id}>
                                    {/* MAIN ROW */}
                                    <tr className="hover:bg-gray-50 transition duration-200">
                                        {/* USER COLUMN */}
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-purple-500 to-indigo-500 shadow-md flex items-center justify-center text-xl font-bold text-white">
                                                    {user?.username?.charAt(0)?.toUpperCase()}
                                                </div>

                                                <div>
                                                    <div className="font-semibold text-gray-800">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">@{user.username}</div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* CONTACT */}
                                        <td className="p-4">
                                            <div className="space-y-1">
                                                <div className="text-gray-700 flex items-center gap-2">
                                                    <EmailIcon /> {user.email}
                                                </div>
                                                <div className="text-gray-500 text-xs flex items-center gap-2">
                                                    <ContactPhoneIcon /> {user.phone}
                                                </div>
                                            </div>
                                        </td>


                                        {/* BALANCES */}
                                        <td className="p-4">
                                            {editing === user.id ? (
                                                <div className="grid grid-cols-2 gap-3 p-3 bg-gray-100 rounded-xl border border-gray-300 shadow-inner">
                                                    {Object.entries(balanceInputs).map(
                                                        ([key, value]) => (
                                                            <div key={key}>
                                                                <label className="text-xs text-gray-500 capitalize">
                                                                    {key}
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="mt-1 w-full px-2 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                                                                    value={value}
                                                                    onChange={(e) =>
                                                                        setBalanceInputs(
                                                                            (s) => ({
                                                                                ...s,
                                                                                [key]:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            })
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-gray-900">

                                                        Balance:
                                                        <b className="text-green-600">
                                                            ${Number(user.balance).toLocaleString()}
                                                        </b>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        Escrow:
                                                        <b className="text-purple-600">
                                                            ${Number(user.escrowBalance).toLocaleString()}
                                                        </b>
                                                    </div>


                                                </div>
                                            )}
                                        </td>

                                        {/* ACTIONS */}
                                        <td className="p-4 flex flex-col gap-2">
                                            {editing === user.id ? (
                                                <button
                                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition w-full"
                                                    onClick={() =>
                                                        saveUserChanges(user.id)
                                                    }
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition w-full flex items-center justify-center gap-2 cursor-pointer"
                                                    onClick={() =>
                                                        startEditing(user)
                                                    }
                                                >
                                                    <RebaseEditIcon />
                                                    Edit
                                                </button>
                                            )}

                                            <button
                                                onClick={() =>
                                                    toggleExpand(user.id)
                                                }
                                                className="text-gray-600 text-xs flex items-center gap-1 hover:text-indigo-600 transition cursor-pointer"
                                            >
                                                {isOpen ? (
                                                    <>
                                                        Hide details{" "}
                                                        <ContentPasteOffIcon />
                                                    </>
                                                ) : (
                                                    <>
                                                        View details{" "}
                                                        <ContentPasteGoIcon />
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                    </tr>

                                    {/* EXPANDED DETAILS */}
                                    {isOpen && (
                                        <tr className="bg-gray-50 animate-fadeIn">
                                            <td colSpan="5" className="p-6">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {/* PERSONAL INFO */}
                                                    <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white text-gray-700">
                                                        <h3 className="text-sm font-bold mb-2">
                                                            Personal Info
                                                        </h3>
                                                        <p>
                                                            <b>Name:</b>{" "}
                                                            {user.name}
                                                        </p>
                                                        <p>
                                                            <b>Username:</b> @
                                                            {user.username}
                                                        </p>
                                                        <p>
                                                            <b>DOB:</b>{" "}
                                                            {formatDate(
                                                                user.dob
                                                            )}
                                                        </p>
                                                        <p>
                                                            <b>Gender:</b>{" "}
                                                            {user.gender || 'NOT SET'}
                                                        </p>
                                                        <p className="flex items-center">
                                                            <b>Country:</b>{" "}
                                                            <td className="p-4">
                                                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full shadow-sm ">
                                                                    {user.country || 'NOT SET'}
                                                                </span>
                                                            </td>
                                                        </p>
                                                    </div>

                                                    {/* ACCOUNT */}
                                                    <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white text-gray-700">
                                                        <h3 className="text-sm font-bold mb-2">
                                                            Account
                                                        </h3>
                                                        <p className="flex items-center ">
                                                            <b>Type:</b>{" "}
                                                            <span className={`ml-2 px-3 py-1 ${user.type === 'admin' ? 'bg-indigo-100 text-indigo-800 ' : 'bg-yellow-100 text-yellow-800 '} text-xs rounded-full shadow-sm `}>
                                                                {user.type}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <b>Address:</b>{" "}
                                                            {user.address}
                                                        </p>
                                                        <p>
                                                            <b>Joined:</b>{" "}
                                                            {formatDate(
                                                                user.createdAt
                                                            )}
                                                        </p>
                                                    </div>

                                                    {/* TRANSACTION SUMMARY */}
                                                    <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white text-gray-700">
                                                        <h3 className="text-sm font-bold mb-2">
                                                            Transactions
                                                        </h3>
                                                        <p>
                                                            <b>Total Deposit:</b>{" "}
                                                            ${user.totalDeposit}
                                                        </p>
                                                        <p>
                                                            <b>
                                                                Total
                                                                Withdrawal:
                                                            </b>{" "}
                                                            $
                                                            {
                                                                user.totalWithdrawal
                                                            }
                                                        </p>
                                                        <p>
                                                            <b>Total Debit:</b>{" "}
                                                            ${user.totalDebit}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}

                        {filteredUsers.length === 0 && (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="p-10 text-center text-gray-400 text-sm"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
