import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function NotificationCard({ notification }) {
  return (
    <Card className={`${!notification.is_read && "bg-primary/10"} shadow`}>
      <CardHeader className="px-4 py-2">
        <CardDescription>{notification.formatted_time}</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-3 text-sm">
        {notification.title}
      </CardContent>
    </Card>
  );
}
