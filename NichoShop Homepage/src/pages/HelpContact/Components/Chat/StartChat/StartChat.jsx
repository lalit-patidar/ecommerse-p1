import "./startchat.scss";

const StartChat = ({ chatStartHandler }) => {
    return (
        <>
            <div className="ui-start-chat-box">
                <h4>Hi, NichoShop_Guest,</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="chat-des-box" class="form-label">
                            Please provide a brief description of your issue. *
                        </label>
                        <textarea
                            id="chat-des-box"
                            className="form-control"
                            rows="3"
                            placeholder="Enter a message to the buyer..."
                        ></textarea>
                        <span>1000 characters left</span>
                    </div>
                    <div className="ui-start-chat-number">
                        <div class="mb-3">
                            <label className="form-label">Order number</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter order number"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                chatStartHandler();
                            }}
                        >
                            Start chat
                        </button>
                        <p>* Required</p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default StartChat;
