import { Link } from "react-router-dom";
import "./newscard.scss";

const NewsCard = () => {
    return (
        <>
            <div className="ui-news-card">
                <Link to="/content/news/1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                </Link>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                </p>
                <p>
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.2083 3.83203H4.79167C3.73312 3.83203 2.875 4.69015 2.875 5.7487V19.1654C2.875 20.2239 3.73312 21.082 4.79167 21.082H18.2083C19.2669 21.082 20.125 20.2239 20.125 19.1654V5.7487C20.125 4.69015 19.2669 3.83203 18.2083 3.83203Z"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M15.332 1.91797V5.7513"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7.66797 1.91797V5.7513"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M2.875 9.58203H20.125"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Aug 12
                </p>
            </div>
        </>
    );
};

export default NewsCard;
