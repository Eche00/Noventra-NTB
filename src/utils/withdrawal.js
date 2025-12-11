// lib/logics/profileLogic.ts
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useUserInfo } from "./userCresidentials";



export const withdrawalLogic = () => {
    const { user, loading } = useUserInfo();

    const [step, setStep] = useState(0);
    const [passwordInput, setPasswordInput] = useState("");

    const [card, setCard] = useState({ email: "", username: "" });

    const [unlockTime, setUnlockTime] = useState(null);
    const [remaining, setRemaining] = useState(0);

    const [list, setList] = useState([]);
    const [loadin, setLoading] = useState(true);

    //  CHECK IF USER HAS ALREADY SUBMITTED A WITHDRAWAL REQUEST

    useEffect(() => {
        if (!loading && user?.uid) {
            const ref = doc(db, "userwithdrawal", user.uid);

            getDoc(ref).then((snap) => {
                if (snap.exists()) {
                    const data = snap.data();
                    setUnlockTime(data.unlockTime);
                    setStep(2);
                }
            });
        }
    }, [loading, user]);

    //    STEP 0 — PASSWORD SUBMIT

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (passwordInput !== user?.password) {
            return toast.error("Incorrect password.");
        }

        // If user already submitted a request, skip directly
        if (unlockTime) {
            setStep(2);
            return;
        }

        setStep(1);
    };

    //    SAVE WITHDRAWAL REQUEST IN FIRESTORE

    const saveWithdrawalRequest = async (unlockTimestamp) => {
        try {
            const ref = doc(db, "userwithdrawal", user.uid);

            await setDoc(ref, {
                userId: user.uid,
                email: user.email || "",
                username: user.username || "",
                unlockTime: unlockTimestamp,
                requestedAt: Date.now()
            });

            console.log("Withdrawal request stored successfully");
        } catch (error) {
            console.error("Error saving withdrawal request:", error);
            toast.error("Failed to save withdrawal request");
        }
    };

    //  STEP 1 — VALIDATE EMAIL & USERNAME
    const handleCardSubmit = async (e) => {
        e.preventDefault();

        // Block double submission
        if (unlockTime) {
            return toast.error("You already have a pending withdrawal request.");
        }

        if (card.email.trim().toLowerCase() !== (user.email || "").toLowerCase()) {
            return toast.error("Email does not match your registered email.");
        }

        if (card.username.trim().toLowerCase() !== (user.username || "").toLowerCase()) {
            return toast.error("Username does not match your registered username.");
        }

        // Generate 2-week unlock time
        const twoWeeks = 14 * 24 * 60 * 60 * 1000;
        const target = Date.now() + twoWeeks;

        setUnlockTime(target);

        await saveWithdrawalRequest(target);

        setStep(2);
    };

    //  DISPLAYING WITHDRAWAL LIST 
    useEffect(() => {
        const fetchWithdrawals = async () => {
            try {
                const ref = collection(db, "userwithdrawal");
                const q = query(ref, orderBy("requestedAt", "desc"));

                const snap = await getDocs(q);

                const arr = [];
                snap.forEach((doc) => {
                    arr.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });

                setList(arr);
            } catch (error) {
                console.error("Error fetching withdrawal list:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWithdrawals();
    }, []);

    return {
        step, setStep, passwordInput, setPasswordInput, card, setCard, unlockTime, setUnlockTime, remaining, setRemaining, handlePasswordSubmit, handleCardSubmit, list, setList, loadin, setLoading
    };
};