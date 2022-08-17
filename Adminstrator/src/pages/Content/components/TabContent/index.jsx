import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./tabcontent.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { ReactComponent as Logo } from "./../../../../assets/images/upload/logo.svg";

const TabContent = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));

    // editor state
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [isEditorSelect, setEditorSelect] = useState(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    return (
        <>
            <div className="ui-content-tab-box">
                {/* overview tab content */}
                {searchParams.get("name") === null ||
                searchParams.get("name") === "overview" ? (
                    <>
                        <div className="ui-content-overview">
                            <h4>Overview</h4>
                            {isEditorSelect && (
                                <>
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={setEditorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                    />
                                </>
                            )}
                            <div className="ui-content-overview-body">
                                {!isEditorSelect && (
                                    <div className="ui-content-overview-body-content">
                                        <p>
                                            Founded by Niko Nikolov and Todorka
                                            Nikolova in 2018, NichoShop has been
                                            created as a marketplace for sale of
                                            goods and services by a passionate
                                            community of individuals and small
                                            businesses.
                                        </p>
                                        <p>
                                            As internet enthusiasts, we knew
                                            that people need a central location
                                            to buy and sell all kinds of items
                                            and to meet other users with similar
                                            interests, so we started NichoShop
                                            to fulfil this need. As many other
                                            people, we faced the problem of
                                            finding a online shops where people
                                            to can add countless listings -
                                            fast, easy and without any fees. So
                                            that we have created NichoShop as an
                                            alternative to the all other online
                                            stores, because we believe that the
                                            selling through online platforms
                                            must be without any fees.
                                        </p>
                                        <p>
                                            As one of the most popular ecommerce
                                            platform in the world, NichoShop's
                                            global portfolio of businesses
                                            enables of millions of people to
                                            buy, sell and pay online.
                                        </p>
                                        <p>
                                            Every day, there are many of new
                                            items listed on NichoShop across
                                            thousands of diverse categories,
                                            including clothes, toys, books,
                                            computers, leisure, sports,
                                            photography electronics and
                                            antiques, amongst many others.
                                        </p>
                                        <p>
                                            We are building a better form of
                                            commerce that is enabled by people,
                                            supported by technology, and open to
                                            everyone – creating more opportunity
                                            for all. We are making shopping
                                            simpler and easier for consumers –
                                            anywhere and anytime. We are focused
                                            on being a partner – not a
                                            competitor – to retailers of all
                                            sizes.
                                        </p>
                                        <p>
                                            At NichoShop, we intend to be a
                                            partner, enabling commerce through
                                            our ecommerce platform, including a
                                            host of other technologies and
                                            platforms that help connect
                                            retailers, merchants, buyers and
                                            sellers around the world.
                                        </p>
                                        <p>
                                            Thanks to technology, consumers are
                                            in the driver’s seat. Mobile
                                            commerce is the catalyst, becoming
                                            the control center of consumers’
                                            lives and enabling multichannel
                                            commerce. Our website is developed
                                            to support all mobile devices
                                            (tablets and smartphones) that means
                                            you can easier puts our business
                                            partners’ storefronts in the pockets
                                            of millions of consumers around the
                                            world (you don't need to download
                                            and install the boring mobile
                                            applications).
                                        </p>
                                        <p>
                                            Since its foundation NichoShop aims
                                            to be the leader among all other
                                            existing online marketplaces, where
                                            practically anyone can buy and sell
                                            practically everything. NichoShop
                                            connects a diverse and passionate
                                            community of individual buyers and
                                            sellers, as well as small
                                            businesses.
                                        </p>
                                    </div>
                                )}

                                {isEditorSelect ? (
                                    <>
                                        <div className="ui-content-overview-btn">
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(false)
                                                }
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setEditorSelect(true)}
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {/* company facts tab content */}
                {searchParams.get("name") === "companyfacts" ? (
                    <>
                        <div className="ui-content-overview">
                            <h4>Company facts</h4>
                            <div className="ui-company-facets">
                                <ul>
                                    <li>Founded</li>
                                    <li>Icorporated July 2018</li>
                                </ul>
                                <ul>
                                    <li>Mission</li>
                                    <li>
                                        Since it foundation NichoShop aims to
                                        Earth’s biggest market place, where
                                        everyone can buy and sell evetything
                                    </li>
                                </ul>
                                <ul>
                                    <li>Headquarters</li>
                                    <li>3 Europe Road, GX11 1AA Gibraltar</li>
                                </ul>
                                <ul>
                                    <li>Websites</li>
                                    <li>
                                        We serve consumer through our retail
                                        websites, which include:
                                        www.nichoshop.com; www.nichoshop.co.ok;
                                        www.nichoshop.de; www.nichoshop.co.jp;
                                        www.nichoshop.fr; www.nichoshop.ca;
                                        www.nichoshop.cn; www.nichoshop.it;
                                        www.nichoshop.es; www.nichoshop.br; and
                                        www.nichoshop.mx.
                                    </li>
                                </ul>
                                <ul>
                                    <li>Selection</li>
                                    <li>
                                        Over a million sellers offer millions of
                                        unique, new, refurbished and used items
                                        in categories such as Car & Vehicles;
                                        Collectibles & Art; Electronics; Home &
                                        Garden; Sporting Goods; Fashion;
                                        Entertainment; Toys & Hobbies; Real
                                        Estate; Business & Individual and
                                        Today's Deals.
                                    </li>
                                </ul>
                            </div>
                            <div className="ui-content-overview-body">
                                <div className="ui-content-overview-btn"></div>
                            </div>
                            <button>Edit</button>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {/* images tab content */}
                {searchParams.get("name") === "images" ? (
                    <>
                        <div className="ui-content-overview">
                            <h4>Company facts</h4>
                            <div className="ui-image-content">
                                <h6>Logo</h6>
                                <div className="ui-image-content-logo">
                                    <Logo />
                                </div>
                                <p>
                                    Download (jpg) <br /> 76.5kb
                                </p>
                            </div>
                            <div className="ui-content-overview-body">
                                <div className="ui-content-overview-btn"></div>
                            </div>
                            <button>Edit</button>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {/* images tab content */}
                {searchParams.get("name") === "contactus" ? (
                    <>
                        <div className="ui-content-overview">
                            <h4>Contact Us</h4>
                            <div className="ui-contect-box">
                                <div className="ui-contact-box-card">
                                    <h6>NichoShop Headquarters</h6>
                                    <ul>
                                        <li>3 Europe Road</li>
                                        <li>Savoy, GX11 1AA</li>
                                        <li>Gibraltar</li>
                                    </ul>
                                </div>
                                <div className="ui-contact-box-card">
                                    <h6>Contact by phone:</h6>
                                    <p>000 000 000</p>
                                </div>
                                <div className="ui-contact-box-card">
                                    <h6>Contact by email:</h6>
                                    <p>press@nichoshop.com</p>
                                </div>
                                <div className="ui-contact-box-card">
                                    <h6>Need help?</h6>
                                    <p>
                                        <span>Contact our</span> Customer
                                        Support
                                    </p>
                                </div>
                            </div>
                            <div className="ui-content-overview-body">
                                <div className="ui-content-overview-btn"></div>
                            </div>
                            <button>Edit</button>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default TabContent;
