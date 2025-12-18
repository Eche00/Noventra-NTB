
import { LocationOn } from '@mui/icons-material'
import Propertylisting from './Propertylisting'
import { Link } from 'react-router-dom'
import { propertiesLogic } from '../../utils/properties';
import { bathrooms, beds, sizes } from '../../utils/svg';


function ListingCta() {
    const { properties } = propertiesLogic();
    return (
        <div>
            {/* intro  */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[#000929] md:text-[40px] text-[20px] md:text-start text-center font-bold '>Based in Florida & <span className='text-[#7065F0]'> California <LocationOn fontSize='large' /></span></h1>
                <h3 className='md:text-[16px] text-[12px] font-normal md:text-start text-center '>Quality listings across Florida and California..</h3>
            </div>

            {/* container  */}
            <main className='md:w-[80%] w-[90%] mx-auto flex flex-col gap-4 mt-12'>

                <div className='flex flex-wrap items-center md:justify-between justify-center gap-6 my-5'>
                    {properties.slice(0, 3).map((property) => <div key={property?.id || property?.title} className={`flex flex-col ${location.pathname === '/dashboard/properties' ? 'md:max-w-[250px] max-w-[300px]' : 'max-w-[300px]'} overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF]`}>
                        <img src={property?.img} alt="" className='w-full h-[200px] ' />
                        <section className='w-[90%] mx-auto flex flex-col py-5'>
                            <h3 className='text-[#7065F0] text-[18px] font-extrabold'>${Number(property?.price).toLocaleString()}  <span className=' text-gray-400 text-[16px] font-normal'>/ {property?.type === 'buy' ? 'for sale' : 'monthly'}</span></h3>
                            <h2 className='text-[#000929] text-[24px] font-bold'>{property?.title.slice(0, 13)}...</h2>
                            <h4 className='text-gray-400 text-[16px] font-normal '>{property?.location}</h4>
                            <h4 className='text-gray-400 text-[16px] font-normal mb-4 mm:h-[50px]'>{property?.description.slice(0, 25)}</h4>

                            <div className='w-full border-t-[1.5px] border-[#F0EFFB] pt-4 flex flex-wrap gap-2 items-center justify-between'>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {property?.bed} Beds</span>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{property?.bathroom} Bathrooms</span>
                                <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {property?.size}</span>
                            </div>
                        </section>
                    </div>)}
                </div>
                {/* nav buttons  */}
                <section className='flex  items-center justify-center mb-10'>
                    <Link to="/properties" className=' py-4 px-16 bg-[#7065F0] text-white rounded-lg text-[18px] font-bold cursor-pointer'>More</Link>

                </section>
            </main>
        </div>
    )
}

export default ListingCta