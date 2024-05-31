"use client";

import { useState } from "react";

import ApplicationList from "@/components/page-specific/cv-review/ApplicationList";
import SelectedApplication from "@/components/page-specific/cv-review/SelectedApplication";

export default function Page({ params }) {
  const [profile, setProfile] = useState(null);
  const [application, setApplication] = useState(null);

  return (
    <div className="h-screen grid grid-cols-3 gap-2 mx-4">
      <ApplicationList
        postId={params.post}
        handleSelectedApplication={setApplication}
        className="w-full col-span-1 p-4 border-2 text-center rounded"
      />
      <div className="w-full col-span-2 border-2 p-4 text-center rounded">
        {application ? (
          <SelectedApplication application={application} />
        ) : (
          <p>Select an application</p>
        )}
      </div>
    </div>
  );
}
