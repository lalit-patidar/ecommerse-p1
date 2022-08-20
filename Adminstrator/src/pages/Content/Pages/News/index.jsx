import NewsCard from "../../components/NewsCard";
import { CgAdd } from "react-icons/cg";
import "./news.scss";

const News = () => {
    return (
        <>
            <div className="ui-news-box">
                <div className="container">
                    <div className="ui-news-box-head">
                        <h2>News</h2>
                        <button>
                            <CgAdd />
                            Add a new news
                        </button>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <NewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
