import BreadCrumb from "../../components/BreadCrumb";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/MyNichoShop/footer/Footer";
import { AiOutlinePlus } from "react-icons/ai";
import "./paymentmethod.scss";
import AddNewCard from "./Components/AddNewCard";
import BillingAddress from "./Components/BillingAddress";
import { useState } from "react";

const PaymentMethod = () => {
    // is card selected
    const [isCardSelected, setCardSelected] = useState(false);
    // is bank selected
    const [isBankSelected, setBankSelected] = useState(false);
    return (
        <>
            <Menu />
            <BreadCrumb
                bread={[
                    {
                        path: "/",
                        name: "My NichoShop",
                    },
                    {
                        path: "/payment-method",
                        name: "Payment methods",
                    },
                ]}
            />
            <div className="ui-payment-method-add">
                <div className="container">
                    <div className="ui-payment-method-h">
                        <h2>Payment methods</h2>
                    </div>
                    {!isCardSelected && !isBankSelected && (
                        <div className="ui-payment-method-b">
                            <button onClick={() => setCardSelected(true)}>
                                <AiOutlinePlus /> Add a new card
                            </button>
                            <button onClick={() => setBankSelected(true)}>
                                <AiOutlinePlus /> Add a bank account
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {isCardSelected && (
                <div className="ui-pm-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ui-pm-form-content">
                                    <AddNewCard />
                                    <BillingAddress />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default PaymentMethod;
// "", "Payment methods"
