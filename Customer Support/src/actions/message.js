import {
    FLAG_MESSAGE
} from './types';

export const flagMessage = (id) => {
    return ({
        type: FLAG_MESSAGE,
        payload: {
            id: id
        }
    })
}
