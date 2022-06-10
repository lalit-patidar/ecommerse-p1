import {
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SET_MESSAGE,
    SET_TEMPORARY_MESSAGE,
    CLEAR_TEMPORARY_MESSAGE,
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
                dispatch({
                    type : SET_MESSAGE,
                    payload : 'NO',
                })
            }
            return Promise.resolve();
        }
    )
}



export const temporary = (username) => (dispatch) => {
    
    return AuthService.temporary(username).then(
        (data) => {
            if (data.status == 200 && data.data == 'OK') {
                dispatch({
                    type : SET_TEMPORARY_MESSAGE,
                    payload : data.data,
                })
            } else{
                dispatch({
                    type : CLEAR_TEMPORARY_MESSAGE,
                    payload : 'NO',
                })
            }
            return Promise.resolve();
        }
    )
}