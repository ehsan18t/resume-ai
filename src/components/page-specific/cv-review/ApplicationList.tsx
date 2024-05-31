"use client";

import { Button } from "@/components/ui/button";
import { useRetrieveAppliedCvQuery } from "@/redux/features/cvApiSlice";
import { useState } from "react";
export default function ApplicationList({
  postId,
  handleSelectedApplication,
  className,
}) {
  const { data, error, isLoading } = useRetrieveAppliedCvQuery(postId);
  const [selectedApplication, setSelectedApplication] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  const applications = data?.applications;

  const handleSelect = (application) => {
    setSelectedApplication(application.id);
    handleSelectedApplication(application);
  };

  return (
    <div className={className}>
      <h1 className="text-2xl py-2 font-bold">Applications</h1>
      {applications.map((application) => (
        <Button
          onClick={() => handleSelect(application)}
          key={application.id}
          variant="outline"
          className={`${
            selectedApplication === application.id && "bg-[#0079FF] text-white"
          } w-full flex justify-between my-2`}
          disabled={selectedApplication === application.id}
        >
          <p className="text-md font-semibold">
            {application.user.first_name} {application.user.last_name} (
            {application.user.username})
          </p>
          <p className="p-1 bg-gray-100 text-gray-700 rounded-md text-xs">
            {application.status}
          </p>
        </Button>
      ))}
    </div>
  );
}
