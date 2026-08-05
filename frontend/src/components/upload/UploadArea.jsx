import "./UploadArea.css";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

import { Button } from "../ui";
import { Toast } from "../feedback";
import { uploadService } from "../../services/api";

function UploadArea() {

  const inputRef = useRef(null);

  const [uploading, setUploading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type) => {

    setToast({
      visible: true,
      message,
      type,
    });

    setTimeout(() => {

      setToast((prev) => ({
        ...prev,
        visible: false,
      }));

    }, 3000);

  };

  const openPicker = () => {

    inputRef.current.click();

  };

  const uploadFile = async (event) => {

    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {

      showToast("Please select a PDF file.", "error");

      return;

    }

    try {

      setUploading(true);

      setProgress(0);

      showToast("Uploading PDF...", "loading");

      const response = await uploadService.uploadDocument(

        file,

        (progressEvent) => {

          const percent = Math.round(

            (progressEvent.loaded * 100) /

              progressEvent.total

          );

          setProgress(percent);

        }

      );

      showToast(response.data.message, "success");

    } catch (error) {

      showToast(

        error.detail ||

          "Upload failed.",

        "error"

      );

    } finally {

      setUploading(false);

      setProgress(0);

      event.target.value = "";

    }

  };

  return (

    <>

      <Toast

        visible={toast.visible}

        message={toast.message}

        type={toast.type}

      />

      <div className="upload-area">

        <UploadCloud size={64} strokeWidth={1.5} />

        <h2>

          Drag & Drop Your Files

        </h2>

        <p>

          Supports PDF, DOCX, XLSX, CSV, PPTX, Images and more.

        </p>

        <input

          ref={inputRef}

          type="file"

          hidden

          accept=".pdf"

          onChange={uploadFile}

        />

        <Button

          onClick={openPicker}

          disabled={uploading}

        >

          {

            uploading

              ? `Uploading ${progress}%`

              : "Browse Files"

          }

        </Button>

        <div className="supported-formats">

          <span>PDF</span>

          <span>DOCX</span>

          <span>XLSX</span>

          <span>CSV</span>

          <span>PPTX</span>

        </div>

      </div>

    </>

  );

}

export default UploadArea;