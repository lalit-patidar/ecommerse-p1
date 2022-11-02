import {
    ADD_MOBILE_REQUEST,
    ADD_MOBILE_SUCCESS,
    ADD_MOBILE_FAIL,  
    ADD_MOBILE_verify_REQUEST,
    ADD_MOBILE_verify_SUCCESS,
    ADD_MOBILE_verify_FAIL ,  

    CLEAR_ERRORS,
  } from "../constants/userConstants";
  import axios from "axios";
  
const Base_url = "https://stage-api.nichoshop.com/api";


// Add mobile no
export const AddMobile = (phone) => async (dispatch) => {
    try {
      dispatch({ type: ADD_MOBILE_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
      const data = await axios.post(
        `${Base_url}/user/phone-number`,
        JSON.stringify(phone),
        config
      );
      dispatch({ type: ADD_MOBILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_MOBILE_FAIL, payload: error.response.data.error });
    }
};



// mobile no verify
export const VerifyMobile = (datas) => async (dispatch) => {
try {
  dispatch({ type: ADD_MOBILE_verify_REQUEST });
  const data = await axios.post(
    `${Base_url}/login/confirm-suc?suc_type=${datas.suc_type}&suc=${datas.suc}`,
  );

  dispatch({ type: ADD_MOBILE_verify_SUCCESS, payload: data });
} catch (error) {
  dispatch({ type: ADD_MOBILE_verify_FAIL, payload: error.response.data.error });
}
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};