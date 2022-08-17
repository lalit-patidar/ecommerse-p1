import "./tabsidebar.scss";

const TabSidebar = ({ data, handler }) => {
    return (
        <>
            <div className="ui-tab-sidebar">
                <div className="ui-tab-sidebar-menu">
                    <h4>About NichoShop</h4>
                    <div className="ui-tab-sidebar-btn">
                        {data.map((item, index) => {
                            return (
                                <button
                                    className={item.isClicked ? "active" : ""}
                                    onClick={() => handler(item.id)}
                                    key={index}
                                >
                                    {item.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabSidebar;
