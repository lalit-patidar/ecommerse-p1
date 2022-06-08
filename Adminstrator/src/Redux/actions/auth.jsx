import {
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SET_MESSAGE,
    TEMPORARY_REQUEST_SUCCESS,
    TEMPORARY_REQUEST_FAIL,
} from './types';
import AuthService from '../services/auth.server';
export const signin = (login, password, grecaptcha) => (dispatch) => {
    
    return AuthService.signin(login, password, grecaptcha).then(
        (data) => {
            if (data.status == 200) {
                dispatch({
                    type : SET_MESSAGE,
                    payload : data.data,
                })
                dispatch({
                    type : SIGNIN_SUCCESS,
                    payload : 'SIGNIN_SUCCESS',
                })
            } else if (data.message == 'NO') {
                dispatch({
                    type : SIGNIN_FAIL,
                    payload : 'NO',
                })
            }
            return Promise.resolve();
        }
    )
}



export const temporary = (name) => (dispatch) => {
    
    return AuthService.temporary(name).then(
        (data) => {
            if (data.status == 200) {
                dispatch({
                    type : SET_MESSAGE,
                    payload : data.data,
                })
                dispatch({
                    type : TEMPORARY_REQUEST_SUCCESS,
                    payload : 'SIGNIN_SUCCESS',
                })
            } else{
                dispatch({
                    type : TEMPORARY_REQUEST_FAIL,
                    payload : 'NO',
                })
            }
            return Promise.resolve();
        }
    )
}