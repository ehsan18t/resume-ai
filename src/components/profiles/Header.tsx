// Header.tsx
"use client";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/hooks";
import BuildProfileFromCV from "./BuildProfileFromCV";

const Header = ({ user, title = null, bio, className, onProfileUpdate }) => {
  const authUser = useAppSelector((state) => state.auth.user);

  return (
    <div className={cn("w-full flex gap-5 items-center", className)}>
      <Avatar className="w-32 h-32">
        <AvatarImage
          src={`${process.env.NEXT_PUBLIC_HOST}/${user?.profile_picture}`}
          alt={user?.first_name + " " + user?.last_name}
        />
        <AvatarFallback className="text-4xl">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full">
        <span className="flex justify-between">
          <h1 className="text-4xl font-bold">
            {user?.first_name + " " + user?.last_name}
          </h1>
          {authUser && authUser.id === user.id && (
            <BuildProfileFromCV onProfileUpdate={onProfileUpdate} />
          )}
        </span>
        {title && title != "null" && (
          <h2 className="text-xl pb-1 text-stone-600">{title}</h2>
        )}
        {bio && (
          <>
            <p className="text-gray-600 text-justify">{bio}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
