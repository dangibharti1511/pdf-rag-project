import os
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from dotenv import load_dotenv

load_dotenv()

# FAISS index storage path
VECTOR_STORE_PATH = "faiss_index"

def process_pdf(file_path: str):
    """Load PDF, split into chunks, generate embeddings, and save FAISS index."""
    # Load PDF
    loader = PyPDFLoader(file_path)
    documents = loader.load()
    
    # Split text
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    chunks = text_splitter.split_documents(documents)
    
    # Generate embeddings and create FAISS vector store
    embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)
    vector_store = FAISS.from_documents(chunks, embeddings)
    
    # Save locally (overwrites previous index)
    vector_store.save_local(VECTOR_STORE_PATH)
    
    # Optionally, remove the uploaded PDF after processing
    # os.remove(file_path)