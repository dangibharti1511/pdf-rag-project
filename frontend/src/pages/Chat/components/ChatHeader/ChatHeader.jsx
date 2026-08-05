import "./ChatHeader.css";

import { MessageSquare } from "lucide-react";

function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-title">
                <MessageSquare size={22} />
                <div>
                    <h2>ThinkAI Assistant</h2>
                    <p>Ask questions about your uploaded documents.</p>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;