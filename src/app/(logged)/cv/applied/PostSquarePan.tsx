"use client";

import Post from "@/components/common/Post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useRetrieveAppliedJobsFeedbackQuery,
  useRetrieveAppliedJobsQuery,
} from "@/redux/features/cvApiSlice";

import { useEffect, useState } from "react";

export default function PostSquarePan() {
  const { data, error, isLoading } = useRetrieveAppliedJobsQuery();
  const {
    data: feedbacks,
    error: feedbackError,
    isLoading: feedbackLoading,
  } = useRetrieveAppliedJobsFeedbackQuery();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data && feedbacks) {
      const newPosts = data.posts?.map((post, index) => {
        const feedback = feedbacks.feedback.find(
          (fb) => fb.cv.post.id === post.id
        );
        return {
          ...post,
          feedback: {
            id: feedback?.id,
            initial: feedback?.initial,
            final: feedback?.final,
            status: feedback?.cv.status,
          },
        };
      });
      setPosts(newPosts);
    }
  }, [data, feedbacks]);

  if (isLoading && feedbackLoading)
    return <Card className="w-full h-full">Loading...</Card>;

  return (
    <Card className="w-full border-2">
      <CardHeader>
        <CardTitle>Applied Jobs</CardTitle>
      </CardHeader>
      <CardContent className="w-full grid px-4 grid-cols-[repeat(auto-fill,minmax(500px,1fr))] justify-items-center gap-x-4">
        {posts?.map((post) => (
          <Post key={post.id} user={post.user} post={post} isFeed isJobView />
        ))}
      </CardContent>
    </Card>
  );
}
