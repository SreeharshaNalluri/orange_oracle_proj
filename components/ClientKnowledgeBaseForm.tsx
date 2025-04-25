"use client";

import dynamic from "next/dynamic";

const KnowledgeBaseForm = dynamic(() => import("./KnowledgeBaseForm"), {
  ssr: false,
});

export default function ClientKnowledgeBaseForm() {
  return <KnowledgeBaseForm />;
}
