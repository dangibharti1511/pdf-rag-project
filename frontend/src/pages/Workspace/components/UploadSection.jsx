import "./UploadSection.css";

import { UploadArea } from "../../../components/upload";
import { SectionTitle } from "../../../components/ui";

function UploadSection() {
  return (
    <section className="upload-section">

      <SectionTitle
        title="Upload Workspace"
        subtitle="Upload your documents to start chatting with ThinkAI."
      />

      <UploadArea />

    </section>
  );
}

export default UploadSection;