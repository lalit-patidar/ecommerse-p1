import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import ProductImg from "./../../../assets/product-img/product-img-01.png";

const ProductInfo = () => {
    const leftImg = useRef();
    const [getSelectedImg, setSelectedImg] = useState([]);
    const [getAllProduct, setGetAllProduct] = useState([
        {
            id: 1,
            img: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            img: "https://picsum.photos/200/400",
        },
        {
            id: 3,
            img: "https://picsum.photos/200/500",
        },
        {
            id: 4,
            img: "https://picsum.photos/200/600",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/700",
        },
        {
            id: 6,
            img: "https://picsum.photos/200/800",
        },
    ]);

    const selectImgHandler = (i) => {
        getAllProduct.filter((item) => {
            return item.id === i ? setSelectedImg([item]) : null;
        });
    };
    return (
        <>
            <Menu />
            <Container>
                <Row>
                    <Col>
                        <div class="ui-bread-crumb">
                            <a href="/">My NichoShop</a>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                            </svg>
                            <a href="/">Sub-category</a>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                            </svg>
                            <span>
                                Canon EOS 5D Mark 3 Digital SLR Camera Body (MK
                                3DSLR) *NEW* + *3Year Warranty’
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="ui-pi-time">
                            <p>
                                The buyer buyer_username bought this item on 22
                                Jun 2018 12:34 GMT
                            </p>
                            <Link to="/">View order details</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <div className="ui-pi-img-box">
                            <div ref={leftImg} className="ui-pi-left-img">
                                {getAllProduct.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={item.img}
                                            alt="product"
                                            onClick={() => {
                                                selectImgHandler(item.id);
                                            }}
                                        />
                                    );
                                })}
                            </div>
                            <div className="ui-pi-right-img">
                                <img
                                    src={
                                        getSelectedImg.length !== 0
                                            ? getSelectedImg[0].img
                                            : getAllProduct[0].img
                                    }
                                    alt="product"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ProductInfo;
