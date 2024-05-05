"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf_file", file);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/pdftoprofile/`,
        {
          method: "POST",
          body: formData,
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        }
      );
      const responseData = await response.json();
      setResponse(responseData);
      setProfile(responseData.json_data);
    } catch (error) {
      setError("Error uploading file. Please try again.");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="file" onChange={handleFileChange} />
        <Button type="submit" disabled={!file || loading} className="w-full">
          {loading ? "Uploading..." : "Upload File"}
        </Button>
      </form>
      {error && (
        <Alert type="error" className="mt-4">
          {error}
        </Alert>
      )}
      {loading && (
        <div className="mt-4">
          <Progress percent={50} className="w-full" />
        </div>
      )}
      {profile && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Profile Information:</h2>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
