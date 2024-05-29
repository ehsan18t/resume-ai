"use client";

import Post from "@/components/common/Post";
import CategoryList from "@/components/page-specific/CategoryList";
import NewPost from "@/components/page-specific/NewPost";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRetrieveFeedQuery } from "@/redux/features/postApiSlice";
export default function Feed() {
  let { data: posts, isLoading } = useRetrieveFeedQuery();

  if (isLoading) return <div>Loading...</div>;
  posts = posts?.posts;

  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div class="w-full col-span-1 p-4 text-center"></div>
      <div class="col-span-3">
        <div className="w-full flex justify-center mb-2">
          <NewPost />
        </div>
        <ScrollArea className="mx-auto h-[630px] py-1 p-4 rounded-lg">
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
      <div class="col-span-1 p-4 text-center">
        <CategoryList />
      </div>
    </div>
  );
}
