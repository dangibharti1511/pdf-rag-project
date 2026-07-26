import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = 'http://localhost:8000/api';

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus('');
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a PDF file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    setUploadStatus('Uploading and processing...');
    try {
      const response = await axios.post(`${API_BASE}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus(response.data.message);
      setFile(null);
    } catch (error) {
      setUploadStatus(`Error: ${error.response?.data?.detail || error.message}`);
    }
  };

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    setSources([]);
    try {
      const response = await axios.post(`${API_BASE}/ask`, { question });
      setAnswer(response.data.answer);
      setSources(response.data.sources || []);
    } catch (error) {
      setAnswer(`Error: ${error.response?.data?.detail || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📄 PDF RAG Assistant</h1>
        <p>Upload a PDF and ask questions about its content</p>
      </header>
      <main>
        <section className="upload-section">
          <h2>1. Upload PDF</h2>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={!file}>
            Upload & Process
          </button>
          {uploadStatus && <p className="status">{uploadStatus}</p>}
        </section>

        <section className="qa-section">
          <h2>2. Ask a Question</h2>
          <form onSubmit={handleAsk}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., What is the main topic?"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !question.trim()}>
              {loading ? 'Thinking...' : 'Ask'}
            </button>
          </form>
         {answer && (
           <div className="answer-box">
             <h3>Answer:</h3>

             <p>{answer}</p>

            {sources.length > 0 && (
             <>
             <hr />

             <h4>📄 Source Pages</h4>

             <p>
               {sources.map((page) => `Page ${page}`).join(", ")}
             </p>
           </>
         )}
       </div>
      )} 
        </section>
      </main>
    </div>
  );
}

export default App;