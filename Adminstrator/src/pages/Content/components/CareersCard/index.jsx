import "./careerscard.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const CareersCard = ({ data }) => {
    return (
        <>
            <div className="ui-careers-card">
                <div className="ui-careers-card-head">
                    <h2>{data.title}</h2>
                    <button>
                        <BsThreeDotsVertical />
                    </button>
                </div>
                <div className="ui-careers-card-bottom">
                    <button>
                        <p>
                            <span>329</span> open jobs
                        </p>
                        <p>
                            <IoIosArrowForward />
                        </p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CareersCard;
