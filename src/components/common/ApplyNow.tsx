"use client";
import { Icon } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useApplyJobMutation } from "@/redux/features/cvApiSlice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function ApplyNow({ user, post }) {
  const [applyJob, { isLoading, isSuccess }] = useApplyJobMutation();
  const { data: currentUser } = useRetrieveUserQuery();

  const handleApply = async () => {
    await applyJob({ post: post.id });
  };

  const browse = () => {
    window.open(`/cv/${post.id}`, "_blank");
  };

  return (
    <div className="flex gap-2">
      {user.id !== currentUser?.id && (
        <Button
          variant="ghost"
          className="bg-slate-200 hover:bg-slate-300"
          size="sm"
          onClick={handleApply}
          disabled={isLoading || isSuccess || post.is_applied}
        >
          {isLoading ? "Applying..." : "Apply Now"}
        </Button>
      )}

      {user.id === currentUser?.id && (
        <div className="flex gap-3">
          <Icon icon={MdDeleteOutline} className="text-destructive" />
          <Icon icon={CiEdit} />

          <Button
            variant="ghost"
            className="bg-slate-200 hover:bg-slate-300"
            size="sm"
            onClick={browse}
          >
            Check Applications
          </Button>
        </div>
      )}
    </div>
  );
}
