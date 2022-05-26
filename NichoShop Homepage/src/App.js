import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateListing from "./pages/CreateListing/CreateListing";
import CreateListingForm from "./pages/CreateListing/createlistingform/CreateListingForm";

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
      </Switch>
    </Router>
  );
}

export default App;
