import { useSearchParams } from "react-router-dom";
import "./tabsidebar.scss";

const TabSidebar = ({ data, handler }) => {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div className="ui-tab-sidebar">
                {searchParams.get("tab") === "aboutnichoshop" && (
                    <div className="ui-tab-sidebar-menu">
                        <h4>About NichoShop</h4>
                        <div className="ui-tab-sidebar-btn">
                            {data.map((item, index) => {
                                return (
                                    <button
                                        className={
                                            item.isClicked ? "active" : ""
                                        }
                                        onClick={() => handler(item.id)}
                                        key={index}
                                    >
                                        {item.title}
                                    </button>
                                );
                            })}
                        </div>
                        <button>Add New</button>
                    </div>
                )}
                {searchParams.get("tab") === "safetycenter" && (
                    <div className="ui-tab-sidebar-menu">
                        <h4>Safety Center</h4>
                        <div className="ui-tab-sidebar-btn">
                            {data.map((item, index) => {
                                return (
                                    <button
                                        className={
                                            item.isClicked ? "active" : ""
                                        }
                                        onClick={() => handler(item.id)}
                                        key={index}
                                    >
                                        {item.title}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="ui-tab-sidebar-add">
                            <button>Add New</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TabSidebar;
