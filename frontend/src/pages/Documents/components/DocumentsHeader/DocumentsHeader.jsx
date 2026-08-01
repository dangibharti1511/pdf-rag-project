import "./DocumentsHeader.css";

import { Upload } from "lucide-react";

function DocumentsHeader() {
  return (
    <div className="documents-header">

      <div className="documents-header-left">

        <h1>Documents</h1>

        <p>
          Manage all your uploaded knowledge sources from one place.
        </p>

      </div>

      <button className="upload-document-btn">

        <Upload size={18} />

        Upload Document

      </button>

    </div>
  );
}

export default DocumentsHeader;