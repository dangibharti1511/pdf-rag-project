import "./ChatInput.css";

import { useState } from "react";

import { SendHorizontal } from "lucide-react";

function ChatInput({

    onSend,

    loading

}) {

    const [question, setQuestion] = useState("");

    function submit() {

        if (!question.trim()) return;

        onSend(question);

        setQuestion("");

    }

    return (

        <div className="chat-input">

            <input

                type="text"

                value={question}

                placeholder="Ask ThinkAI..."

                onChange={(e) =>

                    setQuestion(e.target.value)

                }

                onKeyDown={(e) => {

                    if (e.key === "Enter")

                        submit();

                }}

                disabled={loading}

            />

            <button

                onClick={submit}

                disabled={loading}

            >

                <SendHorizontal size={18} />

            </button>

        </div>

    );

}

export default ChatInput;