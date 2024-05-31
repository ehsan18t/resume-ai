import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Hamburger({ user, buttonRef, onClick }) {
  return (
    <div className="flex gap-5 items-center">
      {user && (
        <IoIosNotificationsOutline
          className="ring-1 p-1 rounded-full"
          size={35}
        />
      )}
      <button
        ref={buttonRef}
        onClick={() => onClick()}
        className="text-gray-800 block"
        aria-label="Toggle sidebar"
      >
        {user && (
          <Avatar className="w-12 h-12">
            <AvatarImage src={user?.profile_picture} alt={name} />
            <AvatarFallback className="text-4xl">
              {user?.firstName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        )}
      </button>
    </div>
  );
}
