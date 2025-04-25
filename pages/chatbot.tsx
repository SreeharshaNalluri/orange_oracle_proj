import Link from "next/link";
import Chatbot from "@/components/Chatbot";

export default function ChatbotPage() {
  return (
    <main className="container mx-auto p-4 min-h-screen bg-background">
      <nav className="mb-4 p-4 border border-accent bg-primary text-white rounded-md">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:underline border border-accent px-2 py-1 rounded-md">
                Knowledge Base
              </a>
            </Link>
          </li>
          <li>
            <Link href="/chatbot" legacyBehavior>
              <a className="hover:underline border border-accent px-2 py-1 rounded-md">
                Chatbot
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-2xl font-bold mb-4 text-center font-sans">Chatbot</h1>
      <Chatbot />
    </main>
  );
}
