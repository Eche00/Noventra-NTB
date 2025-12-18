import { Star } from '@mui/icons-material'
import React from 'react'

function Records() {
    return (
        <div className='  py-5 mt-5 flex flex-wrap items-center justify-around gap-5 sm:w-[85%] w-[90%] mx-auto'>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200 lg:flex hidden' />

            <section className='sm:w-fit w-full'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center  justify-between  gap-2'>TRUST PILOT <span className='flex text-yellow-500'><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /></span></h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> <span className='flex text-gray-400 text-[12px] font-bold '>31 REVIEWS</span></h3>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'>G2 (fintech) <p className='flex items-center p-0 m-0 text-yellow-500'><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><span className='text-gray-200'><Star fontSize='small' /></span></p></h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://images.seeklogo.com/logo-png/40/1/g2-logo-png_seeklogo-407782.png'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> <span className='flex text-gray-400 text-[12px] font-bold '>22 REVIEWS</span></h3>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'>CAPTERRA <span className='flex text-yellow-500'><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /></span></h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://cdn.worldvectorlogo.com/logos/capterra-1.svg'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> <span className='flex text-gray-400 text-[12px] font-bold '>57 REVIEWS</span></h3>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'>SITEJABBER <span className='flex text-yellow-500'><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /><Star fontSize='small' /></span></h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://s3.amazonaws.com/strapi-customer-resources-s3.sitejabber.com/www.sitejabber.com-resources-wp-content-uploads-2022-12-LinkedIn-Profile-Image-1.png'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> <span className='flex text-gray-400 text-[12px] font-bold '>42 REVIEWS</span></h3>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />

        </div>
    )
}

export default Records