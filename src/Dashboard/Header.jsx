import { Link, NavLink } from "react-router-dom";
import { useUserInfo } from "../utils/userCresidentials";

function Header({ nav, setNav }) {
    const { user, loading } = useUserInfo();



    return (
        <div className="mm:sticky fixed top-0 left-0 w-full bg-[#FFFFFF] py-1.5 px-4 flex  flex-wrap items-center justify-between z-50">
            {/* logo */}
            <Link to="/" >
                <img src="/logomain.png" className='sm:w-[200px] w-[100px]' alt="" />
            </Link>
            {/* center section (search input)  */}
            <div className='mmd:flex flex-1 hidden items-center justify-center '>
                <nav className='flex items-center w-fit px-3 py-1 gap-4 bg-gray-100 rounded-full  text-[#100A55] text-[12px] font-medium'>
                    <NavLink to="/" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? " text-blue-700" : ""}>About</NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Contact Us</NavLink>
                    <NavLink to="/investments" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Investments</NavLink>
                    <NavLink to="/loans" className={({ isActive }) => isActive ? " text-blue-700" : ""}>Loans</NavLink>
                </nav>
            </div>
            {/* end section  */}
            <section className="flex items-center gap-4">
                <hr className=" h-7 border border-[#E5E5E5] mm:flex hidden" />
                {/* user info  */}
                <section className="flex  items-center justify-between w-full py-2.5 px-[3]">
                    <div className="flex items-center gap-3">
                        {" "}
                        <img
                            src="/logo.png"
                            alt=""
                            className=" sm:w-8 sm:h-8 w-5 h-5 object-cover rounded-full bg-black"
                        />
                        <p className="flex flex-col text-[#0A0A0A] md:text-[16px] sm:text-2.5 text-xs font-medium ">
                            <span className=" text-[#737373]  md:text-[12px] text-[8px] font-normal ">
                                welcome,
                            </span>
                            <span className=" capitalize">{loading ? '' : user?.username || 'customer'}</span>

                        </p>
                    </div>

                </section>
            </section>
        </div>
    );
}

export default Header;
