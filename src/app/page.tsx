"use client";

import { useState } from "react";
import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImAttachment } from "react-icons/im";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : ""); // Set the selected file name
  };

  const handleFileSelect = () => {
    document.getElementById("fileInput")?.click();
  };

  const clearFileInput = () => {
    setSelectedFile(null);
    setSelectedFileName("");
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
      clearFileInput();
      // console.log(data.extracted_text); // Log the response data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(extractedText)
      .then(() => {
        // Do something on successful copy (e.g., show a success message)
        console.log("Text copied to clipboard:", extractedText);
      })
      .catch((err) => {
        // Handle errors in clipboard copying
        console.error("Error copying text to clipboard:", err);
      });
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
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: extractedText }}
            />
          </div>
        </ScrollArea>
        <button
          onClick={copyToClipboard}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Copy to Clipboard
        </button>
      </div>

      <div className="w-full mb-32 text-center lg:mb-0 lg:text-left">
        <div className="flex gap-3 justify-center items-center">
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
        <div className="pl-10 pt-5 w-full transition duration-300">
          {selectedFileName && (
            <p className="w-full flex justify-between p-2 border-[1px] border-gray-200 rounded text-gray-600">
              {selectedFileName}
              <button
                className="px-3 text-xl hover:text-red-600 transition duration-300"
                onClick={() => clearFileInput()}
              >
                x
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
