"use client";
import { Button } from "@/components/ui/button";
import { useApplyJobMutation } from "@/redux/features/cvApiSlice";

export default function ApplyNow({ post }) {
  const [applyJob, { isLoading, isSuccess }] = useApplyJobMutation();

  const handleApply = async () => {
    await applyJob({ post: post.id });
  };

  return (
    <Button
      variant="ghost"
      className="bg-slate-200 hover:bg-slate-300"
      size="sm"
      onClick={handleApply}
      disabled={isLoading || isSuccess || post.is_applied}
    >
      {isLoading ? "Applying..." : "Apply Now"}
    </Button>
  );
}
