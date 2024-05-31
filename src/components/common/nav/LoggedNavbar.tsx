"use client";

import {
  useLogoutMutation,
  useRetrieveUserQuery,
} from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";

const LoggedNavbar = ({ children }: any) => {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const hamburgerButtonRef = useRef<any>(null);

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
    <nav className="bg-white px-4 py-2 shadow">
      <div className="flex items-center justify-between">
        <Logo />
        <Search />
        <Hamburger
          user={user}
          buttonRef={hamburgerButtonRef}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />
        <Sidebar
          user={user}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* when sidebar open whole page gets dimmer */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 transition ease-in-out duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default LoggedNavbar;
