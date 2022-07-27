import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import Popper from "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";


/*import "bootstrap/dist/css/bootstrap.min.css";*/
import "bootstrap-icons/font/bootstrap-icons.css";

import "./custom.scss";
import App from "./App";

//import { createStore } from "redux";
//import allReducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/redux/store";

//import {persistor} from "../src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = ReactDOM.createRoot(document.getElementById("root"));


const options={
    timeout:5000,
    position:positions.BOTTOM_CENTER,
    transition:transitions.SCALE,
};

root.render(

        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...options}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                    <App/>
                {/* </PersistGate> */}
            </AlertProvider>
        </Provider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
