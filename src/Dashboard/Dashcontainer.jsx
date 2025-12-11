
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useNavBar } from "../utils/navbarcontroller";
import { useEffect, useState } from "react";
import { useUserInfo } from "../utils/userCresidentials";
import Userverifying from "./Dashboardpages/Userverifying";
function Dashcontainer() {
    const { navBar } = useNavBar();
    const { user } = useUserInfo();
    const [nav, setNav] = useState(false);



    return (
        <div>
            {user ?
                <div className=" flex sm:h-screen overflow-hidden">
                    <div className="mm:flex hidden">
                        <Sidebar nav={nav} setNav={setNav} />
                    </div>
                    <AnimatePresence mode="wait">
                        {navBar && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                className="mm:w-[270px] w-[200px] h-full shadow-lg fixed inset-0 z-50 flex mm:hidden">
                                <Sidebar />
                                {/* </motion.div> */}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <section className="mm:pl-[270px] flex-1 flex flex-col min-h-screen overflow-y-scroll">
                        <Header nav={nav} setNav={setNav} />
                        <div className='min-h-screen sm:py-0 py-32 bg-gray-100'>
                            <Outlet />
                        </div>
                    </section>
                </div> :
                <Userverifying />
            }
        </div>
    );
}

export default Dashcontainer;
