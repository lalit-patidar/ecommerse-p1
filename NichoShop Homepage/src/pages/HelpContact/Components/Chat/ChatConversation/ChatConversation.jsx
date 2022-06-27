import "./chatconversation.scss";
import { MdSend } from "react-icons/md";

const ChatConversation = () => {
    return (
        <>
            <div className="ui-chat-con-box">
                <div className="ui-chat-content">
                    <div className="ui-chat-left-con">
                        <div>
                            <div className="ui-clc-head">
                                <ul>
                                    <li>Me</li>
                                    <li>11:30 Am</li>
                                </ul>
                                <p>
                                    This is just an example, this is just an
                                    example, this is just an example, this is
                                    just an example.
                                </p>
                                <p>Order ID: 12345678-123456</p>
                            </div>
                            <p>
                                <i>
                                    You’re now connected to Agent’s Name from
                                    NichoShop.
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="ui-chat-right-con">
                        <div className="ui-clc-head">
                            <ul>
                                <li>Ivan | Customer Support</li>
                                <li>11:30 Am</li>
                            </ul>
                            <p>
                                This is just an example, this is just an
                                example, this is just an example, this is just
                                an example.
                            </p>
                        </div>
                    </div>
                    <div className="ui-chat-left-con">
                        <div>
                            <div className="ui-clc-head">
                                <ul>
                                    <li>Me</li>
                                    <li>11:30 Am</li>
                                </ul>
                                <p>
                                    This is just an example, this is just an
                                    example, this is just an example, this is
                                    just an example.
                                </p>
                                <p>Order ID: 12345678-123456</p>
                            </div>
                            <p>
                                <i>
                                    You’re now connected to Agent’s Name from
                                    NichoShop.
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="ui-chat-right-con">
                        <div className="ui-clc-head">
                            <ul>
                                <li>Ivan | Customer Support</li>
                                <li>11:30 Am</li>
                            </ul>
                            <p>
                                This is just an example, this is just an
                                example, this is just an example, this is just
                                an example.
                            </p>
                        </div>
                    </div>
                    <div className="ui-chat-endded">
                        <span></span>
                        <p>Chat session has ended</p>
                        <span></span>
                    </div>
                </div>
                <div className="ui-chat-input">
                    <i>Agent is typing...</i>
                    <form>
                        <div className="ui-chat-send-form">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a message..."
                            />
                            <button className="btn">
                                <MdSend />
                            </button>
                        </div>
                    </form>
                    <p>
                        A record of this chat session will be sent to your email
                        address
                    </p>
                </div>
            </div>
        </>
    );
};

export default ChatConversation;
