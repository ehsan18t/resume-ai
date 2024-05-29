import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";

function Post({ user, post }) {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link href={`/profile/${user?.username}`}>
            {user.first_name} {user.first_name}
          </Link>
        </CardTitle>
        <CardDescription>{post.formatted_time}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <AiOutlineLike size={25} />
          </Button>
          <Button variant="outline" size="icon">
            <BiComment size={25} />
          </Button>
          <Button variant="outline" size="icon">
            <MdOutlineBookmarkAdd size={25} />
          </Button>
        </div>
        <div>
          {post.is_job_circular && (
            <Button
              variant="ghost"
              className="bg-slate-200 hover:bg-slate-300"
              size="sm"
            >
              Apply Now
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default Post;
