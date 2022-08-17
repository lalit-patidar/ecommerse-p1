import { IoIosArrowForward } from "react-icons/io";
import "./contentaccordion.scss";

const ContentAccordion = ({ data, handler }) => {
    const { id, title, isClicked } = data;
    return (
        <>
            <div className="ui-accordion" onClick={() => handler(id)}>
                <button
                    className={
                        isClicked
                            ? "ui-accordion-btn active"
                            : "ui-accordion-btn"
                    }
                >
                    {title}
                    <span>
                        <IoIosArrowForward />
                    </span>
                </button>
            </div>
        </>
    );
};

export default ContentAccordion;
