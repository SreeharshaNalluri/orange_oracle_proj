import Link from "next/link";
import ClientKnowledgeBaseForm from "@/components/ClientKnowledgeBaseForm";

export default function Home() {
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
      <h1 className="text-2xl font-bold mb-4 text-center font-sans">
        Knowledge Base Submission
      </h1>
      <div className="text-lg mb-4 text-center">
        <ul className="list-disc list-inside text-justify">
          <li>Hello and welcome to our context-aware chatbot!</li>
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
    </main>
  );
}
