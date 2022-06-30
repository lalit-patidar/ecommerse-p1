import { Route, Routes } from "react-router-dom";
import Registration from "../pages/Authentication/Registration";
import SignIn from "../pages/Authentication/SignIn";
import SingleUseCode from "../pages/Authentication/SingleUseCode";
import TextATemporaryPassword from "../pages/Authentication/TextATemporaryPassword";
import VerifyItsYouEmail from "../pages/Authentication/VerifyItsYouEmail";
import VerifyItsYouPhone from "../pages/Authentication/VerifyItsYouPhone";
import HomePage from "../pages/HomePage";
import RecentlyViewedItems from "../pages/HomePage/RecentlyViewedItems";
import TodaysDeals from "../pages/HomePage/TodaysDeals";
import CheckOut from "../pages/ListingDetails/CheckOut";
import ShopingCart from "../pages/ListingDetails/ShopingCart";
import Listings from "../pages/Listings/Listings";
import TextATemporaryPasswordMsg from "../pages/Messages/199";
import MyNichoShop from "../pages/MyNichoShop";
import Addresses from "../pages/MyNichoShop/Addresses";
import Bidding from "../pages/MyNichoShop/Bidding";
import Messages from "../pages/MyNichoShop/Messages";
import Order from "../pages/MyNichoShop/Purchases/Order";
import SellerCentral from "../pages/MyNichoShop/SellerCentral";
import ContactBuyer from "../pages/MyNichoShop/SellerCentral/ContactBuyer";
import BrowseHelp from "../pages/MyNichoShop/SellerCentral/HelpContact/BrowseHelp";
import CallUs from "../pages/MyNichoShop/SellerCentral/HelpContact/CallUs";
import ContactUs from "../pages/MyNichoShop/SellerCentral/HelpContact/ContactUs";
import EmailUs from "../pages/MyNichoShop/SellerCentral/HelpContact/EmailUs";
import SendUsDocumentation from "../pages/MyNichoShop/SellerCentral/HelpContact/SendUsDocumentation";
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
                    Messages > text-a-temporary-passwo-msg (199 page)
                    Authentication > verify-its-you-email
                */}

                <Route path="/registration" element={<Registration />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/text-a-temporary-password"
                    element={<TextATemporaryPassword />}
                />
                <Route path="/single-use-code" element={<SingleUseCode />} />
                <Route
                    path="/text-a-temporary-passwo-msg"
                    element={<TextATemporaryPasswordMsg />}
                />
                <Route
                    path="/text-a-temporary-passwo-msg"
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
                    path="/sellercentral/contact-buyer"
                    element={<ContactBuyer />}
                />
                <Route
                    path="/sellercentral/browse-help"
                    element={<BrowseHelp />}
                />
                <Route
                    path="/sellercentral/contact-us"
                    element={<ContactUs />}
                />
                <Route path="/sellercentral/call-us" element={<CallUs />} />
                <Route path="/sellercentral/email-us" element={<EmailUs />} />
                <Route
                    path="/sellercentral/send-us-document"
                    element={<SendUsDocumentation />}
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
            </Routes>
        </>
    );
};

export default RootRoute;
