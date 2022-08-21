import JobCard from "../JobCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./jobpost.scss";

const JobPost = () => {
    return (
        <>
            <div className="ui-job-post">
                <div className="ui-job-post-head">
                    <p>Showing 1- 10 of 88 jobs</p>
                </div>
                <div className="ui-job-post-content">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
                <div className="ui-job-post-pagination">
                    <div className="ui-job-post-pagination-left">
                        <p>Page 1 of 4</p>
                    </div>
                    <div className="ui-job-post-pagination-btn">
                        <button>
                            <IoIosArrowBack />
                        </button>
                        <div className="ui-job-post-pagination-btn-group">
                            <button>1</button>
                            <button className="active">2</button>
                            <button>3</button>
                            <button>4</button>
                        </div>
                        <button>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className="ui-job-post-pagination-right">
                        <p>Results per page</p>
                        <form>
                            <select className="form-select">
                                <option value="">25</option>
                                <option value="">30</option>
                                <option value="">35</option>
                                <option value="">40</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPost;
