"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  useLogoutMutation,
  useRetrieveUserQuery,
} from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavItem } from "./NavItem";
import Search from "./Search";

const Navbar = ({ children }: any) => {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const hamburgerButtonRef = useRef<any>(null);

  const userTypes: any = {
    0: "Super Admin",
    1: "Admin",
    2: "Moderator",
    3: "Representatives",
    4: "User",
  };

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  useEffect(() => {
    const handleSidebarToggle = (e: any) => {
      if (
        hamburgerButtonRef.current &&
        hamburgerButtonRef.current.contains(e.target)
      ) {
        setSidebarOpen(!isSidebarOpen);
      } else {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleSidebarToggle);

    return () => {
      document.removeEventListener("click", handleSidebarToggle);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="bg-white p-4 shadow-sm">
      {/* when sidebar open whole page gets dimmer */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 transition ease-in-out duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600 font-semibold text-3xl font-sans">
          <Link href="/">
            <img className="h-16" src="/logo.svg" alt="" />
          </Link>
        </div>
        <Search />
        <div className="flex gap-3 items-center">
          <button
            ref={hamburgerButtonRef}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-gray-800 block"
            aria-label="Toggle sidebar"
          >
            {!isLoading && !isFetching && user && (
              <Avatar className="w-16 h-16">
                <AvatarImage src={user?.profile_picture} alt={name} />
                <AvatarFallback className="text-4xl">
                  {user?.firstName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}
          </button>
        </div>
        <div
          className={`z-[2000] shadow-md fixed top-0 right-0 h-full w-96 bg-white text-gray-800 transform transition-transform ease-in-out duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex gap-5 items-center pb-2 border-b-[1px]">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user?.profile_picture} alt={name} />
                <AvatarFallback className="text-4xl">
                  {user?.firstName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="w-full">
                <div className="w-full flex justify-between">
                  <p className="text-xl font-semibold text-gray-600">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <button
                    className="p-2 border-[1px] border-gray-300 hover:bg-slate-200 transition duration-300 rounded-full"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-400">{user?.email}</p>
                <p className="text-sm text-gray-400">
                  {userTypes[user?.user_type]}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <NavItem
                to={`/profile/${user?.username}`}
                name="Profile"
                icon={CiUser}
              />
              <NavItem onClick={handleLogout} name="Logout" icon={CiLogout} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
