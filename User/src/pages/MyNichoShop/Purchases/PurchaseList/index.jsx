import Menu from "../../../../components/menu/Menu";
import Footer from "../PurchaseClaim/Footer";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import "./list.scss";

const PurchaseList = () => {
    return (
        <div className="purchase-claim-list">
            <Menu />
            <Breadcrumb />
            <Content />
            <Footer />
        </div>
    );
};

export default PurchaseList;
