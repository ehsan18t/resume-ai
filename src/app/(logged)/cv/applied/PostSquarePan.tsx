"use client";

import Post from "@/components/common/Post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRetrieveAppliedJobsQuery } from "@/redux/features/cvApiSlice";

export default function PostSquarePan() {
  const { data, error, isLoading } = useRetrieveAppliedJobsQuery();

  if (isLoading) return <Card className="w-full h-full">Loading...</Card>;
  const posts = data?.posts;

  return (
    <Card className="w-full border-2">
      <CardHeader>
        <CardTitle>Applied Jobs</CardTitle>
      </CardHeader>
      <CardContent className="w-full grid px-4 grid-cols-[repeat(auto-fill,minmax(500px,1fr))] justify-items-center gap-x-4">
        {posts?.map((post) => (
          <Post key={post.id} user={post.user} post={post} isFeed />
        ))}
      </CardContent>
    </Card>
  );
}
