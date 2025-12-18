import { useEffect, useState } from 'react';
import { bathrooms, beds, sizes } from '../../utils/svg'
import { useLocation } from 'react-router-dom'
import Loader from '../../components/Loader';

function Propertylisting({ properties = [], handleAddToEscrow, addedProperties = [], loading, handleView }) {
    const location = useLocation()

    const [localAdded, setLocalAdded] = useState([]);

    // Keep track of added properties locally
    useEffect(() => {
        setLocalAdded(addedProperties);
    }, [addedProperties]);

    const handleClick = (property) => {
        handleAddToEscrow(property);
        setLocalAdded((prev) => [...prev, property.id || property.title]);
    };
    if (loading) {
        return <Loader />
    }
    return (
        <div className='flex flex-wrap items-center  justify-center gap-6 my-5'>
            {properties.map((property) => {
                const propertyId = property.id || property.title;
                const isAdded = localAdded.includes(propertyId);
                return (<div key={property?.id || property?.title} className={`relative flex flex-col ${location.pathname === '/dashboard/properties' ? 'md:max-w-[250px] max-w-[300px]' : 'max-w-[300px]'} overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF]`}>
                    <img src={property?.img} alt="" className='w-full h-[200px] ' />
                    <section className='w-[90%] mx-auto flex flex-col py-5 '>
                        <h3 className='text-[#7065F0] text-[18px] font-extrabold'>${Number(property?.price).toLocaleString()}  <span className=' text-gray-400 text-[16px] font-normal'>/ {property?.type === 'buy' ? 'for sale' : 'monthly'}</span></h3>
                        <h2 className='text-[#000929] text-[24px] font-bold'>{property?.title.slice(0, 13)}...</h2>
                        <h4 className='text-gray-400 text-[16px] font-normal '>{property?.location}</h4>
                        <h4 className='text-gray-400 text-[16px] font-normal mb-4 mm:h-[50px]'>{property?.description.slice(0, 25)}</h4>

                        <div className='w-full mm:min-h-[60px] border-t-[1.5px] border-[#F0EFFB] pt-4 flex flex-wrap gap-2 items-center justify-between'>
                            <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {property?.bed} Beds</span>
                            <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{property?.bathroom} Bathrooms</span>
                            <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {property?.size} sqm</span>
                        </div>

                        <button onClick={() => handleClick(property)} className='absolute top-2 right-2 bg-[#7065F0] flex items-center justify-center gap-2 px-5 h-8 text-white  text-[16px] font-normal  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>{isAdded ? 'Added' : 'Add'}</button>
                        <button onClick={() => handleView(property)} className=' bg-[#7065F0] flex items-center justify-center gap-2 px-5 h-8 text-white  text-[16px] font-normal  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>View</button>


                    </section>
                </div>)
            })}
        </div>
    )
}

export default Propertylisting