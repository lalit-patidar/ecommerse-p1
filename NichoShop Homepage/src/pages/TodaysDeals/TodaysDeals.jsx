import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CategoryCheck from "../../components/CategoryCheck/CategoryCheck";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/MyNichoShop/footer/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { HiViewGrid, HiViewList } from "react-icons/hi";
import { TiThList } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./todaysdeals.scss";
import Uk from "./../../assets/cat-flag/uk.png";
import ProductImg from "./../../assets/product-img/product.png";
import ProductCard from "../../components/ProductCard/ProductCard";

const TodaysDeals = () => {
    // all categories of today's deals
    const [getCategory, setCategory] = useState([
        "Automotive & Motorcycle",
        "Baby",
        "Baby Clothing & Accessories",
        "Beauty",
        "Boys’ Fashion",
        "Camera & Photo",
        "Cell Phones & Accessories",
        "Collectibles & Fine Art",
        "Computers & Accessories",
        "Costumes & Accessories",
    ]);

    // all lagnuages
    const [getLang, setLang] = useState([
        {
            id: 1,
            img: Uk,
            name: "Uk",
            isSelected: true,
        },
        {
            id: 2,
            img: Uk,
            name: "USA",
        },
    ]);

    // is toggled dropdown
    const [isToggled, setToggle] = useState(false);

    const langHandler = () => {
        setToggle(!isToggled);
    };

    const selectLang = (id) => {
        setToggle(false);
        getLang.filter((item) => {
            item.isSelected = false;
            if (item.id === id) {
                item.isSelected = true;
            }
        });
    };

    // view list is toggled
    const [isToggledList, setToggleList] = useState(false);
    const [isSelectedList, setSelectedList] = useState(true);

    const listHandler = () => {
        setToggleList(!isToggledList);
    };

    // product info
    const [getProduct, setProduct] = useState([
        {
            id: 1,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 2,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 3,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 4,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 5,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 6,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 7,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 8,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
    ]);

    return (
        <div>
            <Menu />
            <div className="ui-today-deals-box">
                <>
                    <Row>
                        <Col lg={3}>
                            <div className="ui-todays-deals-left">
                                <h2>Today’s Deals</h2>
                                <h4>Categories</h4>
                                {getCategory.map((item, index) => {
                                    return <CategoryCheck category={item} />;
                                })}
                                <Button>
                                    See More <IoIosArrowDown />
                                </Button>
                            </div>
                            <div className="ui-price-left">
                                <h4>Price</h4>
                                <div className="ui-price-link">
                                    <a href="#">Under $25</a>
                                    <a href="#">$25 to $50</a>
                                    <a href="#">$50 to $100</a>
                                    <a href="#">$100 to $200</a>
                                    <a href="#">$200 & Above</a>
                                </div>
                            </div>
                            <div className="ui-price-left">
                                <h4>Discount</h4>
                                <div className="ui-price-link">
                                    <a href="#">10% Off or More</a>
                                    <a href="#">25% Off or More</a>
                                    <a href="#">50% Off or More</a>
                                    <a href="#">70% Off or More</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="ui-todays-deals-content">
                                <div className="ui-todays-deals-content-head d-flex align-items-center justify-content-between border rounded-top px-3">
                                    <p>
                                        <span>234,567</span> results
                                    </p>
                                    <div className="ui-tdc-box d-flex align-items-center gap-4">
                                        <div className="ui-td-select d-flex align-items-center gap-3">
                                            <p>Sort by:</p>
                                            <Form.Select aria-label="Default select example">
                                                <option>Relevance</option>
                                                <option value="1">
                                                    Price - Low to High
                                                </option>
                                                <option value="1">
                                                    Price - High to Low
                                                </option>
                                                <option value="1">
                                                    Discount - Low to High
                                                </option>
                                                <option value="1">
                                                    Discount - High to Low
                                                </option>
                                            </Form.Select>
                                        </div>
                                        <div className="ui-td-select d-flex align-items-center gap-3">
                                            <p>Shipping to</p>
                                            <div className="ui-td-lang">
                                                {getLang.map((item) => {
                                                    if (
                                                        item.isSelected == true
                                                    ) {
                                                        return (
                                                            <button
                                                                className="form-select"
                                                                onClick={
                                                                    langHandler
                                                                }
                                                            >
                                                                <img
                                                                    src={
                                                                        item.img
                                                                    }
                                                                    alt="flug"
                                                                />
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                            </button>
                                                        );
                                                    }
                                                })}
                                                {isToggled && (
                                                    <div className="ui-td-lang-option">
                                                        {getLang.map(
                                                            (item, index) => {
                                                                return (
                                                                    <button
                                                                        key={
                                                                            index
                                                                        }
                                                                        onClick={() => {
                                                                            selectLang(
                                                                                item.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                item.img
                                                                            }
                                                                            alt="flug"
                                                                        />
                                                                        <span>
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="ui-td-select d-flex align-items-center gap-3">
                                            <p>View</p>
                                            <div className="ui-td-view">
                                                <button
                                                    className="form-select"
                                                    onClick={listHandler}
                                                >
                                                    {isSelectedList ? (
                                                        <TiThList />
                                                    ) : (
                                                        <HiViewGrid />
                                                    )}
                                                </button>

                                                {isToggledList && (
                                                    <div className="ui-td-view-option">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedList(
                                                                    false
                                                                );

                                                                setToggleList(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <HiViewGrid />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedList(
                                                                    true
                                                                );

                                                                setToggleList(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <TiThList />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isSelectedList ? (
                                <>
                                    <div className="ui-td-card-list"></div>
                                </>
                            ) : (
                                <>
                                    <div className="ui-td-card">
                                        {getProduct.map((item, index) => {
                                            return (
                                                <ProductCard
                                                    key={index}
                                                    img={item.productImage}
                                                    title={item.productTitle}
                                                    price={item.productPrice}
                                                    discountPrice={
                                                        item.productDiscountPrice
                                                    }
                                                    discount={
                                                        item.productDiscount
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                            <div className="ui-td-pag-box rounded-bottom d-flex align-items-center justify-content-between">
                                <p>Page 1 of 4</p>
                                <div className="ui-td-pag d-flex align-items-center gap-2">
                                    <button>
                                        <MdKeyboardArrowLeft />
                                    </button>
                                    <div className="ui-td-pag-no">
                                        <button>1</button>
                                        <button className="active">2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <button>
                                        <MdKeyboardArrowRight />
                                    </button>
                                </div>
                                <div className="ui-td-per-page-select d-flex align-items-center gap-2">
                                    <p>Results per page</p>
                                    <Form.Select aria-label="Default select example">
                                        <option>10</option>
                                        <option value="1">15</option>
                                        <option value="2">20</option>
                                        <option value="3">25</option>
                                        <option value="3">30</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            </div>
            <Footer />
        </div>
    );
};

export default TodaysDeals;
