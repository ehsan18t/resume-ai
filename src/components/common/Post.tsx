"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import ApplyNow from "./ApplyNow";

const NewLineContent = ({ content }) => {
  const limit = 400;
  const [seeMore, setSeeMore] = useState(false);
  const [printContent, setPrintContent] = useState(content);

  useEffect(() => {
    setPrintContent(seeMore ? content : content.slice(0, limit) + "...");
  }, [content, seeMore]);

  return (
    <p>
      {printContent.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
      {content.length > limit && (
        <Button
          className="text-blue-600 mt-3"
          variant="outline"
          size="sm"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See Less" : "See More"}
        </Button>
      )}
    </p>
  );
};

function Post({ user, post, isFeed = false }) {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="flex flex-col">
          {post.category && isFeed && (
            <Link
              className="text-lg hover:text-primary"
              href={`/profile/${user?.username}`}
            >
              {post.category.name}
            </Link>
          )}

          <Link
            className={`${
              post.category && isFeed ? "text-sm text-gray-600" : "text-lg"
            } hover:text-primary`}
            href={`/profile/${user?.username}`}
          >
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
        <div>
          {post.is_job_circular && <ApplyNow post={post} user={user} />}
        </div>
      </CardFooter>
    </Card>
  );
}

export default Post;
