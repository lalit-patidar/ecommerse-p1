import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Dropdown, Button, Alert } from "react-bootstrap";
import "./sellercentrallisting.scss";
import Select from "react-select";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import SellerCentralListingItem from "./Component/SellerCentralListingItem";
import { ItemList } from './data'
import ProductImg from "./../../../../assets/product-img/product.png";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./Component/DeleteConfirmationModal";
import UpdateConfirmationModal from "./Component/UpdateConfirmationModal";


const SellerCentralListing = () => {
    const timeOption = [
        {
            value: "24-hours",
            label: "Last 24 hours",
        },
        {
            value: "3-days",
            label: "Last 3 days",
        },
        {
            value: "7-days",
            label: "Last 7 days",
        },
        {
            value: "14-days",
            label: "Last 14 days",
        },
        {
            value: "30-days",
            label: "Last 30 days",
        },
        {
            value: "60-days",
            label: "Last 60 days",
        },
        {
            value: "180-days",
            label: "Last 180 days",
        },
    ];

    const searchOption = [
        {
            value: "all-listing",
            label: "All Listing",
        },
        {
            value: "nsln",
            label: "NSLN",
        },
    ];

    const actionOnSelectedOption = [
        {
            value: "",
            label: "None",
        },
        {
            value: "update",
            label: "Update Quantity",
        },
        {
            value: "delete",
            label: "Delete",
        },
    ];

    const [list, setList] = useState(null)
    const [selectedList, setSelectedList] = useState([])
    const [showActionButton, setShowActionButton] = useState(null)
    const [selectedAction, setSelectedAction] = useState("")
    const [success, setSuccess] = useState(null)
    const [showConfrimationModal, setShowConfirmationModal] = useState(false)
    const [itemQuantitySuccess, setItemQuantitySuccess] = useState(false)



    useEffect(() => {
        setList(ItemList)
    }, [ItemList])

    function runDeleteList() {
        const newList = list?.filter(item => (!selectedList.includes(item)))
        setList(newList)
    }
    function runUpdateList(value) {
        const newList = list?.map(item => {
            var found = selectedList.find(obj => obj.id === item.id);
            if (found) {
                // item = Object.assign(item, found);
                item.available = value
            }
            return item;
          });

        setList(newList)
    }

    function handleActionButton(value) {
        if (value !== "") {
            setShowActionButton(true)
            setSelectedAction(value)
        }
        else {
            setShowActionButton(false)
            setSelectedAction("")
        }
    }

    function handleSave() {
        console.log(selectedAction)
        if (selectedList.length > 0) {
            if (selectedAction === "delete") {
                setShowConfirmationModal(true)
            }
            else if (selectedAction === "update") {
                setShowConfirmationModal(true)
            }
        }
    }
    
    function handleFinish(value){
        if(selectedAction === "delete"){
            runDeleteList()
            setShowConfirmationModal(false)
            setSuccess(true)
            setSelectedList([])
        }
        else if(selectedAction === "update"){
            runUpdateList(value)
            setShowConfirmationModal(false)
            setSuccess(true)
        }
    }


    function handleItemSelection(checked, item) {
        console.log("handleItemSelection", checked)
        if (checked) {
            setSuccess(false)
            setSelectedList(prev => (
                [
                    ...prev,
                    item
                ]
            ))
        }
        else if (!checked) {
            setSelectedList(prev => (
                prev.filter(e => {
                    return e.id !== item.id
                })
            ))
        }
    }

    function handleSingleItemQuantity(id, value){
        setList(prev => (
            prev.map(item => {
                if(item.id === id){
                    item.available = value
                    return item
                }
                else{
                    return item
                }

            })
        ))
    }

    useEffect(() => {
        var timer
        if(itemQuantitySuccess){
            timer = setTimeout(() => {
                setItemQuantitySuccess(false)
            }, 5000)
        }

        return () => {
            clearTimeout(timer)   
        }
    }, [itemQuantitySuccess])


    useEffect(() => {
        console.log(selectedList)
    }, [selectedList])

    useEffect(() => {
        console.log(list)
    }, [list])


    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Col>
                        <div className="ui-bread-crumb">
                            <Link to="/">My NichoShop</Link>
                            <IoIosArrowForward />
                            <span>Seller Central</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <div className="ui-scl-left-top">
                            <h2>Seller Central </h2>
                            <button>Create listing</button>
                        </div>
                        <div className="ui-scl-tab">
                            <ul>
                                <li>Overview</li>
                                <li className="active">Listings</li>
                                <li>Orders</li>
                                <li>Shipping labels</li>
                            </ul>
                            <ul>
                                <li>Settings</li>
                                <li>Perfomance</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className="ui-scl-head-name">
                            <p>Listing</p>
                        </div>
                        {
                            success && selectedAction === "delete" ?
                                <Alert variant="success" className="success-message">
                                    <h5>Listings deleted</h5>
                                    <p>You have successfully deleted your listings.</p>
                                </Alert>
                                :
                            success && selectedAction === "update" ?
                                <Alert variant="success" className="success-message">
                                    <h5>Listings Updated</h5>
                                    <p>You have successfully updated your listings.</p>
                                </Alert>
                                :
                                <></>
                        }
                        <div className="ui-scl-tab-filter-box">
                            <div className="ui-scl-head-tab">
                                <Link to='/sellercentral/listing/'>
                                <button>
                                    <span>{list?.length}</span> Active
                                </button>
                                </Link>
                                <button className="active">
                                    <span>0</span> Out of Stock
                                </button>
                                <Link to='/sellercentral/listing/unsold'>
                                    <button>
                                        <span>8</span> Unsold
                                    </button>
                                </Link>
                            </div>
                            <div className="ui-scl-head-filter">
                                <Select options={timeOption} />
                                <div className="ui-scl-search-box">
                                    <div className="ui-scl-search">
                                        <Select options={searchOption} />
                                        <Form.Control
                                            type="text"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Search..."
                                            className="w-100"
                                        />
                                        <button>
                                            <BiSearch />
                                        </button>
                                    </div>
                                    <button>Reset</button>
                                </div>
                            </div>
                            <p>Results: {list?.length}</p>
                        </div>
                        <div className="ui-soc-table-head">
                            <div className="ui-soc-table-head-left">
                                <Form.Check type="checkbox" />
                                <div className="ui-soc-thl-select" >
                                    <Select defaultValue={selectedAction} options={actionOnSelectedOption} onChange={(e) => (handleActionButton(e.value))} />
                                    <svg
                                        width="10"
                                        height="21"
                                        viewBox="0 0 10 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.91016 20.4023C5.15625 20.6484 5.56641 20.6484 5.8125 20.4023L9.53125 16.6836C9.80469 16.4102 9.80469 16 9.53125 15.7539L8.92969 15.125C8.65625 14.8789 8.24609 14.8789 8 15.125L5.34766 17.7773L2.72266 15.125C2.47656 14.8789 2.06641 14.8789 1.79297 15.125L1.19141 15.7539C0.917969 16 0.917969 16.4102 1.19141 16.6836L4.91016 20.4023Z"
                                            fill="#6C757D"
                                        />
                                        <path
                                            d="M5.83984 1.125C5.56641 0.878906 5.15625 0.878906 4.91016 1.125L1.19141 4.84375C0.917969 5.11719 0.917969 5.52734 1.19141 5.77344L1.79297 6.40234C2.06641 6.64844 2.47656 6.64844 2.72266 6.40234L5.375 3.75L8 6.40234C8.24609 6.64844 8.68359 6.64844 8.92969 6.40234L9.55859 5.77344C9.80469 5.52734 9.80469 5.11719 9.55859 4.84375L5.83984 1.125Z"
                                            fill="#6C757D"
                                        />
                                    </svg>
                                </div>
                                {
                                    showActionButton ?
                                        <Button type='button' onClick={handleSave}>Save</Button>
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        <div className="ui-soc-table">
                            {
                                itemQuantitySuccess ?
                                    <Alert variant="success" className="success-message mt-3">
                                        <p>Listing have been updated.</p>
                                    </Alert>
                                    :
                                    <></>
                            }
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Format</th>
                                        <th></th>
                                        <th>Available</th>
                                        <th>Price</th>
                                        <th>Bids</th>
                                        <th>Time Left
                                            <MdOutlineKeyboardArrowDown />
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list?.map(item => (
                                            <SellerCentralListingItem key={item.id} data={item} handleItemSelection={handleItemSelection} handleSingleItemQuantity={handleSingleItemQuantity} itemQuantitySuccess={itemQuantitySuccess} setItemQuantitySuccess={setItemQuantitySuccess} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="ui-soc-table-bottom">
                            <div className="ui-soc-table-head-left">
                                <Form.Check type="checkbox" />
                                <div className="ui-soc-thl-select">
                                    <Select options={actionOnSelectedOption} />
                                    <svg
                                        width="10"
                                        height="21"
                                        viewBox="0 0 10 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.91016 20.4023C5.15625 20.6484 5.56641 20.6484 5.8125 20.4023L9.53125 16.6836C9.80469 16.4102 9.80469 16 9.53125 15.7539L8.92969 15.125C8.65625 14.8789 8.24609 14.8789 8 15.125L5.34766 17.7773L2.72266 15.125C2.47656 14.8789 2.06641 14.8789 1.79297 15.125L1.19141 15.7539C0.917969 16 0.917969 16.4102 1.19141 16.6836L4.91016 20.4023Z"
                                            fill="#6C757D"
                                        />
                                        <path
                                            d="M5.83984 1.125C5.56641 0.878906 5.15625 0.878906 4.91016 1.125L1.19141 4.84375C0.917969 5.11719 0.917969 5.52734 1.19141 5.77344L1.79297 6.40234C2.06641 6.64844 2.47656 6.64844 2.72266 6.40234L5.375 3.75L8 6.40234C8.24609 6.64844 8.68359 6.64844 8.92969 6.40234L9.55859 5.77344C9.80469 5.52734 9.80469 5.11719 9.55859 4.84375L5.83984 1.125Z"
                                            fill="#6C757D"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="ui-soc-table-pagination">
                            <div class="ui-td-pag-box rounded-bottom d-flex align-items-center justify-content-between">
                                <p>Page 1 of 4</p>
                                <div class="ui-td-pag d-flex align-items-center gap-2">
                                    <button>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0V0z"
                                            ></path>
                                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                    <div class="ui-td-pag-no">
                                        <button>1</button>
                                        <button class="active">2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <button>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0V0z"
                                            ></path>
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="ui-td-per-page-select d-flex align-items-center gap-2">
                                    <p>Results per page</p>
                                    <select
                                        aria-label="Default select example"
                                        class="form-select"
                                    >
                                        <option>10</option>
                                        <option value="1">15</option>
                                        <option value="2">20</option>
                                        <option value="3">25</option>
                                        <option value="3">30</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
            {
                showConfrimationModal && selectedAction === "delete" ?
                <DeleteConfirmationModal show={showConfrimationModal} setShow={setShowConfirmationModal} handleFinish={handleFinish} items={selectedList} />
                :
                showConfrimationModal && selectedAction === "update" ?
                <UpdateConfirmationModal show={showConfrimationModal} setShow={setShowConfirmationModal} handleFinish={handleFinish} items={selectedList} />
                :
                <></>
            }
        </div>
    );
};

export default SellerCentralListing;
