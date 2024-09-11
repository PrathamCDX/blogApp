"use client";
import NewForm from "@/components/NewForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { fetchAi } from "../utils/fetchAi";

export default function Page() {
  const [content, setContent] = useState("Ai generated content");
  const [askAiContent, setAskAiContent] = useState("");
  const handleClick = async () => {
    console.log("object");
    await fetchAi({ content: askAiContent, setAskAiContent: setContent });
  };

  return (
    <div className="">
      <div className="m-2">
        <NewForm />
      </div>
      <div className="mt-20 items-center justify-center flex flex-col">
        <div className="w-[50%]">
          <Input
            onChange={(e) => {
              setAskAiContent(e.target.value);
            }}
            type="textbox"
            placeholder="Ask Ai "
          />
        </div>
        <div className="my-4">
          <Button onClick={handleClick}>Ai Generate</Button>
        </div>
      </div>
      <div className="m-2 ">
        <div className=" mt-5 font-medium w-full bg-gradient-to-b from-purple-400 to-purple-800  shadow-purple-500 shadow-lg border-white border rounded-lg p-2 px-4">
          {content}
        </div>
      </div>
    </div>
  );
}
