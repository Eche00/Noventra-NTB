import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavBar } from "../utils/navbarcontroller";
import { Create, Dashboard, House, Payment, Logout, Group, MoneyOff, BrightnessHigh } from "@mui/icons-material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import RoofingIcon from '@mui/icons-material/Roofing';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import { useUserInfo } from "../utils/userCresidentials";
function Sidebar() {
    const { navBarController } = useNavBar();
    const { user, handleLogOutUser } = useUserInfo();

    return (
        <div className="bg-[#E0DEF7]  fixed top-0 left-0 mm:w-[270px] w-[220px] h-screen  border-r border-[#E5E5E5] z-50 overflow-scroll">
            <main className=" w-full h-full flex flex-col">
                {/* logo */}
                <section className="flex items-center justify-between">
                    <div className='text-[#100A55] text-[28px] font-bold px-6'>
                        <Link to="/" className=" text-[34px] font-extrabold">ℭ</Link>EET
                    </div>

                </section>
                {/* nav section  */}
                <nav className="flex-1 flex flex-col gap-6 py-5 px-4">
                    {/* main menu  */}
                    <section className=" flex flex-col gap-1">
                        <p className=" text-[#0A0A0A] text-3 font-semibold pb-2 px-3">
                            MAIN MENU
                        </p>
                        {/* links  */}
                        <NavLink
                            to="/dashboard/"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            {/* text-[#0A0A0A] */}
                            <SpaceDashboardIcon />
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/dashboard/deposit"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <CurrencyExchangeIcon /> Deposit
                        </NavLink>
                        <NavLink
                            to="/dashboard/withdraw"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <AssuredWorkloadIcon /> Withdraw

                        </NavLink>
                        <NavLink
                            to="/dashboard/create-escrow"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <DriveFileRenameOutlineIcon />
                            Create Escrow
                        </NavLink>

                        <NavLink
                            to="/dashboard/properties"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <RoofingIcon />
                            Properties
                        </NavLink>

                    </section>
                    {/* management   */}
                    <section className=" flex flex-col gap-1">
                        <p className=" text-[#0A0A0A] text-3 font-semibold pb-2 px-3">
                            MANAGEMENT
                        </p>
                        {/* links  */}
                        <NavLink
                            to="/dashboard/escrow-management"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <ManageHistoryIcon /> Escrow Management
                        </NavLink>
                        <NavLink
                            to="/dashboard/transactions"
                            className={({ isActive }) =>
                                isActive
                                    ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                    : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                            }>
                            <HistoryIcon />
                            Transactions
                        </NavLink>

                    </section>

                    {/* Admin routes && preference   */}

                    {user && user.type === 'admin' ?
                        <section className=" flex flex-col gap-1">
                            <p className=" text-[#0A0A0A] text-3 font-semibold pb-2 px-3">
                                Admin
                            </p>
                            {/* links  */}
                            <NavLink
                                to="/dashboard/property-management"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                <RealEstateAgentIcon />
                                Property Management
                            </NavLink>

                            <NavLink
                                to="/dashboard/withdraw-management"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                <MoneyOff />
                                Withdrawal List
                            </NavLink>
                            <NavLink
                                to="/dashboard/transactions-management"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                <BrightnessHigh />
                                Transaction M
                            </NavLink>
                            <NavLink
                                to="/dashboard/users-management"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                <Group />
                                Users
                            </NavLink>
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                <PersonIcon />
                                Profile
                            </NavLink>
                            <span className=" mm:text-[16px] text-[12px] bg-red-500 font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg cursor-pointer" onClick={handleLogOutUser}><Logout fontSize="small" /> Logout</span>

                        </section> :
                        <section className=" flex flex-col gap-1">
                            <p className=" text-[#0A0A0A] text-3 font-semibold pb-2 px-3">
                                PREFERENCE
                            </p>
                            {/* links  */}

                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? " mm:text-[16px] text-[12px] bg-[#7065F0] font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg"
                                        : " mm:text-[16px] text-[12px] text-gray-600 hover:text-gray-800 font-medium  flex items-center mm:gap-3 gap-1 rounded-lg py-2 px-3  "
                                }>
                                < PersonIcon />
                                Profile
                            </NavLink>
                            <span className=" mm:text-[16px] text-[12px] bg-red-500 font-semibold  flex items-center mm:gap-3 gap-1 text-[#FFFFFF] py-2 px-3 shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_rgba(0,0,0,0.15)] rounded-lg cursor-pointer" onClick={handleLogOutUser}><Logout fontSize="small" /> Logout</span>

                        </section>}

                </nav>


            </main>
        </div>
    );
}

export default Sidebar;
