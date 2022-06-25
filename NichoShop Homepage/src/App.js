import "./App.css";
import "./pages/Authentications/authform.scss";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import Bidding from "./pages/Bidding/Bidding";
import Watchlist from "./pages/Watchlist/Watchlist";
import Listings from "./pages/Listings/Listings";
import SellerCentral from "./pages/SellerCentral/SellerCentral";
import Productdetail from "./pages/Productdetail/Productdetail";
import CreateListing from "./pages/SellerCentral/Component/CreateListing/CreateListing";
import CreateListingForm from "./pages/SellerCentral/Component/CreateListing/createlistingform/CreateListingForm";

import Account from "./pages/MyAccount/Account";
import CloseAccount from "./pages/MyAccount/Closeaccount";
import CloseRequest from "./pages/MyAccount/Closerequest";
import CloseRequestCancel from "./pages/MyAccount/Requestcancel";
import CloseRequestProcess from "./pages/MyAccount/Requestprocess";

import { Routes, Route } from "react-router-dom";
import TodaysDeals from "./pages/TodaysDeals/TodaysDeals";
import RecentlyViewed from "./pages/RecentlyViewed/RecentlyViewed";
import SignUp from "./pages/Authentications/signup/SignUp";
import SignIn from "./pages/Authentications/signin/SignIn";
import Welcome from "./pages/Authentications/welcome/Welcome";
import AddMobile from "./pages/Authentications/mobile/AddMobile";
import SucCode from "./pages/Authentications/succode/SucCode";
import ContinueAddMobile from "./pages/Authentications/mobile/ContinueAddMobile";
import TempPassword from "./pages/Authentications/TempPassword";
import CreatePassword from "./pages/Authentications/CreatePassword";
import SingleUserCode from "./pages/Authentications/singleUseCode/SingleUserCode";
import VerifyYou from "./pages/Authentications/VerifyYou";
import VerifyYouMobile from "./pages/Authentications/VerifyYouMobile";
import ChangeNewPassword from "./pages/Authentications/ChangeNewPassword";
import ChangeUserName from "./pages/Authentications/ChangeUserName";
import ChangeYourPassword from "./pages/Authentications/ChangeYourPassword";

import MNSPurchases from "./pages/MyNichoShop/Purchases/index.purchases";
import MNSMessages from "./pages/MyNichoShop/Messages/index.messages";
//Bootstrpa importing
import "bootstrap/dist/css/bootstrap.min.css";

//Address page
import Address from "./pages/Address/Address";
import Address_Shippig_View from "./pages/Address/Address_shipping_view";
import TextTemporaryPassword from "./pages/TextTemporaryPassword/TextTemporaryPassword";
import NotYetPaid from "./pages/SellerCentral/SellerCentralDetails/NotYetPaid";
import SellerCentralOrder from "./pages/SellerCentral/SellerCentralOrder/SellerCentralOrder";
import OrderDetails from "./pages/SellerCentral/SellerCentralDetails/OrderDetails";
import NotYetSheppid from "./pages/SellerCentral/SellerCentralDetails/NotYetSheppid";
import InTransit from "./pages/SellerCentral/SellerCentralDetails/InTransit";
import ViewDetails from "./pages/SellerCentral/SellerCentralDetails/ViewDetails";
import OrderInvoice from "./pages/SellerCentral/SellerCentralDetails/OrderInvoice";
import ProductInfo from "./pages/SellerCentral/ProductInfo/ProductInfo";
import JoinVerify from "./pages/Authentications/JoinVerify";
import ConfirmShipment from "./pages/SellerCentral/Shipment/ConfirmShipment";
import ContactBuyer from "./pages/SellerCentral/ContactBuyer/ContactBuyer";
import MessageSent from "./pages/SellerCentral/ContactBuyer/MessageSent/MessageSent";
import ShopingCart from "./pages/ShopingCart/ShopingCart";
import CheckOut from "./pages/CheckOut/CheckOut";
import BrowseHelp from "./pages/HelpContact/BrowseHelp/BrowseHelp";
//User page
import PurchaseClaim1 from "./pages/Claim/Claim";
import PurchaseClaimList1 from "./pages/Claim/List";
import PurchaseClaimOpen1 from "./pages/Claim/Open";

function App() {
  return (
    <Routes>
      {/* 
                - / (home page)
            */}
      <Route path="/" element={<HomePage />} />
      {/* 
                - all pages (random pages)
            */}
      <Route path="/mynichoshop" element={<MyNichoShop />} />
      <Route path="/MNSPurchases" element={<MNSPurchases />} />
      <Route path="/MNSMessages" element={<MNSMessages />} />
      <Route path="/createlisting" element={<CreateListing />} />
      <Route path="/createlistingform" element={CreateListingForm} />
      <Route path="/bidding" element={<Bidding />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/sellercentral" element={<SellerCentral />} />
      <Route path="/productdetail" element={<Productdetail />} />
      <Route path="/user/my-account" component={<Account />} />
      <Route path="/user/close-account" element={<CloseAccount />} />
      {/* 
                - /signup (sign up page)
                - /signin (sign in page)
                - /join/mail-activation (join verify page)
                - /text-temporary-pwd (text temporary password page)
                - /change-your-pwd (change your password page)
                - /change-user-name (change user name page)
                - /verify-you-mobile (verify your mobile page)
                - /verify-you (verify you page)
                - /single-user-code (sigle user code page)
                - /create-new-password (change your password page)
                - /temp-pwd (tem password page)
                - /continue-add-mobile (continue add mobile password page)
                - /mobile-suc-code (suc code mobile page)
                - /welcome (welcome page)
            */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/join/mail-activation" element={<JoinVerify />} />
      <Route path="/text-temporary-pwd" element={<TextTemporaryPassword />} />
      <Route path="/change-your-pwd" element={<ChangeYourPassword />} />
      <Route path="/change-user-name" element={<ChangeUserName />} />
      <Route path="/verify-you-mobile" element={<VerifyYouMobile />} />
      <Route path="/verify-you" element={<VerifyYou />} />
      <Route path="/single-user-code" element={<SingleUserCode />} />
      <Route path="/create-new-password" element={<ChangeNewPassword />} />
      <Route path="/temp-pwd" element={<TempPassword />} />
      <Route path="/continue-add-mobile" element={<ContinueAddMobile />} />
      <Route path="/mobile-suc-code" element={<SucCode />} />
      <Route path="/add-mobile" element={<AddMobile />} />
      <Route path="/welcome" element={<Welcome />} />

      {/* 
            all address pages
            */}

      <Route path="/user/address" element={<Address />} />
      <Route
        path="/user/address/shipping_view"
        element={<Address_Shippig_View />}
      />
      <Route path="/user/close-request" element={<CloseRequest />} />
      <Route
        path="/user/close-requeset-cancel"
        element={<CloseRequestCancel />}
      />
      <Route
        path="/user/close-requeset-process"
        element={<CloseRequestProcess />}
      />
      <Route path="/todays-deals" element={<TodaysDeals />} />
      <Route path="/recently-viewed" element={<RecentlyViewed />} />

      {/* 
                - /seller-central/order (order paid page)
                - /seller-central/details-not-yet-paid (order details not yet paid page)
                - /seller-central/order-details (order details page)
                - /seller-central/order-details-not-yet-shipped (order details not yet shipped page)
                - /seller-central/order-details-intransit (order intransit page)
                - /seller-central/order-invoice (order invoice page)
                - /seller-central/order-view-details (view details page)
                - /seller-central/order-product-info (product info page)
                - /seller-central/confirm-shipment (confirm shipment info page)
                - /seller-central/contact-buyer (contact buyer page)
                - /seller-central/contact-buyer-msg (contact buyer success page)
            */}
      <Route path="/seller-central/order" element={<SellerCentralOrder />} />
      <Route
        path="/seller-central/details-not-yet-paid"
        element={<NotYetPaid />}
      />
      <Route path="/seller-central/order-details" element={<OrderDetails />} />
      <Route
        path="/seller-central/order-details-not-yet-shipped"
        element={<NotYetSheppid />}
      />
      <Route
        path="/seller-central/order-details-intransit"
        element={<InTransit />}
      />
      <Route path="/seller-central/order-invoice" element={<OrderInvoice />} />
      <Route
        path="/seller-central/order-view-details"
        element={<ViewDetails />}
      />
      <Route
        path="/seller-central/order-product-info"
        element={<ProductInfo />}
      />
      <Route
        path="/seller-central/confirm-shipment"
        element={<ConfirmShipment />}
      />
      <Route path="/seller-central/contact-buyer" element={<ContactBuyer />} />
      <Route
        path="/seller-central/contact-buyer-msg"
        element={<MessageSent />}
      />
      {/* 
                - /shoping-cart (shoping cart page)
                - /checkout (checkout page)
            */}
      <Route path="/shoping-cart" element={<ShopingCart />} />

      <Route path="/user/purchases/claims" element={<PurchaseClaim1 />} />
      <Route
        path="/user/purchases/claims/list"
        element={<PurchaseClaimList1 />}
      />
      <Route
        path="/user/purchases/claims/open"
        element={<PurchaseClaimOpen1 />}
      />

      <Route path="/checkout" element={<CheckOut />} />

      {/* - /help-contact/browse-help (browse help page) */}
      <Route path="/help-contact/browse-help" element={<BrowseHelp />} />
    </Routes>
  );
}

export default App;
