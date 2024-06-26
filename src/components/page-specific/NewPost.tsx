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
import { useState } from "react";
import { toast } from "react-toastify";

export default function NewPost({ slung = "", insideCategory = false }) {
  const defaultForm = {
    content: "",
    is_job_circular: true,
    category: slung,
  };
  const [form, setForm] = useState(defaultForm);
  const [open, setOpen] = useState(false);
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async () => {
    try {
      await createPost(form).unwrap();
      setForm(defaultForm);
      setOpen(false);
      toast.success("Post created successfully.");
      // wait for the toast to show
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-2/4">Create New Post</Button>
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
        {!insideCategory && (
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
        )}
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Posting..." : "Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
