
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { useUserInfo } from "../utils/userCresidentials";
import Userverifying from "./Dashboardpages/Userverifying";
function Dashcontainer() {
    const { user } = useUserInfo();



    return (
        <div>
            {user ?
                <div className=" flex sm:h-screen overflow-hidden  flex-col">
                    <div className="h-fit"><Header /></div>
                    <div className="mm:flex hidden">
                        <Sidebar />
                    </div>


                    <section className="mm:pl-[270px] flex-1 flex flex-col min-h-screen overflow-y-scroll">

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
