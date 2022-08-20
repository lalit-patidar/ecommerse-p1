import { useState } from "react";
import CareersCard from "../../components/CareersCard";
import "./careers.scss";
import { v4 as uuidv4 } from "uuid";
import { CgAdd } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Careers = () => {
    const navigate = useNavigate();

    const [career, setCareer] = useState([
        { id: uuidv4(), title: "Administrative Support", job: 339 },
        { id: uuidv4(), title: "NichoShop Design", job: 339 },
        {
            id: uuidv4(),
            title: "Audio / Video / Photography production",
            job: 339,
        },
        { id: uuidv4(), title: "Business & Merchant Development", job: 339 },
        {
            id: uuidv4(),
            title: "Buying, Planning  & Instock Managment",
            job: 339,
        },
        { id: uuidv4(), title: "Business Intelligence", job: 339 },
        {
            id: uuidv4(),
            title: "Customer Support",
            job: 339,
        },
        {
            id: uuidv4(),
            title: "Data  Science",
            job: 339,
        },
    ]);

    const jobCatHangler = () => navigate("/content/category/add");

    return (
        <>
            <div className="ui-careers-box">
                <div className="container">
                    <div className="ui-news-box-head">
                        <h2>Careers at NichoShop</h2>
                        <button onClick={jobCatHangler}>
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
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mb-3">
                            <div className="row">
                                {career.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="col-xxl-3 col-lg-4 mb-4"
                                        >
                                            <CareersCard data={item} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Careers;
