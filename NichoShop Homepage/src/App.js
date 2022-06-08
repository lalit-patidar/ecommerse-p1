import "./App.css";
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

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/mynichoshop" exact component={MyNichoShop} />
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
            </Switch>
        </Router>
    );
}

export default App;
