"use client";

import { Button } from "@/components/ui/button";
import { useRetrieveUserProfileQuery } from "@/redux/features/authApiSlice";
import { useRetrieveAppliedCvQuery } from "@/redux/features/cvApiSlice";
import { useState } from "react";

const Profile = ({ application, setData }) => {
  const { data, isLoading, isSuccess } = useRetrieveUserProfileQuery(
    application.user.username
  );

  if (isLoading) return <div>Loading...</div>;

  if (isSuccess) {
    setData(data);
  }

  return (
    <p>
      {data.user.first_name} {data.user.last_name} ({data.user.username})
    </p>
  );
};

export default function page({ params }) {
  const { data, error, isLoading } = useRetrieveAppliedCvQuery(params.post);
  const [profile, setProfile] = useState(null);
  const [app, setApp] = useState(null);

  console.log(profile);

  if (isLoading) return <div>Loading...</div>;
  const applications = data?.applications;

  return (
    <div className="h-screen grid grid-cols-3 gap-4 w-full">
      <div className="w-full col-span-1 p-4 border-2 text-center">
        <h1 className="text-2xl py-2 font-bold">Applications</h1>
        {applications.map((application) => (
          <Button
            onClick={() => setApp(application)}
            key={application.id}
            variant="outline"
            className="w-full flex justify-between my-2"
          >
            <p className="text-md font-semibold">
              {application.user.first_name} {application.user.last_name} (
              {application.user.username})
            </p>
            <p className="p-1 bg-gray-100 rounded-md text-sm">
              {application.status}
            </p>
          </Button>
        ))}
      </div>
      <div className="w-full col-span-2 bg-red-100 p-4 text-center">
        {app ? (
          <Profile application={app} setData={setProfile} />
        ) : (
          <p>Select an application</p>
        )}
      </div>
    </div>
  );
}
