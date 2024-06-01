"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRetrieveNotificationCountQuery } from "@/redux/features/notificationApiSlice";
import { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Hamburger({ user, buttonRef, onClick }) {
  const { data, isFetching, refetch } = useRetrieveNotificationCountQuery();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (data) {
      setCount(data.count);
    }
  }, [data]);

  // refetch notification count every 10 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await refetch();
    }, 10000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div className="flex gap-5 items-center">
      {user && (
        <div className="relative">
          <IoIosNotificationsOutline
            className="ring-1 p-1 rounded-full"
            size={35}
          />
          <span
            className={`${
              count > 0 ? "text-red-500" : "text-gray-500"
            } font-semibold ring-1 ring-red-400 text-sm absolute -top-1 -right-1 bg-white px-1 rounded-full`}
          >
            {count}
          </span>
        </div>
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
