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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/mynichoshop" exact component={MyNichoShop} />
                {/* MyNichoShop call component */}
                <Route path="/MNSPurchases" exact component={MNSPurchases} />
                <Route path="/MNSMessages" exact component={MNSMessages} />
                {/* End MyNichoShop */}
                <Route path="/createlisting" exact component={CreateListing} />
                <Route
                    path="/createlistingform"
                    exact
                    component={CreateListingForm}
                />
                <Route path="/" exact component={HomePage} />
                <Route path="/bidding" exact component={Bidding} />
                <Route path="/watchlist" exact component={Watchlist} />
                <Route path="/listings" exact component={Listings} />
                <Route path="/sellercentral" exact component={SellerCentral} />
                <Route path="/productdetail" exact component={Productdetail} />
                <Route path="/user/my-account" exact component={Account} />
                <Route
                    path="/user/close-account"
                    exact
                    component={CloseAccount}
                />
                {/* address page */}
                <Route path="/user/address" exact component={Address} />
                <Route
                    path="/user/address/shipping_view"
                    exact
                    component={Address_Shippig_View}
                />
                <Route
                    path="/user/close-request"
                    exact
                    component={CloseRequest}
                />
                <Route
                    path="/user/close-requeset-cancel"
                    exact
                    component={CloseRequestCancel}
                />
                <Route
                    path="/user/close-requeset-process"
                    exact
                    component={CloseRequestProcess}
                />
                <Route path="/todays-deals" exact component={TodaysDeals} />
                <Route
                    path="/recently-viewed"
                    exact
                    component={RecentlyViewed}
                />
                {/* auth route */}
                <Route path="/user/signup" exact component={SignUp} />
                <Route path="/user/signin" exact component={SignIn} />
                <Route path="/user/welcome" exact component={Welcome} />
                <Route path="/user/add-mobile" exact component={AddMobile} />
                <Route path="/user/mobile/suc-code" exact component={SucCode} />
                <Route
                    path="/user/add-mobile/coninue"
                    exact
                    component={ContinueAddMobile}
                />
                <Route path="/user/temp-pwd" exact component={TempPassword} />
                <Route
                    path="/user/create-new-password"
                    exact
                    component={ChangeNewPassword}
                />
                <Route
                    path="/user/single-user-code"
                    exact
                    component={SingleUserCode}
                />
                <Route path="/user/verify-you" exact component={VerifyYou} />
                <Route
                    path="/user/verify-you-mobile"
                    exact
                    component={VerifyYouMobile}
                />
                <Route
                    path="/user/change-user-name"
                    exact
                    component={ChangeUserName}
                />
                <Route
                    path="/user/change-your-pwd"
                    exact
                    component={ChangeYourPassword}
                />
                <Route
                    path="/user/text-temporary-pwd"
                    exact
                    component={TextTemporaryPassword}
                />
            </Switch>
        </Router>
    );
}

export default App;
