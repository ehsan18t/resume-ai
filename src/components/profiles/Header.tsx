// Header.tsx
"use client";

import { Icon } from "@/components/common";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import BuildProfileFromCV from "./BuildProfileFromCV";

const Header = ({
  user,
  title = null,
  bio,
  className,
  onProfileUpdate,
  isEditPage = true,
  editable = false,
}) => {
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
            {editable && <Icon type="edit" />}
          </h1>
          {authUser && authUser.id === user.id && (
            <div>
              {isEditPage && (
                <Link
                  className="border-[1px] hover:bg-primary/10 text-gray-800 no-underline px-3 py-2 rounded-md transition duration-200 ease-in-out"
                  href="/profile/edit"
                >
                  Edit Profile
                </Link>
              )}
              <BuildProfileFromCV onProfileUpdate={onProfileUpdate} />
            </div>
          )}
        </span>
        {title && title != "null" && (
          <h2 className="text-xl pb-1 text-stone-600 flex gap-2 items-center">
            {title} {editable && <CiEdit size={20} />}
          </h2>
        )}
        {bio && (
          <>
            <p className="text-gray-600 text-justify flex gap-2 items-center">
              {bio}
              {editable && <CiEdit size={20} />}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
