// lib/logics/profileLogic.ts

import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useUserInfo = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        country: "",
        address: "",
    });

    const [cardData, setCardData] = useState({
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    // ────────────────────────────────────────────────
    // FETCH USER ONCE WHEN AUTH CHANGES
    // ────────────────────────────────────────────────
    const fetchUser = async (uid) => {
        const ref = doc(db, "users", uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            const userData = { uid, ...snap.data() };
            setUser(userData);

            // Initialize formData safely when user loads
            setFormData({
                username: userData.username || "",
                email: userData.email || "",
                phone: userData.phone || "",
                dob: userData.dob || "",
                gender: userData.gender || "",
                country: userData.country || "",
                address: userData.address || "",
            });

            // Initialize cardData safely if exists
            setCardData({
                cardName: userData.cardDetails?.cardName || "",
                cardNumber: userData.cardDetails?.cardNumber || "",
                expiry: userData.cardDetails?.expiry || "",
                cvv: userData.cardDetails?.cvv || "",
            });
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                await fetchUser(authUser.uid);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // ────────────────────────────────────────────────
    // 🔥 MANUAL USER RELOAD FUNCTION
    // ────────────────────────────────────────────────
    const reloadUser = async () => {
        if (!auth.currentUser) return;
        await fetchUser(auth.currentUser.uid);
    };

    // ────────────────────────────────────────────────
    // LOG OUT
    // ────────────────────────────────────────────────
    const handleLogOutUser = async () => {
        try {
            await signOut(auth);
            navigate("/");
            toast.success("Signed out successfully");
        } catch (error) {
            toast.error("Unable to sign out.");
        }
    };

    // ────────────────────────────────────────────────
    // UPDATE PERSONAL PROFILE
    // ────────────────────────────────────────────────
    const updateUserProfile = async (updatedData) => {
        if (!user) return;
        try {
            const userRef = doc(db, "users", user.uid);

            // Merge existing user with updatedData
            const mergedData = { ...user, ...updatedData };

            await updateDoc(userRef, mergedData);
            await reloadUser(); // 🔥 refresh after update
            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error("Profile update failed");
        }
    };

    // ────────────────────────────────────────────────
    // UPDATE CARD DETAILS
    // ────────────────────────────────────────────────
    const updateUserCard = async (cardDetails) => {
        if (!user) return;
        try {
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, { cardDetails });
            await reloadUser(); // 🔥 refresh after update
            toast.success("Card updated successfully");
        } catch (error) {
            toast.error("Card update failed");
        }
    };

    const current = Number(user?.balance) || 0;
    const previous = Number(user?.previousBalance) || 0; // you decide where this comes from

    const difference = current - previous;
    const changeText =
        difference > 0
            ? `↑ Up by $${difference.toLocaleString()}`
            : difference < 0
                ? `↓ Down by $${Math.abs(difference).toFixed(2)}`
                : "No change";

    return {
        user,
        loading,
        reloadUser,
        handleLogOutUser,
        isEditing,
        setIsEditing,
        updateUserProfile,
        updateUserCard,
        formData,
        setFormData,
        cardData,
        setCardData,
        difference,
        changeText,
        handleChange: (field, value) =>
            setFormData((prev) => ({ ...prev, [field]: value })),
        handleCardChange: (field, value) =>
            setCardData((prev) => ({ ...prev, [field]: value })),
    };
};
