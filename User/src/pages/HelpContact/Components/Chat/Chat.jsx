import "./chat.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import StartChat from "./StartChat/StartChat";
import { useState } from "react";
import ChatConversation from "./ChatConversation/ChatConversation";
import CloseChat from "./ColseChat/CloseChat";
import ChatRating from "./ChatRating/ChatRating";

const Chat = () => {
    const [isMinimized, setMinimized] = useState(false);
    const [getChatStart, setChatStart] = useState(false);
    const [isCloseChat, setCloseChat] = useState(false);
    const [isClosedChat, setClosedChat] = useState(false);

    // minimize handler & state
    const minimizedHandler = () => {
        setMinimized(!isMinimized);
        setCloseChat(false);
        setClosedChat(false);
    };

    // start chat handler & state
    const chatStartHandler = () => {
        setChatStart(true);
    };

    // close chat handler
    const chatCloseHandler = () => {
        setCloseChat(true);
    };

    // close chat with reting
    const yesHander = () => {
        setClosedChat(true);
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
                            <button onClick={chatCloseHandler}>
                                <IoMdClose />
                            </button>
                        </li>
                    </ul>
                </div>
                {!isCloseChat ? (
                    <>
                        {!isMinimized && (
                            <>
                                {!getChatStart ? (
                                    <StartChat
                                        chatStartHandler={chatStartHandler}
                                    />
                                ) : (
                                    <ChatConversation />
                                )}

                                {/* <ChatRating /> */}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {!isClosedChat ? (
                            <CloseChat yesHander={yesHander} />
                        ) : (
                            <ChatRating />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Chat;
