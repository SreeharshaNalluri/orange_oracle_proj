# Custom Knowledge Base ChatBot using LangChain Agent RAG

A powerful chatbot application built with Next.js that leverages LangChain's Agent and Retrieval Augmented Generation (RAG) capabilities to provide accurate answers from your custom knowledge base.

## Try the APP hosted here : https://custom-knowledge-base-rag-chatbot.vercel.app/

## Overview

This project creates an AI-powered chatbot that can:
- Process and index your custom documents and data sources
- Use RAG techniques to retrieve relevant information from your knowledge base
- Apply LangChain's Agent framework to generate accurate, context-aware responses
- Provide a clean, responsive user interface built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SreeharshaNalluri/orange_oracle_proj.git
```

2. Navigate to the project directory:
```bash
cd orange_oracle_proj
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the root directory and add your API keys:
```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
# Add any other required API keys
# Ask Dhawal for the Supabase Creds
# NOTE: Without this project can not function.
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- **Document Processing**: Upload and process input documents from user
- **Vector Database Integration**: Store and query document embeddings
- **Conversational UI**: Clean interface for interacting with the chatbot
- **Context Awareness**: Maintains conversation history for more natural interactions

## Usage

1. Navigate to the homepage
2. Upload text documents to your knowledge base (if not pre-populated)
3. Switch to the Chatbot, Start chatting with the bot by typing in the input field


## Acknowledgments

- [LangChain](https://js.langchain.com/) for the awesome RAG and Agent frameworks
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [OpenAI](https://openai.com/) for API integration
