import { Document } from "@langchain/core/documents";

export function combineDocuments(docs: Document[]): string {
  return docs.map((doc) => doc.pageContent).join("\n\n");
}