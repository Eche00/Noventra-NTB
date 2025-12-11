import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { arrayRemove, arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useUserInfo } from "./userCresidentials";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const propertiesLogic = () => {
    const { user } = useUserInfo();
    const navigate = useNavigate();
    const [addedProperties, setAddedProperties] = useState([]);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [tab, setTab] = useState("all");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const propertiesPerPage = 6;

    // Dummy fallback
    const dummyProperties = [
        { img: "/hero.png", title: "Dummy Rent", price: 2700, location: "City A", bed: 2, bathroom: 1, size: "6x7.7 m", type: "rent", description: "Nice property" },
        { img: "/hero.png", title: "Dummy Buy", price: 5000, location: "City B", bed: 3, bathroom: 2, size: "8x9 m", type: "buy", description: "Luxury property" },
    ];

    // Fetch properties from Firestore
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "properties"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Sort by createdAt (descending: newest first)
                const sortedData = data.sort((a, b) => {
                    const dateA = new Date(a.createdAt || 0);
                    const dateB = new Date(b.createdAt || 0);
                    return dateB - dateA; // newest first
                });

                setProperties(sortedData.length > 0 ? sortedData : dummyProperties);

            } catch (error) {
                console.error("Error fetching properties:", error);
                setProperties(dummyProperties);
            }
        };
        fetchProperties();
    }, []);

    // Initialize addedProperties from user.escrows
    useEffect(() => {
        if (user) {
            setAddedProperties(user.escrows?.map(p => p.id || p.title) || []);
        }
    }, [user]);

    // Set loading false only when both properties and user are ready
    useEffect(() => {
        if (properties.length > 0 && user !== undefined) {
            setLoading(false);
        }
    }, [properties, user]);

    // Filter properties based on tab and search
    useEffect(() => {
        const filtered = properties
            .filter(p => tab === "all" ? true : p.type === tab)
            .filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.location.toLowerCase().includes(search.toLowerCase())
            );
        setFilteredProperties(filtered);
        setCurrentPage(1);
    }, [properties, tab, search]);

    // Handle adding/removing property to/from user's escrows
    const handleAddToEscrow = async (property) => {
        if (!user) {
            toast.error("You must be logged in to add an escrow");
            navigate('/signin');
            return;
        }

        const propertyId = property.id || property.title;
        const userRef = doc(db, "users", user.uid);

        try {
            if (addedProperties.includes(propertyId)) {
                await updateDoc(userRef, { escrows: arrayRemove(property) });
                setAddedProperties(prev => prev.filter(id => id !== propertyId));
                toast.success("Property removed from escrow");
            } else {
                await updateDoc(userRef, { escrows: arrayUnion(property) });
                setAddedProperties(prev => [...prev, propertyId]);
                toast.success("Property added to escrow");
            }
        } catch (error) {
            console.error("Error updating escrow:", error);
            toast.error("Failed to update escrow");
        }
    };
    const handleView = async (property) => {
        navigate(`/dashboard/${property.id || property.title}`);

    };

    // Pagination
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const paginatedProperties = filteredProperties.slice(startIndex, startIndex + propertiesPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const nextPage = () => goToPage(currentPage + 1);
    const prevPage = () => goToPage(currentPage - 1);

    const handleTabChange = (type) => setTab(type);
    const handleSearchChange = (value) => setSearch(value);

    return {
        properties: paginatedProperties,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        tab,
        search,
        handleTabChange,
        handleSearchChange,
        goToPage,
        addedProperties,
        setAddedProperties,
        handleAddToEscrow,
        loading, handleView
    };
};
