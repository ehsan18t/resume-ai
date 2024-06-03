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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
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

function Post({ user, post, isFeed = false, isJobView = false }) {
  const getFeedbackCount = (feedback) => {
    if (!feedback.status) return 0;
    if (feedback.final) return 2;
    return 1;
  };

  const cleanText = (text) => {
    text = text.replace("**", "");
    return text;
  };

  return (
    <Card className="my-4 w-full">
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
        {!isJobView && (
          <>
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
          </>
        )}
        {isJobView && post?.feedback && (
          <div className="flex border-t-2 pt-4 gap-2 justify-between w-full items-center text-xs font-semibold">
            <p className="p-1 px-2 rounded shadow border-[1px]">
              {post.feedback.status ? post.feedback.status : "Pending"}
            </p>
            {post.feedback.status ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-xs font-semibold">
                    Feedback ({getFeedbackCount(post.feedback)})
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-96" type="none">
                    <p className="font-bold text-gray-500">Initial Feedback</p>
                    <p>You've got rejected from {post.feedback?.initial}.</p>
                    <br />
                    {post.feedback.final && (
                      <>
                        <p className="font-bold text-gray-500">
                          Final Feedback
                        </p>
                        <p className="text-justify text-sm">
                          <span className="font-semibold text-gray-500">
                            Possible Reason:{" "}
                          </span>
                          {post.feedback.final?.report.reason}
                          <br />
                          <br />
                          <span className="font-semibold text-gray-500">
                            Improvement Suggestion:{" "}
                          </span>
                          {cleanText(
                            post.feedback.final?.report.improvement_suggestion
                          )}
                        </p>
                      </>
                    )}
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            ) : (
              <Button variant="outline" className="text-xs font-semibold">
                Feedback ({getFeedbackCount(post.feedback)})
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default Post;
