import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import Bidding from "./pages/Bidding/Bidding";
import Watchlist from "./pages/Watchlist/Watchlist";
import Listings from "./pages/Listings/Listings";
import SellerCentral from "./pages/SellerCentral/SellerCentral";
import CreateListing from "./pages/CreateListing/CreateListing";
import CreateListingForm from "./pages/CreateListing/createlistingform/CreateListingForm";
import Productdetail from "./pages/Productdetail/Productdetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>

    <Router>
      <Switch>
        <Route path="/mynichoshop" exact component={MyNichoShop} />
        <Route path="/createlisting" exact component={CreateListing} />
        <Route path="/createlistingform" exact component={CreateListingForm} />
        <Route path="/" exact component={HomePage} />
        <Route path="/bidding" exact component={Bidding} />
        <Route path="/watchlist" exact component={Watchlist} />
        <Route path="/listings" exact component={Listings} />
        <Route path="/sellercentral" exact component={SellerCentral} /> 
        <Route path="/productdetail" exact component={Productdetail} />        
      </Switch>
    </Router>
  );
}

export default App;
