import { useState } from "react";
import Footer from "../../container/Footer/footer";
import Nav from "../../container/Nav/navbar";
import ContentAccordion from "./components/ContentAccordion";
import { v4 as uuidv4 } from "uuid";
import "./content.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import TabSidebar from "./components/TabSidebar";
import TabContent from "./components/TabContent";
import TheNichoShopPolicies from "./Pages/TheNichoShopPolicies";

const Content = () => {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    // console.log(searchParams.get("tab"));

    // accordion data
    const [getAccordionList, setAccordionList] = useState([
        { id: uuidv4(), title: "About Nicho Shop" },
        { id: uuidv4(), title: "The Nicho Shop’s Policies" },
        { id: uuidv4(), title: "Safety Center" },
        { id: uuidv4(), title: "News" },
        { id: uuidv4(), title: "Careers" },
    ]);

    const contentAccordionHandler = (id) => {
        const updated = getAccordionList.map((item) => {
            if (item.id === id) {
                navigate(
                    "/content?tab=" +
                        item.title.split(" ").join("").toLowerCase()
                );
                if (item.isClicked) {
                    item.isClicked = false;
                } else {
                    getAccordionList.forEach((it) => {
                        it.isClicked = false;
                    });
                    item.isClicked = true;
                }
            }
            return item;
        });
        setAccordionList(updated);
    };

    // about nicho sop data
    const [getSideBarContent, setSidebarContent] = useState([
        {
            id: uuidv4(),
            title: "Overview",
            isClicked: true,
        },
        {
            id: uuidv4(),
            title: "Company facts",
        },
        {
            id: uuidv4(),
            title: "Images",
        },
        {
            id: uuidv4(),
            title: "Contact us",
        },
    ]);

    const sidebarHandler = (id) => {
        const updated = getSideBarContent.map((item) => {
            if (item.id === id) {
                navigate(
                    "/content?tab=" +
                        searchParams.get("tab") +
                        "&name=" +
                        item.title.split(" ").join("").toLocaleLowerCase()
                );
                if (!item.isClicked) {
                    getSideBarContent.map((rem) => (rem.isClicked = false));
                    item.isClicked = true;
                }
            }
            return item;
        });
        setSidebarContent(updated);
    };

    return (
        <>
            <Nav />
            {searchParams.get("tab") === null && (
                <div className="ui-content-box">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                {getAccordionList.length !== 0 &&
                                    getAccordionList.map((item, index) => {
                                        return (
                                            <ContentAccordion
                                                key={index}
                                                data={item}
                                                handler={
                                                    contentAccordionHandler
                                                }
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {searchParams.get("tab") === "aboutnichoshop" && (
                <div className="ui-content-tab">
                    <TabSidebar
                        data={getSideBarContent}
                        handler={sidebarHandler}
                    />
                    <TabContent data={getSideBarContent} />
                </div>
            )}
            {searchParams.get("tab") === "thenichoshop’spolicies" && (
                <TheNichoShopPolicies />
            )}
            <Footer />
        </>
    );
};

export default Content;
