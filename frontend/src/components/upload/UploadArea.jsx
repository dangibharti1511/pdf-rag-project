import "./UploadArea.css";

import { UploadCloud } from "lucide-react";
import { Button } from "../ui";

function UploadArea() {
  return (
    <div className="upload-area">

      <UploadCloud size={64} strokeWidth={1.5} />

      <h2>Drag & Drop Your Files</h2>

      <p>
        Supports PDF, DOCX, XLSX, CSV, PPTX, Images and more.
      </p>

      <Button>
        Browse Files
      </Button>

      <div className="supported-formats">

        <span>PDF</span>

        <span>DOCX</span>

        <span>XLSX</span>

        <span>CSV</span>

        <span>PPTX</span>

      </div>

    </div>
  );
}

export default UploadArea;