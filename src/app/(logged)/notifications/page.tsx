import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationList from "./NotificationList";

export const metadata = {
  title: "Notifications",
};

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="h-full w-3/5 shadow">
        <CardHeader className="border-b-2 mb-4">
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea type="none" className="h-[530px]">
            <NotificationList />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
