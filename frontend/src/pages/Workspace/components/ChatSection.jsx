import "./ChatSection.css";

import { WelcomeMessage, ChatInput } from "../../../components/chat";
import { SectionTitle } from "../../../components/ui";

function ChatSection() {
  return (
    <section className="chat-section">

      <SectionTitle
        title="AI Conversation"
        subtitle="Ask ThinkAI anything about your uploaded documents."
      />

      <div className="chat-container">

        <WelcomeMessage />

        <ChatInput />

      </div>

    </section>
  );
}

export default ChatSection;