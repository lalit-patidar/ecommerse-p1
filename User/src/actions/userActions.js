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
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    ADD_MOBILE_REQUEST,
    ADD_MOBILE_SUCCESS,
    ADD_MOBILE_FAIL,  
    ADD_MOBILE_verify_REQUEST,
    ADD_MOBILE_verify_SUCCESS,
    ADD_MOBILE_verify_FAIL ,  
    TXT_PSWD_REQUEST,
    TXT_PSWD_SUCCESS,
    TXT_PSWD_FAIL,  
    
    EMAIL_PSWD_REQUEST,
    EMAIL_PSWD_SUCCESS,
    EMAIL_PSWD_FAIL,   

    
    EMAIL_verify_REQUEST,
    EMAIL_verify_SUCCESS,
    EMAIL_verify_FAIL,

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

export const ResendEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    //const config = { headers: { "Content-Type": "multipart/form-data" } };
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
  //export const loadUser = (user,getceptcha) => async (dispatch) => {
  export const loadUser = (user) => async (dispatch) => {
      try {
        dispatch({ type: LOAD_USER_REQUEST });
    
        const data = await axios.get(
          `${Base_url}/login/check-user?user=${user}`,
        );
        
        // const data = await axios.get(
        //   `${Base_url}/login/check-user?user=${user}&greptcha=${getceptcha}`,
        // );

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

 
// text temp password
export const TempPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: TEMP_PASSWORD_REQUEST });

    // console.log(email);
    const data = await axios.get(
      `${Base_url}/login/check-user?user=${email}`,
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

    dispatch({ type: EMAIL_PSWD_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: EMAIL_PSWD_FAIL, payload: error.response.data.error });
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

export const TextSuc = (email) => async (dispatch) => {
  try {
    dispatch({ type: TXT_PSWD_REQUEST });

    const data = await axios.post(
      `${Base_url}/login/get-suc-email?email=${email}`,
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