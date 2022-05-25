import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import Bidding from "./pages/Bidding/Bidding";
import Watchlist from "./pages/Watchlist/Watchlist";
import SellerCentral from "./pages/SellerCentral/SellerCentral";
import CreateListing from "./pages/CreateListing/CreateListing";
import CreateListingForm from "./pages/CreateListing/createlistingform/CreateListingForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>

    <Router>
      <Switch>
        <Route path="/mynichoshop" exact component={MyNichoShop} />
        <Route path="/" exact component={HomePage} />
        <Route path="/bidding" exact component={Bidding} />
        <Route path="/watchlist" exact component={Watchlist} />
        <Route path="/sellercentral" exact component={SellerCentral} />
        <Route path="/createlisting" exact component={CreateListing} />
        <Route path="/createlistingform" exact component={CreateListingForm} />
      </Switch>
    </Router>
  );
}

export default App;
