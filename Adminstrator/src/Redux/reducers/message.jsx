import {SET_MESSAGE, CLEAR_MESSAGE} from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_MESSAGE:
            console.log(payload);
            return {message : payload};
            break;
        case CLEAR_MESSAGE:
            return {message : ''};
            break;
        default:
            return state;
            break;
    }
}