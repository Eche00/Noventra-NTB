
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
                    <div className='mm:pl-[270px] py-18 sm:py-0 min-h-screen overflow-scroll bg-gray-100'>
                        <Outlet />
                    </div>
                </div> :
                <Userverifying />
            }
        </div>
    );
}

export default Dashcontainer;
