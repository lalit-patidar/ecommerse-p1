import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    ADD_MOBILE_REQUEST,
    ADD_MOBILE_SUCCESS,
    ADD_MOBILE_FAIL,  
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  import axios from "axios";
  
const Base_url = "https://stage-api.nichoshop.com/api/v1";

// Login
export const login = (formData) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      console.log(formData);
      const config = {headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Access-Control-Allow-Origin": "*",
                          } 
                      };
      //const config = { headers: { "Content-Type": "multipart/form-data" } };

      const data = await axios.post(
        `${Base_url}/login`,
        formData,
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
};
  
// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      
      const config = { headers: { "Content-Type": "application/json" } };
      //const config = { headers: { "Content-Type": "multipart/form-data" } };
      const data = await axios.post(
        `${Base_url}/signup`,
        userData,
        config
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.error,
      });
    }
};


  
  // Forgot Password
  export const forgotPassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const data = await axios.post(
        `${Base_url}/signup`,
        email,
        config
      );
  
      dispatch({ 
        type: FORGOT_PASSWORD_SUCCESS, 
        payload: data.message });

    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };



    // Load User
  export const loadUser = (user,greptcha) => async (dispatch) => {
      try {
        dispatch({ type: LOAD_USER_REQUEST });
    
        const data = await axios.get(
          `${Base_url}/login/check-user?user=${user}&greptcha=${greptcha}`,
        );
    
        dispatch({ type: LOAD_USER_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
      }
};
 

// Add mobile no
export const AddMobile = (phone) => async (dispatch) => {
      try {
        dispatch({ type: ADD_MOBILE_REQUEST });
    
        const data = await axios.post(
          `${Base_url}/login/add-phone?phone=${phone}`,
        );
    
        dispatch({ type: ADD_MOBILE_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_MOBILE_FAIL, payload: error.response.data.error });
      }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};