import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../lib/firebase";

export const manageUsers = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [editing, setEditing] = useState(null);
    const [balanceInputs, setBalanceInputs] = useState({
        balance: "",
        escrowBalance: "",
        totalDeposit: "",
        totalWithdrawal: "",
        totalDebit: ""
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const ref = collection(db, "users");
                const snap = await getDocs(ref);

                const arr = [];
                snap.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));

                setUsers(arr);
                setFilteredUsers(arr); // default list
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    //  Filter users by search text
    useEffect(() => {
        const s = search.toLowerCase();

        const result = users.filter((user) =>
            user.name?.toLowerCase().includes(s) ||
            user.username?.toLowerCase().includes(s) ||
            user.email?.toLowerCase().includes(s) ||
            user.phone?.toLowerCase().includes(s) ||
            user.country?.toLowerCase().includes(s)
        );

        setFilteredUsers(result);
    }, [search, users]);

    const startEditing = (user) => {
        setEditing(user.id);
        setBalanceInputs({
            balance: user.balance ?? 0,
            escrowBalance: user.escrowBalance ?? 0,
            totalDeposit: user.totalDeposit ?? 0,
            totalWithdrawal: user.totalWithdrawal ?? 0,
            totalDebit: user.totalDebit ?? 0
        });
    };

    const saveUserChanges = async (userId) => {
        try {
            const userRef = doc(db, "users", userId);

            await updateDoc(userRef, {
                balance: Number(balanceInputs.balance),
                escrowBalance: Number(balanceInputs.escrowBalance),
                totalDeposit: Number(balanceInputs.totalDeposit),
                totalWithdrawal: Number(balanceInputs.totalWithdrawal),
                totalDebit: Number(balanceInputs.totalDebit)
            });

            toast.success("User balances updated!");

            // Update UI instantly
            setUsers((prev) =>
                prev.map((u) =>
                    u.id === userId
                        ? {
                            ...u,
                            balance: Number(balanceInputs.balance),
                            escrowBalance: Number(balanceInputs.escrowBalance),
                            totalDeposit: Number(balanceInputs.totalDeposit),
                            totalWithdrawal: Number(balanceInputs.totalWithdrawal),
                            totalDebit: Number(balanceInputs.totalDebit)
                        }
                        : u
                )
            );

            setEditing(null);
        } catch (error) {
            console.error("Error saving user:", error);
            toast.error("Failed to update user.");
        }
    };

    return { users, setUsers, filteredUsers, setFilteredUsers, loading, setLoading, search, setSearch, editing, setEditing, balanceInputs, setBalanceInputs, startEditing, saveUserChanges }
}