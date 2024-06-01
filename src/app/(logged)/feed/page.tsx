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
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 text-center"></div>
      <div className="col-span-3">
        <div className="flex justify-center pt-1">
          <NewPost />
        </div>
        <ScrollArea type="none" className="mx-auto h-[690px] rounded-lg">
          {posts.map((post) => (
            <Post key={`post_${post.id}`} user={post.user} post={post} isFeed />
          ))}
        </ScrollArea>
      </div>
      <div className="col-span-1 p-4 text-center">
        <CategoryList />
      </div>
    </div>
  );
}
