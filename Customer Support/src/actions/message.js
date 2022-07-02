import {
    FLAG_MESSAGE,
    NEW_FOLDER
} from './types';

export const flagMessage = (id) => {
    return ({
        type: FLAG_MESSAGE,
        payload: {
            id: id
        }
    })
}

export const createNewFolder = (name) => {
    return ({
        type: NEW_FOLDER,
        payload: {
            name: name
        }
    });
}
