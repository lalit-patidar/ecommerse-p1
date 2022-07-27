import authReducer from "./authReducer";
import hideSearchBarReducer from "./hideSearchBar";
import showNotifReducer from "./showNotif";
import MNSPurchases from "./MNSPurchases";
import MNSMessages from "./MNSMessages";
import MNSClaim from "./MNSClaim";
import { combineReducers } from "redux";
import { AddressReducer, EmailReducer, ForgotPasswordReducer, MobileReducer, MobileVerifyReducer, UserReducer } from "./userReducers";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";


// const persistConfig={
//   key:'root',
//   storage,
//   //whitelist:['user','forgotPassword','mobile','email','address','otp']
//   whitelist:[]
// }

const allReducers = combineReducers({
  user : UserReducer,
  forgotPassword:ForgotPasswordReducer,
  mobile:MobileReducer,
  email:EmailReducer,
  address:AddressReducer,
  otp:MobileVerifyReducer,
  
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
//export default persistReducer(persistConfig,allReducers);
