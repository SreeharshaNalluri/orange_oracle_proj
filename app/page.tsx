import Link from "next/link";
import ClientKnowledgeBaseForm from "@/components/ClientKnowledgeBaseForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-4">
        <nav className="glass-panel mb-6 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="px-4 py-2 rounded-md hover:bg-[var(--accent)]/10 border border-white/10
                  transition-all duration-300">
                  Knowledge Base
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chatbot" legacyBehavior>
                <a className="px-4 py-2 rounded-md hover:bg-[var(--accent)]/10 border border-white/10
                  transition-all duration-300">
                  Chatbot
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="glass-panel p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Knowledge Base Submission
          </h1>
          <div className="space-y-4">
            <ul className="space-y-4 text-[var(--text-secondary)] list-disc pl-6">
            <li>
              Hello and welcome to our context-aware chatbot!
            </li>
            <li>
              For the best experience, we recommend starting fresh by deleting the
              existing knowledge base. This ensures that the chatbot can provide
              accurate and customized responses tailored to your needs.
            </li>
            <li>
              Once the knowledge base is cleared, you can submit a new one with
              your company’s custom information, including services, FAQs, or any
              other relevant data. This helps the chatbot understand your unique
              requirements and offer personalized assistance.
            </li>
            </ul>
          </div>
          <ClientKnowledgeBaseForm />
        </div>
      </div>
    </main>
  );
}
