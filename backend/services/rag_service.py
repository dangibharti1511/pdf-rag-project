import os
from dotenv import load_dotenv

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.chains.question_answering import load_qa_chain

from prompts.qa_prompt import QA_PROMPT

load_dotenv()

VECTOR_STORE_PATH = "faiss_index"


def load_vector_store():
    """Load FAISS vector store from disk."""

    if not os.path.exists(VECTOR_STORE_PATH):
        raise ValueError("No vector store found. Please upload a PDF first.")

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    return FAISS.load_local(
        VECTOR_STORE_PATH,
        embeddings,
        allow_dangerous_deserialization=True,
    )


def answer_question(question: str):
    """Retrieve relevant context and generate answer using Groq LLM."""

    vector_store = load_vector_store()

    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0,
    )

    combine_documents_chain = load_qa_chain(
        llm=llm,
        chain_type="stuff",
        prompt=QA_PROMPT,
    )

    qa_chain = RetrievalQA(
        combine_documents_chain=combine_documents_chain,
        retriever=vector_store.as_retriever(
            search_kwargs={"k": 5}
        ),
        return_source_documents=True,
    )

    response = qa_chain.invoke({"query": question})

    pages = []

    for doc in response["source_documents"]:
        page = doc.metadata.get("page")
        if page is not None:
            pages.append(page + 1)

    pages = sorted(set(pages))

    return {
        "answer": response["result"],
        "sources": pages,
    }