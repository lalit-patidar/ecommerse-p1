import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import "./sendusdocumentation.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SendUsDocumentation = () => {
    const fileChageHandler = () => {};
    return (
        <>
            <Menu />
            <div className="ui-send-us-documentation-box">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <div className="ui-breadcrumb-box">
                                <ul>
                                    <li>
                                        <Link to="/">My NichoShop</Link>
                                    </li>
                                    <li>
                                        <IoIosArrowForward />
                                    </li>
                                    <li>Help and contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ui-sud-head">
                                <h2>Send us documentation</h2>
                                <div className="ui-sud-table">
                                    <div className="ui-sud-table-head">
                                        <h4>Hi Name</h4>
                                    </div>
                                    <div className="ui-sud-body">
                                        <div className="ui-email-upload-file">
                                            <label>
                                                Add Files
                                                <input
                                                    type="file"
                                                    onChange={fileChageHandler}
                                                    multiple
                                                />
                                            </label>
                                        </div>
                                        <p>
                                            Accepted file formats: .gif, .jpg,
                                            .jpeg, .pdf, .and .png. Add up to 10
                                            files, 5MB each
                                        </p>
                                        <div className="ui-email-us-content mt-2">
                                            <label htmlFor="ui-email-comment">
                                                Comments
                                            </label>
                                            <textarea
                                                id="ui-email-comment"
                                                className="form-control"
                                                placeholder="Enter more information"
                                            ></textarea>
                                        </div>
                                        <div className="ui-email-us-btn">
                                            <button className="btn">
                                                Send
                                            </button>
                                            <button className="btn">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SendUsDocumentation;
