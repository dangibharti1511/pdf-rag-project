import "./Chat.css";

import ChatHeader from "./components/ChatHeader/ChatHeader";
import MessageBubble from "./components/MessageBubble/MessageBubble";

import {

    ChatInput,

    WelcomeMessage

} from "../../components/chat";

import useChat from "./hooks/useChat";

function Chat() {

    const {

        messages,

        loading,

        sendMessage

    } = useChat();

    return (

        <div className="chat-page">

            <ChatHeader />

            <div className="chat-content">

                {

                    messages.length === 0

                        ?

                        <WelcomeMessage />

                        :

                        messages.map(message => (

                            <MessageBubble

                                key={message.id}

                                role={message.role}

                                content={message.content}

                                sources={message.sources}

                            />

                        ))

                }

            </div>

            <ChatInput

                onSend={sendMessage}

                loading={loading}

            />

        </div>

    );

}

export default Chat;