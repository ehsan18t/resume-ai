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

function Post({ user, content, time }) {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link href={`/profile/${user?.username}`}>
            {user.first_name} {user.first_name}
          </Link>
        </CardTitle>
        <CardDescription>{time}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" size="icon">
          <AiOutlineLike size={25} />
        </Button>
        <Button variant="outline" size="icon">
          <BiComment size={25} />
        </Button>
        <Button variant="outline" size="icon">
          <MdOutlineBookmarkAdd size={25} />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Post;
