import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./thenichoshoppolicies.scss";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddModal from "./components/AddModal";
import DraftBox from "./components/DraftBox";

const TheNichoShopPolicies = () => {
    const [isModalOpen, setModelOpen] = useState(false);
    const addnewHandler = () => {
        setModelOpen(true);
    };

    const cancelHandler = () => {
        setModelOpen(false);
    };

    return (
        <div>
            <div className="ui-the-nicho-shop-policies">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ui-the-nicho-shop-policies-head">
                                <h2>The NichoShop Policies</h2>
                                <DraftBox />
                                <div className="ui-the-nicho-shop-policies-head-content">
                                    <h4>A-Z index of Policies</h4>
                                    <ul>
                                        <li>
                                            <Link to="/">A</Link>
                                        </li>
                                        <li>
                                            <Link to="/">B</Link>
                                        </li>
                                        <li>
                                            <Link to="/">C</Link>
                                        </li>
                                        <li>
                                            <Link to="/">D</Link>
                                        </li>
                                        <li>
                                            <Link to="/">E</Link>
                                        </li>
                                        <li>
                                            <Link to="/">F</Link>
                                        </li>
                                        <li>
                                            <Link to="/">G</Link>
                                        </li>
                                        <li>
                                            <Link to="/">H</Link>
                                        </li>
                                        <li>
                                            <Link to="/">I</Link>
                                        </li>
                                        <li>
                                            <Link to="/">J</Link>
                                        </li>
                                        <li>
                                            <Link to="/">K</Link>
                                        </li>
                                        <li>
                                            <Link to="/">L</Link>
                                        </li>
                                        <li>
                                            <Link to="/">M</Link>
                                        </li>
                                        <li>
                                            <Link to="/">O</Link>
                                        </li>
                                        <li>
                                            <Link to="/">P-Q</Link>
                                        </li>
                                        <li>
                                            <Link to="/">R</Link>
                                        </li>
                                        <li>
                                            <Link to="/">S</Link>
                                        </li>
                                        <li>
                                            <Link to="/">T</Link>
                                        </li>
                                        <li>
                                            <Link to="/">U</Link>
                                        </li>
                                        <li>
                                            <Link to="/">V</Link>
                                        </li>
                                        <li>
                                            <Link to="/">W-Z</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ui-the-nicho-shop-policies-body">
                                    <h4>A</h4>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Academic Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Academic Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Academic Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Academic Software
                                            </Link>
                                        </li>
                                        <li>
                                            <span>
                                                <Link to="/">Airlines</Link>
                                            </span>
                                            <ul>
                                                <li>
                                                    <Link to="/">
                                                        Industry items
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Travel</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Uniforms</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">Art</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Artifacts</Link>
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    onClick={addnewHandler}
                                    className="add-btn"
                                >
                                    <AiOutlinePlusCircle />
                                    Add new
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && <AddModal cancelHandler={cancelHandler} />}
            </div>
        </div>
    );
};

export default TheNichoShopPolicies;
