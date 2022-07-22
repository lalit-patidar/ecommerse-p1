import authReducer from "./authReducer";
import hideSearchBarReducer from "./hideSearchBar";
import showNotifReducer from "./showNotif";
import MNSPurchases from "./MNSPurchases";
import MNSMessages from "./MNSMessages";
import MNSClaim from "./MNSClaim";
import { combineReducers } from "redux";
import { AddressReducer, EmailReducer, forgotPasswordReducer, mobileReducer, userReducer } from "./userReducer";

const allReducers = combineReducers({
  user : userReducer,
  forgotPassword:forgotPasswordReducer,
  mobile:mobileReducer,
  email:EmailReducer,
  address:AddressReducer,
  
  // user: authReducer,
  hideSearchBar: hideSearchBarReducer,
  showNotif: showNotifReducer,
  purchases: MNSPurchases,
  messages: MNSMessages,
  // auth reducer
  auth: authReducer,
  // user-claim reducer
  claim: MNSClaim,
});

export default allReducers;
