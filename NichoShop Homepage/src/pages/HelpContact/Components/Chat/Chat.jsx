import "./chat.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import StartChat from "./StartChat/StartChat";
import { useState } from "react";
import ChatConversation from "./ChatConversation/ChatConversation";

const Chat = () => {
    // chat is start (state)
    const [isChatStart, setIsChatStart] = useState(false);

    const chatStartHandler = () => {
        setIsChatStart(true);
    };

    const [isMinimized, setMinimized] = useState(false);
    const minimizedHandler = () => {
        setMinimized(!isMinimized);
    };

    return (
        <>
            <div
                className={
                    !isMinimized ? "ui-chat-box" : "ui-chat-box minimized"
                }
            >
                <div className="ui-chat-head">
                    <ul>
                        <li>
                            <Logo />
                            {!isMinimized && <p>Chat</p>}
                        </li>
                        <li>
                            <button onClick={minimizedHandler}>
                                <AiOutlineMinus />
                            </button>
                            <button>
                                <IoMdClose />
                            </button>
                        </li>
                    </ul>
                </div>
                {!isMinimized && (
                    <>
                        {!isChatStart && (
                            <StartChat chatStartHandler={chatStartHandler} />
                        )}

                        {isChatStart && <ChatConversation />}
                    </>
                )}
            </div>
        </>
    );
};

export default Chat;
