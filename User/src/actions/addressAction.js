import axios from "axios";
import {
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAIL,   

    CLEAR_ERRORS,
  } from "../constants/userConstants";


const Base_url = "https://stage-api.nichoshop.com/api/v1";

// Add Address
export const AddAddress = (userData) => async (dispatch) => {
    try {
      dispatch({ 
        type: ADD_ADDRESS_REQUEST 
        });
  
      const config = { headers: { "Content-Type": "application/json" } };
      //const config = { headers: { "Content-Type": "multipart/form-data" } };
      const data = await axios.post(
        `${Base_url}/address`,
        userData,
        config
      );

      dispatch({ 
        type: ADD_ADDRESS_SUCCESS, 
        payload: data 
    });

    } catch (error) {
      dispatch({
        type: ADD_ADDRESS_FAIL,
        payload: error.response.data.error,
      });
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};