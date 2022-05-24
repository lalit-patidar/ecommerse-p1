import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import Bidding from "./pages/Bidding/Bidding";
import Watchlist from "./pages/Watchlist/Watchlist";

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
      </Switch>
    </Router>
  );
}

export default App;
