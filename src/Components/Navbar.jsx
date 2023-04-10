import React, { useState } from "react";
import { useStore } from "@/Lib/store";
import { AiOutlineMenu, AiFillFolderOpen } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiHouse ,GiHandTruck} from "react-icons/gi";
import { BiImport, BiExport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { RiArrowDropDownLine, RiFolderSharedLine, RiFolderReceivedLine } from "react-icons/ri";
import { BsBoxFill, BsFillGearFill } from "react-icons/bs";
import { VscSymbolVariable } from "react-icons/vsc";
import { TbLockAccess } from "react-icons/tb";


const Navbar = ({ children }) => {
  const sidebarSecondChildClicked = useStore((state) => state.sidebarSecondChildClicked);
  const sidebarChildClicked = useStore((state) => state.sidebarChildClicked);
  const sidebarClicked = useStore((state) => state.sidebarClicked);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const toggleSidebarChild = useStore((state) => state.toggleSidebarChild);
  const toggleSidebarSecondChild = useStore((state) => state.toggleSidebarSecondChild);

  console.log(sidebarChildClicked);
  return (
    <>
      <aside className="h-screen flex top-0 fixed z-[9999] w-full">
        <aside className={`border-r p-2 h-screen transition-all duration-300 ${sidebarClicked ? "w-14" : "w-80"}`}>
          <span className="flex-row flex items-center space-x-4 justify-center">
            <GiHouse size={28} />
            {!sidebarClicked ? <p className="text-2xl font-semibold">Small WMS</p> : null}
          </span>
          <SidebarContent
            sidebarClicked={sidebarClicked}
            sidebarChildClicked={sidebarChildClicked}
            toggleSidebarChild={toggleSidebarChild}
            sidebarSecondChildClicked={sidebarSecondChildClicked}
            toggleSidebarSecondChild={toggleSidebarSecondChild}
          />
        </aside>
        {/*  navbar */}
        <TopBar toggleSidebar={toggleSidebar} />
      </aside>
      <main className={`${!sidebarClicked ? "ml-[19rem] " : "ml-[5.5rem]"} mr-6 mt-16 transition-all duration-300`}>{children}</main>
    </>
  );
};

export default Navbar;

const TopBar = ({ toggleSidebar }) => {
  const [isMenuLogOut, setMenuLogOut] = useState(false);
  const toggleMenuLogout = () => {
    setMenuLogOut((prev) => !prev);
  };
  return (
    <section className="border-b h-12 w-full flex bg-white flex-row justify-between items-center px-8">
      <AiOutlineMenu size={25} className="cursor-pointer" onClick={toggleSidebar} />

      <div className="flex flex-row items-center space-x-4">
        <p>Budi</p>
        <FaUserCircle size={25} className="cursor-pointer" onClick={toggleMenuLogout} />
        {isMenuLogOut ? (
          <ul className="bg-blue-100 animate-in rounded-box absolute shadow-2xl translate-y-14 cursor-pointer -translate-x-8 p-3">
            <li className="flex flex-row items-center space-x-2">
              <HiLogout color="black" size={25} />
              <p>Logout</p>
            </li>
          </ul>
        ) : null}
      </div>
    </section>
  );
};

const SidebarContent = ({
  sidebarClicked,
  toggleSidebarChild,
  sidebarChildClicked,
  toggleSidebarSecondChild,
  sidebarSecondChildClicked,
}) => {
  return (
    <ul className="space-y-2">
      {/* this is where u set the sidebar items */}
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800  mt-4 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  mt-4 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <MdDashboard size={28} />
        {!sidebarClicked ? <p className="font-lg font-semibold">Dashboard</p> : null}
      </NavLink>
      {/* Receive */}
      <NavLink
        to={"/receive"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <BiImport size={28} />
        {!sidebarClicked ? <p className="font-lg font-semibold">Receive</p> : null}
      </NavLink>
      {/* Issuing */}
      <NavLink
        to={"/issuing"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <BiExport size={28} />
        {!sidebarClicked ? <p className="font-lg font-semibold">Issuing</p> : null}
      </NavLink>

      {/* Report */}
      <section
        onClick={toggleSidebarChild}
        className="active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row space-x-3 cursor-pointer"
      >
        <AiFillFolderOpen size={28} />
        {!sidebarClicked ? <p className="font-lg font-semibold">Report</p> : null}
        {!sidebarClicked ? <RiArrowDropDownLine size={28} /> : null}
      </section>

      {sidebarChildClicked ? (
        <section className="space-y-2">
          {/* child 1  */}
          <NavLink
            to={"/receive-report"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <RiFolderReceivedLine size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Receive Report</p> : null}
          </NavLink>
          {/* child 2 */}
          <NavLink
            to={"/issuing-report"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <RiFolderSharedLine size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Issuing Report</p> : null}
          </NavLink>
        </section>
      ) : null}

      {/* master */}
      <section
        onClick={toggleSidebarSecondChild}
        className="active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row space-x-3 cursor-pointer"
      >
        <BsFillGearFill size={28} />
        {!sidebarClicked ? <p className="font-lg font-semibold">Master</p> : null}
        {!sidebarClicked ? <RiArrowDropDownLine size={28} /> : null}
      </section>

      {sidebarSecondChildClicked ? (
        <section className="space-y-2">
          {/* child 1  */}
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <BsBoxFill size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Product</p> : null}
          </NavLink>
          {/* child 2 */}
          <NavLink
            to={"/unit"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <VscSymbolVariable size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Unit</p> : null}
          </NavLink>

          {/* child 3 */}
          <NavLink
            to={"/access"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <TbLockAccess size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Access</p> : null}
          </NavLink>

          {/* child 4 */}
          <NavLink
            to={"/Suplier"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <GiHandTruck size={28} />
            {!sidebarClicked ? <p className="font-lg font-semibold">Suplier</p> : null}
          </NavLink>
        </section>
      ) : null}

      {/* end */}
    </ul>
  );
};