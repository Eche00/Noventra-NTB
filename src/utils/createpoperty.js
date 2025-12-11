// lib/logics/profileLogic.ts
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";



export const createProperty = () => {
    const [step, setStep] = useState(1);

    const [form, setForm] = useState({
        img: "",
        type: "rent",
        price: "",
        title: "",
        location: "",
        description: "",
        beds: "",
        bathrooms: "",
        size: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await addDoc(collection(db, "properties"), {
                ...form,
                createdAt: Date.now(),
            });

            toast.success("Property created successfully!");

            setForm({
                img: "",
                type: "rent",
                price: "",
                title: "",
                location: "",
                description: "",
                beds: "",
                bathrooms: "",
                size: "",
            });

            setStep(1);
        } catch (error) {
            console.log(error);
            toast.error("Failed to create property");
        }
        setLoading(false);
    };

    const next = () => setStep(step + 1);
    const prev = () => setStep(step - 1);


    return { step, setStep, form, setForm, loading, setLoading, handleChange, handleSubmit, next, prev };
};