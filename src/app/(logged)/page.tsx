import Post from "@/components/common/Post";
import NewPost from "@/components/page-specific/NewPost";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Feed() {
  const posts = [
    {
      id: 1,
      user: {
        firstName: "John",
        lastName: "Doe",
      },
      content: "This is my first post!",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Doe",
      },
      content: "Hello, world!",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="w-full h-full mx-auto">
      <div className="w-full flex justify-center mb-6">
        <NewPost />
      </div>
      <ScrollArea className="mx-auto h-[550px] w-3/5 py-1 p-4 rounded-lg">
        {posts.map((post) => (
          <Post
            key={post.id}
            user={post.user}
            content={post.content}
            time={post.time}
          />
        ))}
      </ScrollArea>
    </div>
  );
}
