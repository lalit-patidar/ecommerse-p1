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

    TEMP_PASSWORD_REQUEST,
    TEMP_PASSWORD_SUCCESS,
    TEMP_PASSWORD_FAIL,

    TXT_PSWD_REQUEST,
    TXT_PSWD_SUCCESS,
    TXT_PSWD_FAIL,  
    
    EMAIL_PSWD_REQUEST,
    EMAIL_PSWD_SUCCESS,
    EMAIL_PSWD_FAIL,   

    
    EMAIL_verify_REQUEST,
    EMAIL_verify_SUCCESS,
    EMAIL_verify_FAIL,

    VERIFY_EMAIL_URL_FAIL,
    VERIFY_EMAIL_URL_SUCCESS,
    VERIFY_EMAIL_URL_REQUEST,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  import axios from "axios";
  import { setStore } from "../helper/storeHelper";

  
const Base_url = "https://stage-api.nichoshop.com/api";

// Login
export const login = (formData) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      };
      const { data } = await axios.post(
        `${Base_url}/user/sign-in`,
        JSON.stringify(formData),
        config
      );
      if(data.code  != 0) {
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });  
      } else {
        dispatch({ type: LOGIN_FAIL, payload: data });  
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
};
  
// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      };

      const {data} = await axios.post(
        `${Base_url}/sign-up`,
        JSON.stringify(userData),
        config
      );

      if(data.code  != 0) {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data });  
      } else {
        dispatch({ type: REGISTER_USER_FAIL, payload: data });  
      }
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.error,
      });
    }
};

export const VerifyUsingEmailURL = (d) => async (dispatch) => {
    try {
      dispatch({ type: VERIFY_EMAIL_URL_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const {data} = await axios.post(
        `${Base_url}/sign-up/confirm`,
        JSON.stringify(d),
        config
      );

      if(data.code  != 0) {
        dispatch({ type: VERIFY_EMAIL_URL_SUCCESS, payload: data.data });  
        setStore('signup_data',data.data);
        setStore("_userLogin",data.data);
      } else {
        dispatch({ type: VERIFY_EMAIL_URL_FAIL, payload: data });

      }
    } catch (error) {
      dispatch({
        type: VERIFY_EMAIL_URL_FAIL,
        payload: error,
      });
    }
};


// Email verification
export const ResendEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.post(
      `${Base_url}/signup/resend-email`,
      email,
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
export const forgotPassword = (email,getceptcha) => async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const {data} = await axios.post (
        `${Base_url}/user/forgot-password/check`,
        JSON.stringify({username:email,recaptcha:getceptcha}),
        config
      );
      if(data.code == 1) {
        dispatch({ 
        type: FORGOT_PASSWORD_SUCCESS, 
        payload: data.data});
      } else {
        dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: data
      });
      }
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.error,
      });
    }
};


// text temp password
export const TempPassword = (phone,getceptcha) => async (dispatch) => {
  try {
    dispatch({ type: TEMP_PASSWORD_REQUEST });
    const data = await axios.get(
      `${Base_url}/login/check-user?user=${phone}&greptcha=${getceptcha}`,
    );
    dispatch({ type: TEMP_PASSWORD_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: TEMP_PASSWORD_FAIL, payload: error.response.data.error });
  }
};

 
// text Email SUC
export const EmailSuc = (email) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_PSWD_REQUEST });

    const data = await axios.post(
      `${Base_url}/login/get-suc-email?email=${email}`,
    );
    dispatch({ 
        type: EMAIL_PSWD_SUCCESS, 
        payload: data 
    });
    
  } catch (error) {
    dispatch({ 
        type: EMAIL_PSWD_FAIL, 
        payload: error.response.data.error });
  }
};


// verify text Email SUC
export const VerifyEmailSuc = (datas) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_verify_REQUEST });
    const data = await axios.post(
      `${Base_url}/login/confirm-suc?suc_type=${datas.suc_type}&suc=${datas.suc}`,
    );
    dispatch({ type: EMAIL_verify_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EMAIL_verify_FAIL, payload: error.response.data.error });
  }
};

// Text phone SUC
export const TextSuc = (phones) => async (dispatch) => {
  try {
    dispatch({ type: TXT_PSWD_REQUEST });
    const data = await axios.post(
      `${Base_url}/login/get-suc-email?email=${phones}`,
    );

    dispatch({ type: TXT_PSWD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TXT_PSWD_FAIL, payload: error.response.data.error });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};