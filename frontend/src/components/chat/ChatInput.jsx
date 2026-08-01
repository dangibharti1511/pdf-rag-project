import "./ChatInput.css";

import { SendHorizontal } from "lucide-react";

function ChatInput() {
  return (
    <div className="chat-input">

      <input
        type="text"
        placeholder="Ask ThinkAI about your uploaded documents..."
      />

      <button>

        <SendHorizontal size={18} />

      </button>

    </div>
  );
}

export default ChatInput;