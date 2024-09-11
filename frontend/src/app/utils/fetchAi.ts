import Groq from "groq-sdk";

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
  content = `generate ${content}  `;
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
    // model: "gemma2-9b-it",
    model: "llama3-70b-8192",
    // model: "mixtral-8x7b-32768",
    temperature: 0.5,
    stream: true,
  });
}
