import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import ApplyNow from "./ApplyNow";

const NewLineContent = ({ content }) => {
  return (
    <p>
      {content.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

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
        <NewLineContent content={post.content} />
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
        <div>{post.is_job_circular && <ApplyNow post={post} />}</div>
      </CardFooter>
    </Card>
  );
}

export default Post;
