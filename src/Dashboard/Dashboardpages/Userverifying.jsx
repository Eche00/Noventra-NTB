import React, { useEffect, useState } from 'react'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';

function Userverifying() {
    const [showSignin, setShowSignin] = useState(false);

    // Show after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSignin(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center p-6 bg-black/50">

            <div className="bg-linear-to-b from-[#E0DEF7] to-white w-[420px] rounded-3xl shadow-xl p-6 space-y-6 text-center">

                <h2 className="text-xl font-bold flex items-center justify-center flex-col-reverse">
                    <ContactsIcon fontSize="large" className="text-[#7065F0]" />
                </h2>


                {/* Spinner */}
                <div className="h-20 w-20 border-x-5 border-[#7065F0] rounded-full  animate-spin mx-auto"></div>

                <p className="text-gray-400 text-xs">User verification…</p>
                {showSignin &&
                    <p >Please <Link to='/signin' className=" text-[#7065F0] underline"> Signin</Link> to continue !</p>
                }
            </div>
        </div>
    )
}

export default Userverifying