import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";


export async function submitKnowledgeBase(formData: {
  knowledgeBase: string;
  supabaseUrl: string;
  supabaseApiKey: string;
  openAiApiKey: string;
}) {
  try {
    const text = formData.knowledgeBase;
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
      separators: ['\n\n', '\n', ' ', ''], // default setting
    });

    const output = await splitter.createDocuments([text]);

    const client = createClient(formData.supabaseUrl, formData.supabaseApiKey);

    await SupabaseVectorStore.fromDocuments(
      output,
      new OpenAIEmbeddings({ openAIApiKey: formData.openAiApiKey }),
      {
        client,
        tableName: 'documents',
      }
    );
  } catch (err) {
    console.log(err);
  }
}
