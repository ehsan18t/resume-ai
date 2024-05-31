import { BsGear } from "react-icons/bs";
import { CiLogout, CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { NavItem } from "./NavItem";
import SidebarHeader from "./SidebarHeader";
export default function Sidebar({
  user,
  onClose,
  onLogout,
  isSidebarOpen,
  children,
}) {
  return (
    <div
      className={`z-[99999999] shadow-md fixed top-0 right-0 h-full w-96 bg-white text-gray-800 transform transition-transform ease-in-out duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <SidebarHeader user={user} onClose={() => onClose()} />

        <div className="mt-4">
          <NavItem
            to={`/profile/${user?.username}`}
            name="Profile"
            icon={CiUser}
          />
          <NavItem
            to={`/cv/applied`}
            name="Applied Jobs"
            icon={IoBriefcaseOutline}
          />
          <NavItem to={`/settings`} name="Settings" icon={BsGear} />
          <NavItem onClick={onLogout} name="Logout" icon={CiLogout} />
          {children}
        </div>
      </div>
    </div>
  );
}
