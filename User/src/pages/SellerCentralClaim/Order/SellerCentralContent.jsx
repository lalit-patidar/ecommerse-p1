import SellerOrdersMenu from "../Components/SellerCentralOrdersMenu";
import SellerOrdersList from "../Components/SellerOrdersList";

const SellerCentralContent = () => {
  return (
    <div className="seller-central-content">
      <h2>Oreders</h2>
      <SellerOrdersMenu />
      <SellerOrdersList />
    </div>
  );
};

export default SellerCentralContent;
