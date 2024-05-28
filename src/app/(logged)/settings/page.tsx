"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function page() {
  const { data: user, error, isLoading } = useRetrieveUserQuery();
  const inputBoxClasses =
    "border-0 focus-visible:ring-1 focus-visible:ring-slate-500 transition duration-200 ease-in-out";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input
          className="inputBoxClasses"
          value={user?.email}
          type="email"
          placeholder="Email"
        />
        <Input
          className="inputBoxClasses"
          type="password"
          placeholder="Old Password"
        />
        <Input
          className="inputBoxClasses"
          type="password"
          placeholder="New Password"
        />
        <Input
          className="inputBoxClasses"
          type="password"
          placeholder="Confirm Password"
        />
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant={"outline"}>Save</Button>
        <Button variant={"destructive"}>Cancel</Button>
      </CardFooter>
    </Card>
  );
}
