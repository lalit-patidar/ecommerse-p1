import { Link } from "react-router-dom";
import "./draftbox.scss";

const DraftBox = () => {
    return (
        <>
            <div className="ui-draft-box">
                <div className="ui-draft-box-content">
                    <h4>Draft</h4>
                    <ul>
                        <li>
                            <Link to="/">Animals amd wildlife products</Link>
                        </li>
                        <li>
                            <Link to="/">Art</Link>
                        </li>
                    </ul>
                </div>
                <div className="ui-draft-box-content">
                    <h4>
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2405 4.50752L1.65488 20.51C1.45725 20.8523 1.35268 21.2403 1.35157 21.6355C1.35046 22.0308 1.45286 22.4194 1.64858 22.7627C1.84429 23.1061 2.1265 23.3922 2.46713 23.5927C2.80776 23.7931 3.19493 23.9008 3.59012 23.9052H22.7614C23.1566 23.9008 23.5438 23.7931 23.8844 23.5927C24.2251 23.3922 24.5073 23.1061 24.703 22.7627C24.8987 22.4194 25.0011 22.0308 25 21.6355C24.9989 21.2403 24.8943 20.8523 24.6967 20.51L15.111 4.50752C14.9093 4.17492 14.6252 3.89993 14.2862 3.70908C13.9472 3.51823 13.5648 3.41797 13.1758 3.41797C12.7868 3.41797 12.4043 3.51823 12.0653 3.70908C11.7264 3.89993 11.4423 4.17492 11.2405 4.50752Z"
                                fill="#F7A428"
                                stroke="#F7A428"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.1758 10.3203V14.8472"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.1758 19.375H13.1876"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Attention
                    </h4>
                    <p>
                        You have deleted the “Policy name” policy and this has
                        affected several other pages that contain a link to the
                        deleted policy. Please review these pages and fix the
                        issue.
                    </p>
                    <ul>
                        <li>
                            <Link to="/">Accepted payment methods</Link>
                        </li>
                        <li>
                            <Link to="/">
                                Accassories, prohibited or restricted
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Adult only</Link>
                        </li>
                        <li>
                            <Link to="/">
                                Age requirements for NichoShop members
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ui-draft-box-content">
                    <h4>
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2405 4.50752L1.65488 20.51C1.45725 20.8523 1.35268 21.2403 1.35157 21.6355C1.35046 22.0308 1.45286 22.4194 1.64858 22.7627C1.84429 23.1061 2.1265 23.3922 2.46713 23.5927C2.80776 23.7931 3.19493 23.9008 3.59012 23.9052H22.7614C23.1566 23.9008 23.5438 23.7931 23.8844 23.5927C24.2251 23.3922 24.5073 23.1061 24.703 22.7627C24.8987 22.4194 25.0011 22.0308 25 21.6355C24.9989 21.2403 24.8943 20.8523 24.6967 20.51L15.111 4.50752C14.9093 4.17492 14.6252 3.89993 14.2862 3.70908C13.9472 3.51823 13.5648 3.41797 13.1758 3.41797C12.7868 3.41797 12.4043 3.51823 12.0653 3.70908C11.7264 3.89993 11.4423 4.17492 11.2405 4.50752Z"
                                fill="#F7A428"
                                stroke="#F7A428"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.1758 10.3203V14.8472"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.1758 19.375H13.1876"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Attention
                    </h4>
                    <p>
                        You have policies without description. Please review
                        these pages and add a description of these of these
                        policies.
                    </p>
                    <ul>
                        <li>
                            <Link to="/">Accepted payment methods</Link>
                        </li>
                        <li>
                            <Link to="/">
                                Accassories, prohibited or restricted
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DraftBox;
