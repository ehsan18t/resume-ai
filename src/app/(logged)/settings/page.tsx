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

const EmailInput = () => {
  const { data: user, error, isLoading } = useRetrieveUserQuery();
  return (
    <Input
      className="inputBoxClasses"
      value={user?.email}
      type="email"
      placeholder="Email"
    />
  );
};

export default function page() {
  const inputBoxClasses =
    "border-0 shadow-lg focus-visible:ring-1 focus-visible:ring-slate-500 transition duration-200 ease-in-out";
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Card className="w-2/3 ">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <EmailInput />
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
          <Button>Save</Button>
          <Button variant={"destructive"}>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
