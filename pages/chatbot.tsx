import Link from "next/link";
import Chatbot from "@/components/Chatbot";

export default function ChatbotPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-4">
        <nav className="glass-panel mb-6 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a
                  className="px-4 py-2 rounded-md hover:bg-[var(--accent)]/10 border border-white/10
                  transition-all duration-300"
                >
                  Knowledge Base
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chatbot" legacyBehavior>
                <a
                  className="px-4 py-2 rounded-md hover:bg-[var(--accent)]/10 border border-white/10
                  transition-all duration-300"
                >
                  Chatbot
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--foreground)]">
          Chatbot
        </h1>
        <Chatbot />
      </div>
    </main>
  );
}
