import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./tabcontent.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { ReactComponent as Logo } from "./../../../../assets/images/upload/logo.svg";
import { IoMdAddCircleOutline } from "react-icons/io";

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
                {/* this tab of about nicho shop */}
                {searchParams.get("tab") === "aboutnichoshop" && (
                    <>
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
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content">
                                                <p>
                                                    Founded by Niko Nikolov and
                                                    Todorka Nikolova in 2018,
                                                    NichoShop has been created
                                                    as a marketplace for sale of
                                                    goods and services by a
                                                    passionate community of
                                                    individuals and small
                                                    businesses.
                                                </p>
                                                <p>
                                                    As internet enthusiasts, we
                                                    knew that people need a
                                                    central location to buy and
                                                    sell all kinds of items and
                                                    to meet other users with
                                                    similar interests, so we
                                                    started NichoShop to fulfil
                                                    this need. As many other
                                                    people, we faced the problem
                                                    of finding a online shops
                                                    where people to can add
                                                    countless listings - fast,
                                                    easy and without any fees.
                                                    So that we have created
                                                    NichoShop as an alternative
                                                    to the all other online
                                                    stores, because we believe
                                                    that the selling through
                                                    online platforms must be
                                                    without any fees.
                                                </p>
                                                <p>
                                                    As one of the most popular
                                                    ecommerce platform in the
                                                    world, NichoShop's global
                                                    portfolio of businesses
                                                    enables of millions of
                                                    people to buy, sell and pay
                                                    online.
                                                </p>
                                                <p>
                                                    Every day, there are many of
                                                    new items listed on
                                                    NichoShop across thousands
                                                    of diverse categories,
                                                    including clothes, toys,
                                                    books, computers, leisure,
                                                    sports, photography
                                                    electronics and antiques,
                                                    amongst many others.
                                                </p>
                                                <p>
                                                    We are building a better
                                                    form of commerce that is
                                                    enabled by people, supported
                                                    by technology, and open to
                                                    everyone – creating more
                                                    opportunity for all. We are
                                                    making shopping simpler and
                                                    easier for consumers –
                                                    anywhere and anytime. We are
                                                    focused on being a partner –
                                                    not a competitor – to
                                                    retailers of all sizes.
                                                </p>
                                                <p>
                                                    At NichoShop, we intend to
                                                    be a partner, enabling
                                                    commerce through our
                                                    ecommerce platform,
                                                    including a host of other
                                                    technologies and platforms
                                                    that help connect retailers,
                                                    merchants, buyers and
                                                    sellers around the world.
                                                </p>
                                                <p>
                                                    Thanks to technology,
                                                    consumers are in the
                                                    driver’s seat. Mobile
                                                    commerce is the catalyst,
                                                    becoming the control center
                                                    of consumers’ lives and
                                                    enabling multichannel
                                                    commerce. Our website is
                                                    developed to support all
                                                    mobile devices (tablets and
                                                    smartphones) that means you
                                                    can easier puts our business
                                                    partners’ storefronts in the
                                                    pockets of millions of
                                                    consumers around the world
                                                    (you don't need to download
                                                    and install the boring
                                                    mobile applications).
                                                </p>
                                                <p>
                                                    Since its foundation
                                                    NichoShop aims to be the
                                                    leader among all other
                                                    existing online
                                                    marketplaces, where
                                                    practically anyone can buy
                                                    and sell practically
                                                    everything. NichoShop
                                                    connects a diverse and
                                                    passionate community of
                                                    individual buyers and
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
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
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
                                                Since it foundation NichoShop
                                                aims to Earth’s biggest market
                                                place, where everyone can buy
                                                and sell evetything
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Headquarters</li>
                                            <li>
                                                3 Europe Road, GX11 1AA
                                                Gibraltar
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Websites</li>
                                            <li>
                                                We serve consumer through our
                                                retail websites, which include:
                                                www.nichoshop.com;
                                                www.nichoshop.co.ok;
                                                www.nichoshop.de;
                                                www.nichoshop.co.jp;
                                                www.nichoshop.fr;
                                                www.nichoshop.ca;
                                                www.nichoshop.cn;
                                                www.nichoshop.it;
                                                www.nichoshop.es;
                                                www.nichoshop.br; and
                                                www.nichoshop.mx.
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Selection</li>
                                            <li>
                                                Over a million sellers offer
                                                millions of unique, new,
                                                refurbished and used items in
                                                categories such as Car &
                                                Vehicles; Collectibles & Art;
                                                Electronics; Home & Garden;
                                                Sporting Goods; Fashion;
                                                Entertainment; Toys & Hobbies;
                                                Real Estate; Business &
                                                Individual and Today's Deals.
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
                                                <span>Contact our</span>{" "}
                                                Customer Support
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
                    </>
                )}

                {/* this tab of safety center */}
                {searchParams.get("tab") === "safetycenter" && (
                    <>
                        {searchParams.get("name") === null ||
                        searchParams.get("name") === "overview" ? (
                            <>
                                <div className="ui-content-overview">
                                    <h4>Welcome to Safety Center</h4>
                                    {isEditorSelect && (
                                        <>
                                            <form action="">
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-75"
                                                        placeholder="Overwiew"
                                                    />
                                                </div>
                                            </form>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content">
                                                <p>
                                                    Founded by Niko Nikolov and
                                                    Todorka Nikolova in 2018,
                                                    NichoShop has been created
                                                    as a marketplace for sale of
                                                    goods and services by a
                                                    passionate community of
                                                    individuals and small
                                                    businesses.
                                                </p>
                                                <p>
                                                    As internet enthusiasts, we
                                                    knew that people need a
                                                    central location to buy and
                                                    sell all kinds of items and
                                                    to meet other users with
                                                    similar interests, so we
                                                    started NichoShop to fulfil
                                                    this need. As many other
                                                    people, we faced the problem
                                                    of finding a online shops
                                                    where people to can add
                                                    countless listings - fast,
                                                    easy and without any fees.
                                                    So that we have created
                                                    NichoShop as an alternative
                                                    to the all other online
                                                    stores, because we believe
                                                    that the selling through
                                                    online platforms must be
                                                    without any fees.
                                                </p>
                                                <p>
                                                    As one of the most popular
                                                    ecommerce platform in the
                                                    world, NichoShop's global
                                                    portfolio of businesses
                                                    enables of millions of
                                                    people to buy, sell and pay
                                                    online.
                                                </p>
                                                <p>
                                                    Every day, there are many of
                                                    new items listed on
                                                    NichoShop across thousands
                                                    of diverse categories,
                                                    including clothes, toys,
                                                    books, computers, leisure,
                                                    sports, photography
                                                    electronics and antiques,
                                                    amongst many others.
                                                </p>
                                                <p>
                                                    We are building a better
                                                    form of commerce that is
                                                    enabled by people, supported
                                                    by technology, and open to
                                                    everyone – creating more
                                                    opportunity for all. We are
                                                    making shopping simpler and
                                                    easier for consumers –
                                                    anywhere and anytime. We are
                                                    focused on being a partner –
                                                    not a competitor – to
                                                    retailers of all sizes.
                                                </p>
                                                <p>
                                                    At NichoShop, we intend to
                                                    be a partner, enabling
                                                    commerce through our
                                                    ecommerce platform,
                                                    including a host of other
                                                    technologies and platforms
                                                    that help connect retailers,
                                                    merchants, buyers and
                                                    sellers around the world.
                                                </p>
                                                <p>
                                                    Thanks to technology,
                                                    consumers are in the
                                                    driver’s seat. Mobile
                                                    commerce is the catalyst,
                                                    becoming the control center
                                                    of consumers’ lives and
                                                    enabling multichannel
                                                    commerce. Our website is
                                                    developed to support all
                                                    mobile devices (tablets and
                                                    smartphones) that means you
                                                    can easier puts our business
                                                    partners’ storefronts in the
                                                    pockets of millions of
                                                    consumers around the world
                                                    (you don't need to download
                                                    and install the boring
                                                    mobile applications).
                                                </p>
                                                <p>
                                                    Since its foundation
                                                    NichoShop aims to be the
                                                    leader among all other
                                                    existing online
                                                    marketplaces, where
                                                    practically anyone can buy
                                                    and sell practically
                                                    everything. NichoShop
                                                    connects a diverse and
                                                    passionate community of
                                                    individual buyers and
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
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
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
                        {searchParams.get("name") === "buywithconfidence" ? (
                            <>
                                <div className="ui-content-overview">
                                    <h4>Buy with confidence</h4>
                                    {isEditorSelect && (
                                        <>
                                            <form action="">
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-75"
                                                        placeholder="Overwiew"
                                                    />
                                                </div>
                                            </form>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content">
                                                <p>
                                                    Our success has always
                                                    depended on providing a
                                                    security when you shop on
                                                    NichoShop, that's why we are
                                                    here to protect your order
                                                    from checkout to delivery.
                                                </p>
                                                <p>
                                                    As internet enthusiasts, we
                                                    knew that people need a
                                                    central location to buy and
                                                    sell all kinds of items and
                                                    to meet other users with
                                                    similar interests, so we
                                                    started NichoShop to fulfil
                                                    this need. As many other
                                                    people, we faced the problem
                                                    of finding a online shops
                                                    where people to can add
                                                    countless listings - fast,
                                                    easy and without any fees.
                                                    So that we have created
                                                    NichoShop as an alternative
                                                    to the all other online
                                                    stores, because we believe
                                                    that the selling through
                                                    online platforms must be
                                                    without any fees.
                                                </p>
                                                <p>
                                                    As one of the most popular
                                                    ecommerce platform in the
                                                    world, NichoShop's global
                                                    portfolio of businesses
                                                    enables of millions of
                                                    people to buy, sell and pay
                                                    online.
                                                </p>
                                                <p>
                                                    Every day, there are many of
                                                    new items listed on
                                                    NichoShop across thousands
                                                    of diverse categories,
                                                    including clothes, toys,
                                                    books, computers, leisure,
                                                    sports, photography
                                                    electronics and antiques,
                                                    amongst many others.
                                                </p>
                                                <p>
                                                    We are building a better
                                                    form of commerce that is
                                                    enabled by people, supported
                                                    by technology, and open to
                                                    everyone – creating more
                                                    opportunity for all. We are
                                                    making shopping simpler and
                                                    easier for consumers –
                                                    anywhere and anytime. We are
                                                    focused on being a partner –
                                                    not a competitor – to
                                                    retailers of all sizes.
                                                </p>
                                                <p>
                                                    At NichoShop, we intend to
                                                    be a partner, enabling
                                                    commerce through our
                                                    ecommerce platform,
                                                    including a host of other
                                                    technologies and platforms
                                                    that help connect retailers,
                                                    merchants, buyers and
                                                    sellers around the world.
                                                </p>
                                            </div>
                                        )}

                                        {isEditorSelect ? (
                                            <>
                                                <div className="ui-content-overview-btn">
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
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
                        {searchParams.get("name") === "sellwithconfidence" ? (
                            <>
                                <div className="ui-content-overview">
                                    <h4>Sell with confidence</h4>
                                    {isEditorSelect && (
                                        <>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content">
                                                <p>
                                                    Our success has always
                                                    depended on providing a
                                                    security when you shop on
                                                    NichoShop, that's why we are
                                                    here to protect your order
                                                    from checkout to delivery.
                                                </p>
                                                <p>
                                                    As internet enthusiasts, we
                                                    knew that people need a
                                                    central location to buy and
                                                    sell all kinds of items and
                                                    to meet other users with
                                                    similar interests, so we
                                                    started NichoShop to fulfil
                                                    this need. As many other
                                                    people, we faced the problem
                                                    of finding a online shops
                                                    where people to can add
                                                    countless listings - fast,
                                                    easy and without any fees.
                                                    So that we have created
                                                    NichoShop as an alternative
                                                    to the all other online
                                                    stores, because we believe
                                                    that the selling through
                                                    online platforms must be
                                                    without any fees.
                                                </p>
                                                <p>
                                                    As one of the most popular
                                                    ecommerce platform in the
                                                    world, NichoShop's global
                                                    portfolio of businesses
                                                    enables of millions of
                                                    people to buy, sell and pay
                                                    online.
                                                </p>
                                                <p>
                                                    Every day, there are many of
                                                    new items listed on
                                                    NichoShop across thousands
                                                    of diverse categories,
                                                    including clothes, toys,
                                                    books, computers, leisure,
                                                    sports, photography
                                                    electronics and antiques,
                                                    amongst many others.
                                                </p>
                                                <p>
                                                    We are building a better
                                                    form of commerce that is
                                                    enabled by people, supported
                                                    by technology, and open to
                                                    everyone – creating more
                                                    opportunity for all. We are
                                                    making shopping simpler and
                                                    easier for consumers –
                                                    anywhere and anytime. We are
                                                    focused on being a partner –
                                                    not a competitor – to
                                                    retailers of all sizes.
                                                </p>
                                                <p>
                                                    At NichoShop, we intend to
                                                    be a partner, enabling
                                                    commerce through our
                                                    ecommerce platform,
                                                    including a host of other
                                                    technologies and platforms
                                                    that help connect retailers,
                                                    merchants, buyers and
                                                    sellers around the world.
                                                </p>
                                            </div>
                                        )}

                                        {isEditorSelect ? (
                                            <>
                                                <div className="ui-content-overview-btn">
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
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
                        {searchParams.get("name") ===
                            "intellectualpropertyprotection" && (
                            <>
                                <div className="ui-content-overview">
                                    <h4>
                                        Intellectual Property Protection (IPP)
                                        Program
                                    </h4>
                                    {isEditorSelect && (
                                        <>
                                            <form action="">
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-75"
                                                        placeholder="Overwiew"
                                                    />
                                                </div>
                                            </form>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content">
                                                <p>
                                                    At NichoShop, we are
                                                    committed to providing our
                                                    members with a safe place to
                                                    sell branded products on
                                                    NichoShop, that's why we
                                                    give opportunity of the
                                                    owners of intellectual
                                                    property rights to create
                                                    own pages where they give
                                                    information about the
                                                    brand's products and legal
                                                    positions. The owners of
                                                    intellectual property rights
                                                    are solely responsible for
                                                    the content on their pages.
                                                    Please contact the owners of
                                                    the intellectual property
                                                    rights directly if you have
                                                    questions. No all owners of
                                                    intellectual property rights
                                                    work with NichoShop to
                                                    contribute their own page,
                                                    so the list of brands is not
                                                    comprehensive.
                                                </p>
                                                <p>
                                                    If you are a verified owner
                                                    of the intellectual property
                                                    rights and would like
                                                    NichoShop to post a free
                                                    profile page for you,
                                                    contact ipp@nichoshop.com
                                                    for more information and to
                                                    begin the process to joining
                                                    the verified owners of
                                                    intellectual property
                                                    rights.
                                                </p>
                                                <p>
                                                    As one of the most popular
                                                    ecommerce platform in the
                                                    world, NichoShop's global
                                                    portfolio of businesses
                                                    enables of millions of
                                                    people to buy, sell and pay
                                                    online.
                                                </p>
                                                <p>
                                                    If you are the owner of the
                                                    intellectual property rights
                                                    with a page below and have
                                                    concerns about it, please
                                                    contact us at
                                                    <Link to="/">
                                                        ipp@nichoshop.com
                                                    </Link>
                                                    .
                                                </p>
                                            </div>
                                        )}

                                        {isEditorSelect ? (
                                            <>
                                                <div className="ui-content-overview-btn">
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
                                            >
                                                Edit
                                            </button>
                                        )}

                                        <div className="ui-ipp">
                                            <ul>
                                                <li>
                                                    <Link to="/">A</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">B</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">C</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">D</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">E</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">F</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">G</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">H</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">I</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">J</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">K</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">L</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">M</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">O</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">P-Q</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">R</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">S</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">T</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">U</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">V</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">W-Z</Link>
                                                </li>
                                            </ul>

                                            <div className="ui-ipp-content">
                                                <p>A</p>
                                                <div className="ui-ipp-content-list">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Abercrombie &
                                                                Fitch
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Action Mining
                                                                Services Inc.
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Adobe
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                ADT
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Air Force One
                                                                Air Conditioning
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Aircraft
                                                                Technical
                                                                Publishers
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Alaska Airlines
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Aleratec, Inc.
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Alex Perez
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Alfresco Heating
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                ALM Productions
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ui-ipp-content">
                                                <p>B</p>
                                                <div className="ui-ipp-content-list">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                B&M Racing
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                B. C. Broncos
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                B.H.P., Inc. dba
                                                                Nialaya Jewelry
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Bad Monkey
                                                                Productions
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Bally Pinball
                                                                Fun
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ui-ipp-btn">
                                                <button>
                                                    <IoMdAddCircleOutline /> Add
                                                    new
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {searchParams.get("name") ===
                            "avoidingscamsandreportingfraud" && (
                            <>
                                <div className="ui-content-overview">
                                    <h4>Avoiding scams and reporting fraud</h4>
                                    {isEditorSelect && (
                                        <>
                                            <form action="">
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-75"
                                                        placeholder="Overwiew"
                                                    />
                                                </div>
                                            </form>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                            />
                                        </>
                                    )}
                                    <div className="ui-content-overview-body">
                                        {!isEditorSelect && (
                                            <div className="ui-content-overview-body-content ui-scam-content">
                                                <p>
                                                    <b>
                                                        Always communicate on
                                                        NichoShop
                                                    </b>
                                                    All communication between
                                                    users must be carried on
                                                    NichoShop, as emails are
                                                    often important evidence in
                                                    disputes between buyers and
                                                    sellers, so it is extremely
                                                    important that users
                                                    communicate with each other
                                                    only on NikoShop, so that
                                                    users are
                                                </p>
                                                <p>
                                                    <b>
                                                        Always pay on NichoShop
                                                    </b>
                                                    Always pay for your
                                                    purchases with a credit card
                                                    at the NichoShop checkout,
                                                    as this is one of the
                                                    conditions to be protected
                                                    by the NichoShop Buyer
                                                    Protection policy. To
                                                    qualify for NichoShop's
                                                    Buyer Protection, you NEVER
                                                    agree to pay outside of
                                                    NichoShop.
                                                </p>
                                                <p>
                                                    <b>
                                                        To prevent issues with
                                                        the refund
                                                    </b>
                                                    Fraudsters impersonate
                                                    buyers asking for refunds Ц
                                                    always check Messages in My
                                                    NichoShop to validate any
                                                    request before refunding and
                                                    always issue refunds through
                                                    the appropriate NichoShop
                                                    page. NEVER issue refunds
                                                    outside of NichoShop.
                                                </p>
                                                <p>
                                                    <b>
                                                        To protect you from fake
                                                        emails for payment
                                                        received
                                                    </b>
                                                    Don't believe of fake emails
                                                    for payment received and
                                                    always confirm youТve
                                                    received a payment before
                                                    sending an item - check your
                                                    order in Seller Central and
                                                    ensure the status of the
                                                    order is Awaiting dispatch.
                                                </p>
                                                <p>
                                                    <b>
                                                        Tips for recognizing
                                                        fake emails
                                                    </b>
                                                    Fake emails often include
                                                    the NichoShop logo and a
                                                    fake NichoShop address in
                                                    the "From" line (for
                                                    example, "From: NichoShop
                                                    Customer Support"). Just
                                                    because an email looks real
                                                    doesn't mean it is. Here are
                                                    some signs to watch out for:
                                                </p>
                                                <ul>
                                                    <li>
                                                        Fake emails often ask
                                                        you to reply to the
                                                        message with
                                                        confidential
                                                        information. Know that
                                                        NichoShop will never ask
                                                        you to provide
                                                        confidential information
                                                        such as your password,
                                                        credit card, or bank
                                                        number in an email.
                                                    </li>
                                                    <li>
                                                        Fake emails often use
                                                        urgent and threatening
                                                        language and instruct
                                                        you to update your
                                                        NichoShop account
                                                        information or risk your
                                                        account suspension. Be
                                                        aware that all important
                                                        messages about your
                                                        account will also be in
                                                        the Messages tab in My
                                                        NichoShop. NichoShop
                                                        will never ask you to
                                                        provide confidential
                                                        information such as your
                                                        password, credit card,
                                                        or bank number in an
                                                        email.
                                                    </li>
                                                    <li>
                                                        Fake emails might
                                                        include attachments.
                                                        Emails sent by NichoSop
                                                        never include
                                                        attachments. If you
                                                        receive messages with
                                                        attachments, do not open
                                                        it, because quite often
                                                        they contain malware.
                                                    </li>
                                                    <li>
                                                        Fake emails often have a
                                                        generic greeting like
                                                        "Attention NichoSop
                                                        member." Be aware that
                                                        NichoSop's emails always
                                                        greet you by the first
                                                        name you registered on
                                                        your NichoSop account.
                                                    </li>
                                                </ul>
                                                <p>
                                                    To report a fake email that
                                                    looks like it came from
                                                    NichoShop, forward it as an
                                                    attachment to
                                                    spoof@nichoshop.com.
                                                </p>
                                            </div>
                                        )}

                                        {isEditorSelect ? (
                                            <>
                                                <div className="ui-content-overview-btn">
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditorSelect(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setEditorSelect(true)
                                                }
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default TabContent;
