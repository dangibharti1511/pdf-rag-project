# 📄 PDF RAG Application

A Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and ask questions in natural language. The application retrieves the most relevant content from the uploaded PDF using semantic search and generates accurate, context-aware answers with a Large Language Model (LLM).

---

## ✨ Features

- Upload PDF documents
- Ask questions in natural language
- Semantic search using FAISS
- Hugging Face sentence embeddings
- Answer generation using Groq LLM
- Source page references for every answer
- FastAPI backend
- React frontend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- FastAPI
- Python
- LangChain

### AI & RAG
- Groq LLM
- Hugging Face Embeddings (`all-MiniLM-L6-v2`)
- FAISS Vector Store
- PyPDF

---

## 📂 Project Structure

```
pdf-rag-project/
│
├── backend/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   ├── rag/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pdf-rag-project.git
cd pdf-rag-project
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_groq_api_key
```

Run the backend:

```bash
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

The frontend runs on:

```
http://localhost:3000
```

The backend runs on:

```
http://127.0.0.1:8000
```

---

## 📸 Screenshots

Screenshots will be added soon.

---

## 🚀 Future Improvements

## 🚀 Future Improvements

## 🚀 Future Roadmap

- 📄 Support for multiple documents in a single workspace
- 📑 Support for PDF, DOCX, TXT, CSV, Excel, PowerPoint, and other document formats
- 🎙️ Audio transcription and question answering
- 🎥 Video analysis and content-based querying
- 💬 Conversation memory with persistent chat history
- ⚡ Real-time streaming responses
- 🎨 Premium responsive UI with Dark/Light mode
- 👤 User authentication and document management
- ☁️ Cloud deployment with scalable vector storage
---

## 👩‍💻 Author

**Bharti Dangi**

GitHub: https://github.com/dangibharti1511