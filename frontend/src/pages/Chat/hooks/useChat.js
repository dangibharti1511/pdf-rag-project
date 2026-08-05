import { useState } from "react";
import { chatService } from "../../../services/api";

function useChat() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    async function sendMessage(question) {

        if (!question.trim()) return;

        const userMessage = {
            id: Date.now(),
            role: "user",
            content: question,
        };

        setMessages(prev => [...prev, userMessage]);

        setLoading(true);

        try {

            const response = await chatService.askQuestion(question);

            const aiMessage = {

                id: Date.now() + 1,

                role: "assistant",

                content: response.data.answer,

                sources: response.data.sources || []

            };

            setMessages(prev => [...prev, aiMessage]);

        }

        catch (error) {

            setMessages(prev => [

                ...prev,

                {

                    id: Date.now() + 2,

                    role: "assistant",

                    content:

                        error.detail ||

                        "Unable to generate response.",

                    sources: []

                }

            ]);

        }

        finally {

            setLoading(false);

        }

    }

    return {

        messages,

        loading,

        sendMessage

    };

}

export default useChat;