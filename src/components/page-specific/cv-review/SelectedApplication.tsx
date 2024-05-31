"use client";

import { useRetrieveProfileSummaryQuery } from "@/redux/features/cvApiSlice";
import { useEffect, useState } from "react";

export default function SelectedApplication({ application, className }) {
  const { data, isLoading } = useRetrieveProfileSummaryQuery(
    application?.user.id
  );

  const [profile, setProfile] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      setProfile(data.profile);
      setSummary(data.summary.summary);
    }
  }, [data, isLoading]);

  if (isLoading) return <p>Loading...</p>;

  console.log(profile, summary);

  return (
    <div className={className}>
      {application ? (
        <div>
          <h1 className="text-2xl py-2 font-bold">Profile</h1>
          {profile?.title}
        </div>
      ) : (
        <p>Select an application</p>
      )}
    </div>
  );
}
