import apiClient from "./apiClient";

const uploadService = {
  uploadDocument(file, onUploadProgress) {
    const formData = new FormData();

    formData.append("file", file);

    return apiClient.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  },
};

export default uploadService;