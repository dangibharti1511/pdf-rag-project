import "./WelcomeMessage.css";

import { Sparkles } from "lucide-react";

function WelcomeMessage() {
  return (
    <div className="welcome-message">

      <div className="welcome-icon">

        <Sparkles size={42} />

      </div>

      <h2>Ready to Explore Your Knowledge?</h2>

      <p>

        Upload your documents and start asking questions.
        ThinkAI will search the most relevant information
        and generate intelligent answers with source references.

      </p>

    </div>
  );
}

export default WelcomeMessage;