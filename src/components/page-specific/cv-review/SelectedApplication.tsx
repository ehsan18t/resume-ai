"use client";

import { Button } from "@/components/ui/button";
import { useRetrieveProfileSummaryQuery } from "@/redux/features/cvApiSlice";
import { useEffect, useState } from "react";
import ApplicationSection from "./ApplicationSection";

import { Skeleton } from "@/components/ui/skeleton";

export default function SelectedApplication({ application, className }) {
  const { data, isLoading } = useRetrieveProfileSummaryQuery(
    application?.user.id
  );

  const [profile, setProfile] = useState(null);
  const [summary, setSummary] = useState(null);

  const [selectedTab, setSelectedTab] = useState({ key: null, value: null });

  useEffect(() => {
    if (!isLoading && data) {
      const p = data.profile;
      const s = data.summary.summary;

      setProfile(p);
      setSummary(s);

      // set the default tab from first key
      const defaultKey = Object.keys(s)[0];
      if (defaultKey) {
        setSelectedTab({
          key: defaultKey,
          section: p[defaultKey],
          summary: s[defaultKey],
        });
      }
    }
  }, [data, isLoading]);

  const handleTabChange = (e) => {
    setSelectedTab({
      key: e.target.value,
      section: profile[e.target.value],
      summary: summary[e.target.value],
    });
  };

  return (
    <div className={className}>
      <h1 className="text-2xl py-2 font-bold">Profile</h1>
      {isLoading ? (
        <div className="grid grid-cols-3 gap-3 h-[410px]">
          <Skeleton className="col-span-2" />
          <Skeleton className="col-auto" />
        </div>
      ) : (
        <ApplicationSection data={selectedTab} />
      )}
      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          className="mt-4 bg-emerald-600 text-white hover:bg-emerald-500"
        >
          Accept
        </Button>
        <div className="flex gap-1 items-center pt-4">
          {summary &&
            Object.keys(summary).map((key) => {
              if (summary[key] === null || summary[key] === "") return;

              return (
                <Button
                  key={key}
                  variant="outline"
                  onClick={handleTabChange}
                  value={key}
                  className="capitalize"
                  disabled={selectedTab.key === key}
                >
                  {key}
                </Button>
              );
            })}
        </div>
        <Button
          variant="destructive"
          className="mt-4 bg-red-600 hover:bg-red-500"
        >
          Reject
        </Button>
      </div>
    </div>
  );
}
