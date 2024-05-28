import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoClose } from "react-icons/io5";

export default function SidebarHeader({ user, onClose }) {
  const userTypes: any = {
    0: "Super Admin",
    1: "Admin",
    2: "Moderator",
    3: "Representatives",
    4: "User",
  };

  return (
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
            onClick={() => onClose()}
          >
            <IoClose size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-400">{user?.email}</p>
        <p className="text-sm text-gray-400">{userTypes[user?.user_type]}</p>
      </div>
    </div>
  );
}
