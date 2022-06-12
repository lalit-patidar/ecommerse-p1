import authReducer from "./authRegister";
import hideSearchBarReducer from "./hideSearchBar";
import showNotifReducer from "./showNotif";
import MNSPurchases from "./MNSPurchases";
import MNSMessages from "./MNSMessages";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
  hideSearchBar: hideSearchBarReducer,
  showNotif: showNotifReducer,
  purchases: MNSPurchases,
  messages : MNSMessages
});

export default allReducers;
