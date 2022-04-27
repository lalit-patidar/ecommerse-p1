import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
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
      </Switch>
    </Router>
  );
}

export default App;
