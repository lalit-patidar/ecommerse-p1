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

    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAIL,   

    CLEAR_ERRORS,
 } from "../constants/userConstants";

export const userReducer = (state = {user :{}}, action)=>{
    
    switch(action.type)
    {
            case REGISTER_USER_REQUEST:
            case LOGIN_REQUEST:
            case LOAD_USER_REQUEST:
                return {
                    loading:true,
                    isAuthenticated:false,
                };
            
            case REGISTER_USER_SUCCESS:
              return {
                ...state,
                loading:false,
                signup:true,
                isAuthenticated:true,
                user:action.payload.data,
            };

            case LOGIN_SUCCESS:
              return {
                ...state,
                loading:false,
                signin:true,
                isAuthenticated:true,
                user:action.payload.data,
            };
            case LOAD_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload.data,
                };

            case LOGIN_FAIL:
            case REGISTER_USER_FAIL:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload,
                };
                
            case LOAD_USER_FAIL:
                  return {
                    loading: false,
                    isAuthenticated: false,
                    user: null,
                    error: action.payload,
                  };
            
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                };
            
            default:
                return state;

    }
}


export const forgotPasswordReducer = (state = {}, action) => {
    
  switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
        case EMAIL_PSWD_REQUEST:
        case TEMP_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        
        case TEMP_PASSWORD_SUCCESS:
          return {
            ...state,
            loading: false,
            temp_pwd:true,
            message: action.payload,
          };

          

            case EMAIL_PSWD_SUCCESS:
            return {
              ...state,
              loading: false,
              email_pwd:true,
              message: action.payload.data,
            };

              
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };

        case FORGOT_PASSWORD_FAIL:
        case EMAIL_PSWD_FAIL:
          case TEMP_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
};


export const mobileReducer = (state = { mobile: {} }, action) => {

    switch (action.type) {
      case ADD_MOBILE_REQUEST:
      case ADD_MOBILE_verify_REQUEST:
        case TXT_PSWD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        
      case ADD_MOBILE_SUCCESS:
        return {
          ...state,
          loading: false,
          add_mob:true,
          message: action.payload.data,
        };

      case ADD_MOBILE_verify_SUCCESS:
          return {
            ...state,
            loading: false,
            verify:true,
            messages: action.payload.data,
          };

          case TXT_PSWD_SUCCESS:
            return {
              ...state,
              loading: false,
              txt_pwd:true,
              messages: action.payload.data,
            };


        case ADD_MOBILE_FAIL:
        case ADD_MOBILE_verify_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case TXT_PSWD_FAIL:
        return {
          ...state,
          loading: false,
          errors: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
};


 
export const EmailReducer = (state = { email: {} }, action) => {

    switch (action.type) {
      case EMAIL_verify_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        
      case EMAIL_verify_SUCCESS:
        return {
          ...state,
          loading: false,
          email_verify:true,
          message: action.payload.data,
        };

        case EMAIL_verify_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
};



export const AddressReducer = (state = { address: [] }, action) => {

  switch (action.type) {
    case ADD_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addr:true,
        add_addr: action.payload.data,
      };

      case ADD_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
