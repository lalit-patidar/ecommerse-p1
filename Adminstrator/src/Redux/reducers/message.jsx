import {SET_MESSAGE, CLEAR_MESSAGE, SET_TEMPORARY_MESSAGE, CLEAR_TEMPORARY_MESSAGE} from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_MESSAGE:
            console.log(payload);
            return {message : payload};
            break;
        case CLEAR_MESSAGE:
            return {message : payload};
            break;
        case SET_TEMPORARY_MESSAGE:
            return {temporaryMessage : payload};
            break;
        case CLEAR_TEMPORARY_MESSAGE:
            return {temporaryMessage : payload};
            break;
        default:
            return state;
            break;
    }
}