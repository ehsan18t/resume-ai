"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCreatePostMutation } from "@/redux/features/postApiSlice";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NewPost() {
  const router = useRouter();
  const [form, setForm] = useState({
    content: "",
    is_job_circular: false,
    category: "",
  });
  const [open, setOpen] = useState(false);

  const [createPost, { isLoading }] = useCreatePostMutation();

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(!open)} className="w-2/4 bg-slate-600">
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <Textarea
          name="content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Type your post here."
        />
        <div className="flex items-center space-x-2">
          <Switch
            name="is_job_circular"
            checked={form.is_job_circular}
            onCheckedChange={() => {
              setForm({ ...form, is_job_circular: !form.is_job_circular });
            }}
            id="job-post"
          />
          <Label htmlFor="job-post">as Job Circular</Label>
        </div>
        <DialogFooter>
          <Button
            onClick={() =>
              createPost(form)
                .unwrap()
                .then(() => {
                  setForm({
                    content: "",
                    is_job_circular: false,
                    category: "",
                  });
                  setOpen(false);
                  router.push("/");
                })
            }
          >
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
