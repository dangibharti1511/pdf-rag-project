import "./Workspace.css";

import HeroSection from "./components/HeroSection";
import UploadSection from "./components/UploadSection";
import RecentDocuments from "./components/RecentDocuments";
import ChatSection from "./components/ChatSection";

function Workspace() {
  return (
    <div className="workspace-page">
      <HeroSection />
      <UploadSection />
      <RecentDocuments />
      <ChatSection />
    </div>
  );
}

export default Workspace;