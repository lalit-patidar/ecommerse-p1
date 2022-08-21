import { Link } from "react-router-dom";
import "./jobcard.scss";

const JobCard = () => {
    return (
        <>
            <div className="ui-job-card">
                <div className="ui-job-card-head">
                    <div className="ui-job-card-head-left">
                        <p>Senior Software Engineer</p>
                        <p>USA, WA, Seattle | Job ID: 1 </p>
                    </div>
                    <div className="ui-job-card-head-right">
                        <p>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                    stroke="#616161"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16 2V6"
                                    stroke="#616161"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8 2V6"
                                    stroke="#616161"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M3 10H21"
                                    stroke="#616161"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            August 26, 2021
                        </p>
                        <p>Updated about 10 hours ago</p>
                    </div>
                </div>
                <div className="ui-job-card-content">
                    <p>
                        Shipping is one of NichoShop's core initiative
                        responsible for delivering the world's greatest
                        selection cheaply, conveniently and dependably. Shipping
                        team is the driver for many key programs like •
                        NichoShop Plus: NichoShop's answer to Amazon prime in
                        Germany... <Link to="/">Read more</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default JobCard;
