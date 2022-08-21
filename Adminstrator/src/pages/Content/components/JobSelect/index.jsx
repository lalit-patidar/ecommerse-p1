import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import "./jobselect.scss";

const JobSelect = () => {
    // job type
    const [jobType, setJobType] = useState([
        { id: uuidv4(), type: "Full time", jobs: 60 },
        { id: uuidv4(), type: "Part time", jobs: 1 },
        { id: uuidv4(), type: "Seasonal", jobs: 27 },
    ]);

    // job type handler
    const jobTypeHandler = (id) => {
        const jobTypeCopied = jobType.map((e) => ({
            ...e,
        }));
        const index = jobTypeCopied.findIndex((item) => item.id === id);
        if (index > -1) {
            if (jobTypeCopied[index]?.isChecked) {
                jobTypeCopied[index].isChecked = false;
            } else {
                jobTypeCopied[index].isChecked = true;
            }
        }
        setJobType(jobTypeCopied);
    };

    // localtion type
    const [locationType, setLocationType] = useState([
        { id: uuidv4(), type: "Seattle, Washinton, USA" },
        { id: uuidv4(), type: "New York, New York, USA" },
        { id: uuidv4(), type: "Bengaluru, Karnataka, IND" },
        { id: uuidv4(), type: "Arlington, Virginia, USA" },
        { id: uuidv4(), type: "London, England, GBR" },
    ]);

    // location type handler
    const locationTypeHandler = (id) => {
        const locationTypeCopied = locationType.map((e) => ({
            ...e,
        }));
        const index = locationTypeCopied.findIndex((item) => item.id === id);
        if (index > -1) {
            if (locationTypeCopied[index]?.isChecked) {
                locationTypeCopied[index].isChecked = false;
            } else {
                locationTypeCopied[index].isChecked = true;
            }
        }
        setLocationType(locationTypeCopied);
    };

    // category type
    const [catType, setCatType] = useState([
        { id: uuidv4(), type: "Work from home" },
        { id: uuidv4(), type: "Corporate" },
    ]);

    // category type handler
    const catTypeHandler = (id) => {
        const catTypeCopied = catType.map((e) => ({
            ...e,
        }));
        const index = catTypeCopied.findIndex((item) => item.id === id);
        if (index > -1) {
            if (catTypeCopied[index]?.isChecked) {
                catTypeCopied[index].isChecked = false;
            } else {
                catTypeCopied[index].isChecked = true;
            }
        }
        setCatType(catTypeCopied);
    };

    // dropdowm hanlders & states
    const [dropdown, setDropdown] = useState({
        job: true,
        location: true,
        category: true,
    });

    const jobDropdownHandler = () => {
        setDropdown((oldState) => {
            return {
                ...oldState,
                job: !oldState.job,
            };
        });
    };

    const locationHandler = () => {
        setDropdown((oldState) => {
            return {
                ...oldState,
                location: !oldState.location,
            };
        });
    };

    const categoryHandler = () => {
        setDropdown((oldState) => {
            return {
                ...oldState,
                category: !oldState.category,
            };
        });
    };

    return (
        <>
            <div className="ui-job-select">
                <div className="ui-job-select-head">
                    <h4>Filter by</h4>
                </div>
                <div className="ui-job-select-dropdown">
                    <button
                        className={dropdown.job && "active"}
                        onClick={jobDropdownHandler}
                    >
                        Job Type
                        <span>
                            <IoIosArrowDown />
                        </span>
                    </button>
                    {dropdown.job && (
                        <ul>
                            {jobType.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                checked={item.isChecked}
                                                onChange={() =>
                                                    jobTypeHandler(item.id)
                                                }
                                                id={item.id}
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className={
                                                    item.isChecked
                                                        ? "form-check-label active"
                                                        : "form-check-label"
                                                }
                                            >
                                                {item.type} ({item.jobs})
                                            </label>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <div className="ui-job-select-dropdown">
                    <button
                        className={dropdown.location && "active"}
                        onClick={locationHandler}
                    >
                        Locations
                        <span>
                            <IoIosArrowDown />
                        </span>
                    </button>
                    {dropdown.location && (
                        <ul>
                            {locationType.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                checked={item.isChecked}
                                                onChange={() =>
                                                    locationTypeHandler(item.id)
                                                }
                                                id={item.id}
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className={
                                                    item.isChecked
                                                        ? "form-check-label active"
                                                        : "form-check-label"
                                                }
                                            >
                                                {item.type}
                                            </label>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <div className="ui-job-select-dropdown">
                    <button
                        className={dropdown.category && "active"}
                        onClick={categoryHandler}
                    >
                        Category
                        <span>
                            <IoIosArrowDown />
                        </span>
                    </button>
                    {dropdown.category && (
                        <ul>
                            {catType.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                checked={item.isChecked}
                                                onChange={() =>
                                                    catTypeHandler(item.id)
                                                }
                                                id={item.id}
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className={
                                                    item.isChecked
                                                        ? "form-check-label active"
                                                        : "form-check-label"
                                                }
                                            >
                                                {item.type}
                                            </label>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default JobSelect;
