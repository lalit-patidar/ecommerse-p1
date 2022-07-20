import "./breadcrumb.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumb = ({ bread }) => {
    console.log(bread);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ui-bread-crumb">
                            <ul>
                                {bread.map((item) => {
                                    return (
                                        <li>
                                            <Link to={item.path}>
                                                {item.name}
                                            </Link>
                                            <IoIosArrowForward />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;
