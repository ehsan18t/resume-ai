"use client";

import { Button } from "@/components/ui/button";
import { useRetrieveAppliedCvQuery } from "@/redux/features/cvApiSlice";

export default function ApplicationList({
  postId,
  handleSelectedApplication,
  className,
}) {
  const { data, error, isLoading } = useRetrieveAppliedCvQuery(postId);

  if (isLoading) return <div>Loading...</div>;
  const applications = data?.applications;

  return (
    <div className={className}>
      <h1 className="text-2xl py-2 font-bold">Applications</h1>
      {applications.map((application) => (
        <Button
          onClick={() => handleSelectedApplication(application)}
          key={application.id}
          variant="outline"
          className="w-full flex justify-between my-2"
        >
          <p className="text-md font-semibold">
            {application.user.first_name} {application.user.last_name} (
            {application.user.username})
          </p>
          <p className="p-1 bg-gray-100 rounded-md text-xs">
            {application.status}
          </p>
        </Button>
      ))}
    </div>
  );
}
