"use client";

import { Button } from "@/components/ui/button";
import { useClearNotificationMutation } from "@/redux/features/notificationApiSlice";
import { toast } from "react-toastify";

export default function Clear() {
  const [clearNotifications, { isLoading }] = useClearNotificationMutation();

  return (
    <Button
      disabled={isLoading}
      variant="destructive"
      onClick={async () => {
        try {
          await clearNotifications();
          toast.success("Notifications cleared");

          // wait for the toast to show
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch (error) {
          toast.error("Failed to clear notifications");
        }
      }}
    >
      Clear all
    </Button>
  );
}
