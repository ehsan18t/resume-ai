"use client";

import Post from "@/components/common/Post";
import CategoryList from "@/components/page-specific/CategoryList";
import NewPost from "@/components/page-specific/NewPost";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useRetrieveCategoryPostsQuery,
  useRetrieveCategoryQuery,
} from "@/redux/features/postApiSlice";
export default function Feed({ params }) {
  let { data: posts, isLoading } = useRetrieveCategoryPostsQuery(params.slung);
  const { data: category } = useRetrieveCategoryQuery(params.slung);

  if (isLoading) return <div>Loading...</div>;
  posts = posts?.posts;

  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="w-full col-span-1 p-4 text-center"></div>
      <div className="col-span-3">
        <div className="w-full flex justify-center mb-2">
          <NewPost slung={params.slung} insideCategory />
        </div>
        <ScrollArea className="mx-auto h-[630px] py-1 p-4 rounded-lg">
          {posts &&
            posts.map((post) => (
              <Post key={`post_${post.id}`} user={post.user} post={post} />
            ))}
        </ScrollArea>
      </div>
      <div className="col-span-1 p-4 text-center">
        <CategoryList selectedCat={category?.category} />
      </div>
    </div>
  );
}
