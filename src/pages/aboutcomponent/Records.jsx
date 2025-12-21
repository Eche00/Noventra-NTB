import { Star } from '@mui/icons-material'
import React from 'react'

function Records() {
    return (
        <div className='  py-5 mt-5 flex flex-wrap items-center justify-around gap-5 sm:w-[85%] w-[90%] mx-auto'>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200 lg:flex hidden' />

            <section className='sm:w-fit w-full flex flex-col items-center'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center  justify-between  gap-2'>Regulatory Compliance </h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5iu2GwKMU6fAJXDDm6IOmTj-lxcxEVlvHg&s'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> </h3>
                <span className='flex text-gray-400 text-[12px] font-bold '> ISO 27001 Certified</span>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full flex flex-col items-center'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center  justify-between  gap-2'>Data Protection </h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://thumbs.dreamstime.com/b/ssl-secure-connection-badge-ssl-secure-connection-badge-showing-lock-icon-115075427.jpg'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> </h3>
                <span className='flex text-gray-400 text-[12px] font-bold '> End-to-End Encryption</span>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full flex flex-col items-center'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center  justify-between  gap-2'>Fraud Protection </h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_Q3C6jeKRMLeYdyOJ8Gbn2MgQG_86GYyhg&s'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> </h3>
                <span className='flex text-gray-400 text-[12px] font-bold '>Advanced Fraud Monitoring</span>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />
            <section className='sm:w-fit w-full flex flex-col items-center'>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center  justify-between  gap-2'>Payment Security</h3>
                <h3 className='text-blue-700 text-[16px] font-bold flex items-center justify-between  gap-2'> <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyTG6z4dX6nkX_r_x6xmGOj3GKGXL9SU3Jw&s'
                    alt='logo'
                    className="w-10 h-10 object-cover rounded-[10px] "
                /> </h3>
                <span className='flex text-gray-400 text-[12px] font-bold '>PCI DSS Compliant</span>
            </section>
            <hr className='sm:w-[0.1px] w-full sm:min-h-[50px] min-h-[0.1px] bg-gray-200' />

        </div>
    )
}

export default Records