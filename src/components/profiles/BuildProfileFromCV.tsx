// BuildProfileFromCV
"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useBuildProfileMutation } from "@/redux/features/cvApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function BuildProfileFromCV({ onProfileUpdate }) {
  const [buildProfile, { isLoading, error, isSuccess }] =
    useBuildProfileMutation();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    try {
      console.log("Uploading file...");
      const response = await buildProfile({ pdf_file: file });
      toast.success("Profile created successfully.");
      setOpen(false);
      setFile(null);

      // Trigger the refresh callback
      if (onProfileUpdate) {
        onProfileUpdate(response.data.profile);
      }

      console.log("Profile created successfully.");
    } catch (e) {
      toast.error("Error uploading file. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mx-4 hover:bg-sky-100">
          Build Profile with CV
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input type="file" onChange={handleFileChange} />
          <Button
            type="submit"
            disabled={!file || isLoading}
            className="w-full bg-sky-600 hover:bg-sky-700"
          >
            {isLoading ? "Uploading..." : "Upload File"}
          </Button>
        </form>
        {error && (
          <Alert type="error" className="mt-4">
            {error}
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
}
