import { CgAdd } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import Footer from "../../../../container/Footer/footer";
import Nav from "../../../../container/Nav/navbar";
import "./jobcategory.scss";
import JobSelect from "../../components/JobSelect";
import JobPost from "../../components/JobPost";

const JobCategory = () => {
    return (
        <>
            <Nav />
            <div className="ui-job-box">
                <div className="container">
                    <div className="ui-news-box-head">
                        <h2>Careers at NichoShop</h2>
                        <button>
                            <CgAdd />
                            Add a new jobcategory
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ui-careers-box-search">
                                <form action="">
                                    <div className="ui-careers-box-search-box">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search for job by title, keyword or ID"
                                        />
                                        <button>
                                            <BiSearch />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ui-job-info">
                                <div className="ui-job-info-head">
                                    <h4>Software Development</h4>
                                </div>
                                <div className="ui-job-info-content">
                                    <p>
                                        <b>
                                            Creating high quality, efficient,
                                            elegant code that fuels the commerce
                                            revolution
                                        </b>
                                    </p>
                                    <p>
                                        We’re looking for software engineers who
                                        want to invent, build, and sometimes
                                        break things to make them easier,
                                        faster, better, and more cost-effective.
                                        To those who thrive at solving highly
                                        complex problems, and who aspire to
                                        impact billions of lives on a global
                                        scale: come build the future with us.
                                    </p>
                                    <p>
                                        At NichoShop, you’ll be working with the
                                        best minds in technology. Learn and be
                                        curious here, and accelerate your career
                                        growth. You can take pride in knowing
                                        that your work is meaningful, having a
                                        positive impact on others and making the
                                        world a better place.
                                    </p>
                                    <p>
                                        Building scalable solutions for
                                        world-class problems
                                    </p>
                                    <ul>
                                        <li>Example</li>
                                        <li>Example</li>
                                        <li>Example</li>
                                        <li>Example</li>
                                    </ul>
                                    <p>
                                        With a software development career at
                                        NichoShop, you’ll always find a new
                                        challenge that excites you, complemented
                                        with competitive compensation and
                                        benefits that enable you to live your
                                        best life.
                                    </p>
                                </div>
                                <div className="ui-job-info-post">
                                    <div className="ui-job-info-post-head">
                                        <h4>
                                            Find jobs in Software Development
                                        </h4>
                                    </div>
                                    <div className="ui-job-info-grid">
                                        <JobSelect />
                                        <JobPost />
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

export default JobCategory;
