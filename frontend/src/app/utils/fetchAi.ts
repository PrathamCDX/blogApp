import Groq from "groq-sdk";
import { set } from "react-hook-form";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_API,
  dangerouslyAllowBrowser: true,
});

export async function fetchAi({
  content,
  setAskAiContent,
}: {
  content: string;
  setAskAiContent: React.Dispatch<React.SetStateAction<string>>;
}) {
  setAskAiContent("Generating >>>>");
  content = `write a blog about ${content} with in 500 words without ## `;
  const stream = await getGroqChatCompletion(content);
  setAskAiContent("");
  for await (const chunk of stream) {
    const chunk_recieved = chunk.choices[0]?.delta?.content || "";
    setAskAiContent((prev: string) => {
      return prev + chunk_recieved;
    });
  }
}

export async function getGroqChatCompletion(content: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "gemma2-9b-it",
    stream: true,
  });
}
