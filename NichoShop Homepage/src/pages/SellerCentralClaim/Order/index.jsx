import { Container, Row, Col } from "react-bootstrap";

import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/Footer";
import Breadcrumb from "./Breadcrumb";
import SellerCentralList from "../Components/SellerCentralList";
import SellerCentralContent from "./SellerCentralContent";

import "./index.scss";

const SellerCentralClaimOrder = () => {
  return (
    <div className="seller-central-orders">
      <Menu />
      <div className="content">
        <Breadcrumb />
        <h1>Seller Central</h1>
        <Container fluid>
          <Row>
            <Col md="2">
              <SellerCentralList />
            </Col>
            <Col md="10">
              <SellerCentralContent />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SellerCentralClaimOrder;
