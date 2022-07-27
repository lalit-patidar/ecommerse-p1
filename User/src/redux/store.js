// import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../reducers/index";
import { } from "redux";
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {persistStore} from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware=[thunk];
const initialState = {} // or in your case:

//const middleware=[thunk,logger];

// const store=configureStore(
//   {
//   reducer:allReducers,
//   middleware:middleware,
// }
// );

const store=createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


// const persistor=persistStore(store);

export default store ;
// export {persistor};