import authReducer from "./authRegister";
import hideSearchBarReducer from "./hideSearchBar";
import showNotifReducer from "./showNotif";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
  hideSearchBar: hideSearchBarReducer,
  showNotif: showNotifReducer,
});

export default allReducers;
