"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useRetrieveProfileSummaryQuery,
  useUpdateCvStatusMutation,
} from "@/redux/features/cvApiSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApplicationSection from "./ApplicationSection";

import { Skeleton } from "@/components/ui/skeleton";

export default function SelectedApplication({
  application,
  setApplication,
  className,
}) {
  const { data, isLoading, isFetching } = useRetrieveProfileSummaryQuery(
    application?.user.id
  );

  const [updateCvStatus, { isLoading: isUpdating }] =
    useUpdateCvStatusMutation();

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

  const handleOnUpdateStatus = async (status) => {
    try {
      const res = await updateCvStatus({
        post: application.post.id,
        user: application.user.id,
        status: status,
        rejected_from: selectedTab?.key,
      });

      toast.success("Status updated successfully");

      // update the application status
      setApplication((prev) => ({ ...prev, status: status }));
    } catch (error) {
      if (error.data) {
        toast.error(error.data.detail);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      {application && (
        <Link
          target="_blank"
          href={`/profile/${application?.user.username}`}
          className="absolute top-0 right-0 shadow hover:bg-slate-100 text-xs font-semibold p-2 border-[1px] rounded"
        >
          Visit Profile
        </Link>
      )}
      <h1 className="text-2xl py-2 font-bold">Profile</h1>
      {isLoading || isFetching ? (
        <div className="grid grid-cols-3 gap-3 h-[455px]">
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
          onClick={() => handleOnUpdateStatus("Accepted")}
          disabled={isUpdating || application.status === "Accepted"}
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
                  className={`${
                    selectedTab.key === key && "bg-[#0079FF] text-white"
                  } capitalize shadow`}
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
          onClick={() => handleOnUpdateStatus("Rejected")}
          disabled={isUpdating || application.status === "Rejected"}
        >
          Reject
        </Button>
      </div>
    </div>
  );
}
