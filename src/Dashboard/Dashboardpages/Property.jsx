import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { bathrooms, beds, sizes } from "../../utils/svg";
import { LocationOn } from "@mui/icons-material";
import { propertiesLogic } from "../../utils/properties";

function Property() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const {
        addedProperties,
        handleAddToEscrow,
    } = propertiesLogic();
    const [localAdded, setLocalAdded] = useState([]);

    // Keep track of added properties locally
    useEffect(() => {
        setLocalAdded(addedProperties);

    }, [addedProperties]);

    const handleClick = (property) => {
        handleAddToEscrow(property);
        setLocalAdded((prev) => [...prev, property.id || property.title]);
    };
    const propertyId = property?.id || property?.title;
    const isAdded = localAdded.includes(propertyId);
    const dummyProperties = [
        {
            id: "dummy-rent",
            img: "/hero.png",
            title: "Dummy Rent",
            price: 2700,
            location: "City A",
            bed: 2,
            bathroom: 1,
            size: "6x7.7 m",
            type: "rent",
            description: "Nice property"
        },
        {
            id: "dummy-buy",
            img: "/hero.png",
            title: "Dummy Buy",
            price: 5000,
            location: "City B",
            bed: 3,
            bathroom: 2,
            size: "8x9 m",
            type: "buy",
            description: "Luxury property"
        },
    ];

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const ref = doc(db, "properties", id);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    setProperty({ id: snap.id, ...snap.data() });
                } else {
                    // fallback search dummy
                    const dummy = dummyProperties.find(p => p.id === id);
                    setProperty(dummy || null);
                }
            } catch (err) {
                console.error(err);
                const dummy = dummyProperties.find(p => p.id === id);
                setProperty(dummy || null);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) return <div className="p-6 text-center">Loading...</div>;

    if (!property) return <div className="p-6 text-center text-red-500">Property not found</div>;

    return (
        <div className="p-6 max-w-3xl mx-auto min-h-[70vh]">
            <img
                src={property.img}
                alt={property.title}
                className="w-full h-60 object-cover rounded-xl mb-6"
            />

            <h1 className="text-2xl font-bold">{property.title}</h1>
            <p className="text-gray-500 flex items-center justify-between">{property.location} <span><LocationOn /></span></p>
            <div className="mt-4 space-y-6">

                {/* Price + Type */}
                <div className="flex items-center justify-between">
                    <p className="mm:text-3xl text-xl font-semibold text-gray-900">
                        ${Number(property.price).toLocaleString()} <span className=' text-gray-400 text-[16px] font-normal'>/ {property?.type === 'buy' ? 'for sale' : 'monthly'}</span>
                    </p>
                    <span className={`w-fit px-5 py-1 text-xs font-semibold rounded-full shadow-sm bg-green-100 text-green-800`}>
                        {property.type}
                    </span>
                </div>

                {/* Stats */}
                <div className='w-full mm:min-h-[60px]  pt-4 flex flex-wrap gap-2 items-center justify-between'>
                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {property?.bed} Beds</span>
                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{property?.bathroom} Bathrooms</span>
                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {property?.size}sqm</span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200"></div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                    {property.description}
                </p>
                <button onClick={() => handleClick(property)} className=' bg-[#7065F0] flex items-center justify-center gap-2 px-5 h-8 text-white  text-[16px] font-normal  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>{isAdded ? 'Added' : 'Add'}</button>

            </div>

        </div>
    );
}

export default Property;
