import {
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    TEMPORARY_REQUEST_FAIL,
    TEMPORARY_REQUEST_SUCCESS,
} from '../actions/types';

const admin = JSON.parse(localStorage.getItem('admin'));

const initialState = admin ? { isLoggedIn: true, admin } : { isLoggedIn: false, admin: null };
export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            }
            break;
        case SIGNIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                admin: null,
            }
            break;
        case TEMPORARY_REQUEST_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            }
            break;
        case TEMPORARY_REQUEST_FAIL:
            return {
                ...state,
                isLoggedIn :false,
            }
            break;
        default:
            return state;
            break;
    }
}