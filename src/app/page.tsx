"use client";

import { useState } from "react";
import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImAttachment } from "react-icons/im";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSelect = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      // Handle case where no file is selected
      return;
    }

    const formData = new FormData();
    formData.append("pdf_file", selectedFile);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/cv/extract-pdf-text/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setExtractedText(data.extracted_text);
      // console.log(data.extracted_text); // Log the response data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>

      <div className="w-full">
        <ScrollArea className="h-72 w-full rounded-md border overflow-y-auto">
          <div className="p-4">
            <h4 className="inline-block px-2 mb-4 font-medium leading-none border-b-2 pb-3">
              Extracted Texts
            </h4>
            <div className="text-sm">{extractedText}</div>
          </div>
        </ScrollArea>
      </div>

      <div className="w-full flex gap-3 justify-center items-center mb-32 text-center lg:mb-0 lg:text-left">
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <ImAttachment
          onClick={handleFileSelect}
          className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-600 transition duration-300"
        />
        <input
          type="text"
          placeholder="Write Something..."
          className="w-full h-12 px-4 py-2 text-sm border rounded-md lg:px-6 lg:py-3 focus:outline-none focus:border-gray-400 transition duration-300"
        />
        <Button onClick={handleSubmit} className="h-12">
          Send
        </Button>
      </div>
    </main>
  );
}
