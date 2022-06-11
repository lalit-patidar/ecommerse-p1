import { SET_MESSAGE, CLEAR_MESSAGE, SET_TEMPORARY_MESSAGE, CLEAR_TEMPORARY_MESSAGE } from './types';

export const setMessage = (message) => ({
    type : SET_MESSAGE,
    payload : message,
})

export const clearMessage = () => ({
    type : CLEAR_MESSAGE,
})

export const setTemporaryMessage = (message) => ({
    type : SET_TEMPORARY_MESSAGE,
    payload : message,
})

export const clearTemporaryMessage = () => ({
    type : CLEAR_TEMPORARY_MESSAGE
})