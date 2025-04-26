"use client";

import { useState } from "react";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createRetriever } from "@/utils/retriever";
import { combineDocuments } from "@/utils/combineDocuments";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import "dotenv/config";

import { formatConvHistory } from "../utils/formatConvHistory";

const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question.
conversation history: {conv_history}
question: {question}
standalone question:`;
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about question based on the context provided and the conversation history. Try to find the answer in the context. If the answer is not given in the context, find the answer in the conversation history if possible. If you really don't know the answer, say "I'm sorry, I don't know the answer to that." . Don't try to make up an answer. Always speak as if you were chatting to a friend.
context: {context}
conversation history: {conv_history}
question: {question}
answer (in detail): `;
const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

export default function Chatbot() {
  const [convHistory, setConvHistory] = useState<
    { type: string; message: string }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const [streamingMessage, setStreamingMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const question = userInput;
    setUserInput("");
    setStreamingMessage("");
    setConvHistory((prev) => [...prev, { type: "User", message: question }]);
    const llm = new ChatOpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
      maxTokens: 1500,
      temperature: 0.5,
    });
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      throw new Error("Missing OpenAI API key");
    }
    const retriever = createRetriever(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

    const standaloneQuestionChain = standaloneQuestionPrompt
      .pipe(llm)
      .pipe(new StringOutputParser());

    const retrieverChain = RunnableSequence.from([
      (prevResult) => prevResult.standalone_question,
      retriever,
      combineDocuments,
    ]);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const chain = RunnableSequence.from([
      {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
      },
      {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
        conv_history: ({ original_input }) => original_input.conv_history,
      },
      answerChain,
    ]);

    try {
      let fullResponse = "";
      for await (const chunk of await chain.stream({
        question: question,
        conv_history: formatConvHistory(
          convHistory.map((item) => item.message)
        ),
      })) {
        fullResponse += chunk;
        setStreamingMessage(fullResponse);
      }

      // After streaming is complete, add the full response to conversation history
      setConvHistory((prev) => [
        ...prev,
        { type: "AI", message: fullResponse },
      ]);
      setStreamingMessage(""); // Clear streaming message
    } catch (error) {
      console.error("Error during streaming:", error);
      setStreamingMessage("");
    }
  };

  return (
    <section className="glass-panel flex h-[calc(100vh-12rem)] max-w-6xl mx-auto overflow-hidden">
      <div className="w-1/2 p-4 border-r border-white/10 overflow-y-auto">
        <div className="space-y-4">
          {convHistory.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all duration-300 ${
                message.type === "User"
                  ? "bg-[var(--surface)] ml-auto max-w-[80%]"
                  : "bg-[var(--accent)]/10 max-w-[80%]"
              }`}
            >
              <p
                className={`${
                  message.type === "User"
                    ? "text-[var(--foreground)]"
                    : "text-[var(--accent)]"
                }`}
              >
                {message.message}
              </p>
            </div>
          ))}
          {streamingMessage && (
            <div className="bg-[var(--accent)]/10 p-4 rounded-lg">
              <p className="text-[var(--accent)]">
                {streamingMessage}
                <span className="animate-pulse">▋</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/2 p-4 flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="input-primary flex-grow mb-4 resize-none"
            placeholder="Type your message..."
            required
          />
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
