import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Mobilenav from './Mobilenav';
import { Close } from '@mui/icons-material';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useUserInfo } from '../utils/userCresidentials';

function Header() {
    const [nav, setNav] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const { user, loading } = useUserInfo();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white'>
            <div className='flex items-center justify-between gap-4 py-3 sm:px-12 px-3'>
                <section className='flex flex-1 items-baseline gap-12'>
                    {/* logo */}
                    <Link to="/" className="">
                        <img src="/logomain.png" className='sm:w-[200px] w-[150px]' alt="" />
                    </Link>

                </section>
                {/* nav links */}
                <div className='md:flex flex-1 hidden items-center justify-center '>
                    <nav className='flex items-center w-fit px-3 py-1 gap-4 bg-gray-100 rounded-full  text-[#100A55] text-[12px] font-medium'>
                        <NavLink to="/" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Home</NavLink>
                        <NavLink to="/properties" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Properties</NavLink>
                        <NavLink to="/escrow" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Escrow</NavLink>
                        <NavLink to="/escrow" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Escrow</NavLink>
                        <NavLink to="/escrow" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Escrow</NavLink>
                    </nav>
                </div>
                {/* Auth buttons */}
                {currentUser ? <Link to="/dashboard/" className='md:flex hidden  text-white rounded-lg text-[16px]'>
                    <div className="flex items-center gap-2">
                        {" "}
                        <hr className=" h-7 border border-gray-400 mm:flex hidden" />
                        <img
                            src="/logo.png"
                            alt=""
                            className=" w-8 h-8 object-cover rounded-full bg-black"
                        />
                        <p className="flex flex-col text-[#0A0A0A] md:text-[16px] text-2.5 font-medium ">
                            <span className=" text-[#737373]  md:text-[12px] text-[8px] font-normal ">
                                welcome,
                            </span>
                            <span className=" capitalize">{loading ? '' : user?.username || 'customer'}</span>

                        </p>
                    </div></Link>
                    : <section className='md:flex flex-1 hidden items-center justify-end gap-4 '>
                        <Link to="/signup" className=' py-1.5 px-5 bg-blue-700 text-white rounded-full text-[13px] border-2 border-blue-700'>Sign up</Link>

                        <Link to="/signin" className=' py-1.5 px-5 text-black rounded-full text-[13px] border-2 border-blue-700'>Log in</Link>
                    </section>}

                {/* mobile nav and Auth buttons */}
                <section className='flex md:hidden items-center gap-4 w-fit' onClick={() => setNav(!nav)}>
                    {nav ? <Close fontSize='large' /> : <DragHandleIcon fontSize='large' />}
                </section>
                {nav && <Mobilenav />}
            </div>
        </div>
    )
}

export default Header