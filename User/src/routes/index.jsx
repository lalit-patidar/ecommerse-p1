import { Route, Routes } from "react-router-dom";
import AddMobileNumber from "../pages/Authentication/AddMobileNumber";
import ChangeNewPassword from "../pages/Authentication/ChangeNewPassword";
import ChangeYourName from "../pages/Authentication/ChangeYourName";
import ChangeYourPassword from "../pages/Authentication/ChangeYourPassword";
import ChooseMethod from "../pages/Authentication/ChooseMethod";
import CreateNewPassword from "../pages/Authentication/CreateNewPassword";
import JoinVerify from "../pages/Authentication/JoinVerify";
import Registration from "../pages/Authentication/Registration";
import SignIn from "../pages/Authentication/SignIn";
import SingleUseCode from "../pages/Authentication/SingleUseCode";
import TextATemporaryPassword from "../pages/Authentication/TextATemporaryPassword";
import VerifyItsYouEmail from "../pages/Authentication/VerifyItsYouEmail";
import VerifyItsYouPhone from "../pages/Authentication/VerifyItsYouPhone";
import Welcome from "../pages/Authentication/Welcome";
import HomePage from "../pages/HomePage";
import RecentlyViewedItems from "../pages/HomePage/RecentlyViewedItems";
import TodaysDeals from "../pages/HomePage/TodaysDeals";
import CheckOut from "../pages/ListingDetails/CheckOut";
import ShopingCart from "../pages/ListingDetails/ShopingCart";
import Listings from "../pages/Listings/Listings";
import TextATemporaryPasswordMsg from "../pages/Messages/199";
import MyNichoShop from "../pages/MyNichoShop";
import Account from "../pages/MyNichoShop/Account";
import CloseAccount from "../pages/MyNichoShop/Account/CloseAccount";
import CloseRequest from "../pages/MyNichoShop/Account/CloseRequest";
import RequestCancel from "../pages/MyNichoShop/Account/RequestCancel";
import RequestProcess from "../pages/MyNichoShop/Account/RequestProcess";
import Addresses from "../pages/MyNichoShop/Addresses";
import Bidding from "../pages/MyNichoShop/Bidding";
import BrowseHelp from "../pages/MyNichoShop/HelpContact/BrowseHelp";
import CallUs from "../pages/MyNichoShop/HelpContact/CallUs";
import ContactUs from "../pages/MyNichoShop/HelpContact/ContactUs";
import EmailUs from "../pages/MyNichoShop/HelpContact/EmailUs";
import SendUsDocumentation from "../pages/MyNichoShop/HelpContact/SendUsDocumentation";
import Messages from "../pages/MyNichoShop/Messages";
import Order from "../pages/MyNichoShop/Purchases/Order";
import PurchaseClaim from "../pages/MyNichoShop/Purchases/PurchaseClaim";
import PurchaseList from "../pages/MyNichoShop/Purchases/PurchaseList";
import PurchaseOpen from "../pages/MyNichoShop/Purchases/PurchaseOpen";
import SellerCentralOrdersClaims from "../pages/MyNichoShop/Purchases/SellerCentralClaim/SellerCentralOrdersClaims";
import SellerCentral from "../pages/MyNichoShop/SellerCentral";
import ContactBuyer from "../pages/MyNichoShop/SellerCentral/ContactBuyer";
import SellerCentralOrder from "../pages/MyNichoShop/SellerCentral/Order";
import InTransit from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/InTransit";
import NotYetPaid from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/NotYetPaid";
import NotYetSheppid from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/NotYetSheppid";
import OrderDetails from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/OrderDetails";
import OrderInvoice from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/OrderInvoice";
import ViewDetails from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/ViewDetails";
import ProductInfo from "../pages/MyNichoShop/SellerCentral/ProductInfo";
import ConfirmShipment from "../pages/MyNichoShop/SellerCentral/Shipment";
import WatchList from "../pages/MyNichoShop/WatchList";

const RootRoute = () => {
    return (
        <>
            <Routes>
                {/* 
                    HomePage > ./
                    HomePage > recently-viewed-items
                    HomePage > todays-deals
                */}

                <Route path="/" element={<HomePage />} />
                <Route
                    path="/recently-viewed-items"
                    element={<RecentlyViewedItems />}
                />
                <Route path="/todays-deals" element={<TodaysDeals />} />

                {/* 
                    Authentication > registration
                    Authentication > signin
                    Authentication > single-use-code
                    Authentication > text-a-temporary-password
                    Messages > text-a-temporary-password-msg (199 page)
                    Authentication > verify-its-you-email
                    Authentication > verify-its-you-phone
                    Authentication > change-new-password
                    Authentication > change-your-name
                    Authentication > change-your-password
                */}

                <Route path="/registration" element={<Registration />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/single-use-code" element={<SingleUseCode />} />
                <Route
                    path="/text-a-temporary-password"
                    element={<TextATemporaryPassword />}
                />
                <Route
                    path="/text-a-temporary-password-msg"
                    element={<TextATemporaryPasswordMsg />}
                />
                <Route
                    path="/verify-its-you-email"
                    element={<VerifyItsYouEmail />}
                />
                <Route
                    path="/verify-its-you-phone"
                    element={<VerifyItsYouPhone />}
                />
                <Route
                    path="/change-new-password"
                    element={<ChangeNewPassword />}
                />

                <Route path="/change-your-name" element={<ChangeYourName />} />
                <Route
                    path="/change-your-password"
                    element={<ChangeYourPassword />}
                />
                <Route
                    path="/add-mobile-number"
                    element={<AddMobileNumber />}
                />
                <Route path="/join-verify" element={<JoinVerify />} />
                <Route path="/choose-method" element={<ChooseMethod />} />
                <Route
                    path="/create-new-password"
                    element={<CreateNewPassword />}
                />
                <Route path="/welcome" element={<Welcome />} />

                {/* 
                    MyNichoShop > mynichoshop
                    MyNichoShop > bidding
                    MyNichoShop > watchlist
                    MyNichoShop > purchases > order
                    MyNichoShop > addresses
                    MyNichoShop > messages
                    MyNichoShop > sellercentral
                    MyNichoShop > sellercentral > order
                    MyNichoShop > sellercentral > order > not-yet-paid
                    MyNichoShop > sellercentral > order > order-details
                    MyNichoShop > sellercentral > order > in-transit
                    MyNichoShop > sellercentral > order > view-details
                    MyNichoShop > sellercentral > order > not-yet-sheppid
                    MyNichoShop > sellercentral > order > order-invoice
                    MyNichoShop > sellercentral > product-info
                    MyNichoShop > sellercentral > confirm-shipment
                    MyNichoShop > sellercentral > contact-buyer
                    MyNichoShop > help-content > browse-help
                    MyNichoShop > help-content > contact-us
                    MyNichoShop > help-content > call-us
                    MyNichoShop > help-content > email-us
                    MyNichoShop > help-content > send-us-document
                    MyNichoShop > help-content > email-us
                    MyNichoShop > account
                    MyNichoShop > account > close-account
                    MyNichoShop > account > close-request
                    MyNichoShop > account > request-cancel
                    MyNichoShop > account > request-process
                    MyNichoShop > purchase > seller-central-order-claims
                    MyNichoShop > purchase > purchase-claim
                    MyNichoShop > purchase > purchase-list
                    MyNichoShop > purchase > purchase-open
                */}

                <Route path="/mynichoshop" element={<MyNichoShop />} />
                <Route path="/bidding" element={<Bidding />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/purchases/order" element={<Order />} />
                <Route path="/addresses" element={<Addresses />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/sellercentral" element={<SellerCentral />} />
                <Route
                    path="/sellercentral/order"
                    element={<SellerCentralOrder />}
                />
                <Route
                    path="/sellercentral/order/not-yet-paid"
                    element={<NotYetPaid />}
                />
                <Route
                    path="/sellercentral/order/order-details"
                    element={<OrderDetails />}
                />
                <Route
                    path="/sellercentral/order/in-transit"
                    element={<InTransit />}
                />
                <Route
                    path="/sellercentral/order/view-details"
                    element={<ViewDetails />}
                />
                <Route
                    path="/sellercentral/order/not-yet-sheppid"
                    element={<NotYetSheppid />}
                />
                <Route
                    path="/sellercentral/order/order-invoice"
                    element={<OrderInvoice />}
                />
                <Route
                    path="/sellercentral/product-info"
                    element={<ProductInfo />}
                />
                <Route
                    path="/sellercentral/confirm-shipment"
                    element={<ConfirmShipment />}
                />
                <Route
                    path="/help-content/contact-buyer"
                    element={<ContactBuyer />}
                />
                <Route
                    path="/help-content/browse-help"
                    element={<BrowseHelp />}
                />
                <Route
                    path="/help-content/contact-us"
                    element={<ContactUs />}
                />
                <Route path="/help-content/call-us" element={<CallUs />} />
                <Route path="/help-content/email-us" element={<EmailUs />} />
                <Route
                    path="/help-content/send-us-document"
                    element={<SendUsDocumentation />}
                />
                <Route path="/account" element={<Account />} />
                <Route
                    path="account/close-account"
                    element={<CloseAccount />}
                />
                <Route
                    path="account/close-request"
                    element={<CloseRequest />}
                />
                <Route
                    path="account/request-cancel"
                    element={<RequestCancel />}
                />
                <Route
                    path="account/request-process"
                    element={<RequestProcess />}
                />
                <Route
                    path="purchase/seller-central-order-claims"
                    element={<SellerCentralOrdersClaims />}
                />
                <Route
                    path="purchase/purchase-claim"
                    element={<PurchaseClaim />}
                />
                <Route
                    path="purchase/purchase-list"
                    element={<PurchaseList />}
                />
                <Route
                    path="purchase/purchase-open"
                    element={<PurchaseOpen />}
                />

                {/* 
                    ListOfListign
                */}

                <Route path="/lisft-of-listing" element={<Listings />} />

                {/* 
                    ListingDetails > shoping-card 
                    ListingDetails > checkout
                */}
                <Route path="/shoping-cart" element={<ShopingCart />} />
                <Route path="/checkout" element={<CheckOut />} />

                {/* 
                    random
                */}
            </Routes>
        </>
    );
};

export default RootRoute;