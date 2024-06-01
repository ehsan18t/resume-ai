"use client";

import { useRetrieveNotificationsQuery } from "@/redux/features/notificationApiSlice";
import { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  const { data, isLoading, isSuccess } = useRetrieveNotificationsQuery();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (data) {
      setNotifications(data);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center">
      {/* <p className="text-lg text-gray-500"> */}
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="w-full flex flex-col gap-2">
          {isSuccess && notifications.length === 0 && "No notifications"}
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      )}
      {/* </p> */}
    </div>
  );
}
