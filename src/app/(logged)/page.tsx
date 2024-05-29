"use client";

import Post from "@/components/common/Post";
import NewPost from "@/components/page-specific/NewPost";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRetrieveFeedQuery } from "@/redux/features/postApiSlice";

export default function Feed() {
  let { data: posts, isLoading } = useRetrieveFeedQuery();

  if (isLoading) return <div>Loading...</div>;
  posts = posts?.posts;

  return (
    <div className="w-full h-full mx-auto">
      <div className="w-full flex justify-center mb-6">
        <NewPost />
      </div>
      <ScrollArea className="mx-auto h-[550px] w-3/5 py-1 p-4 rounded-lg">
        {posts.map((post) => (
          <Post
            key={`post_${post.id}`}
            user={post.user}
            content={post.content}
            time={post.formatted_time}
          />
        ))}
      </ScrollArea>
    </div>
  );
}
