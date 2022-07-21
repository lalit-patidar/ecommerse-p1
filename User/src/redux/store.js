import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../reducers/index";
import thunk from "redux-thunk";
// import logger from 'redux-logger'
//import {persistStore} from "redux-persist";

//const middleware=[thunk, logger];
const middleware=[thunk];

const store=configureStore(
  {
  reducer:allReducers,
  middleware:middleware,
}
);

//const persistor=persistStore(store);

export default store ;
//export {persistor};