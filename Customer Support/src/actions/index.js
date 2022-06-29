export const selectTopMenuItem = (id) => {
    return {
        type: 'SELECT_TOP_MENU_ITEM',
        payload: {
            id: id
        }
    }
}

export const setCurrentMessageType = (messageType, subMessage) => {
    // console.log(messageType, subMessage)
    return {
        type: 'SET_CURRENT_MESSAGE_TYPE',
        payload: {
            currentMessageType: messageType,
            currentSubMessage: subMessage
        }
    }
}

export const setVisibleSetting = (key) => {
    return {
        type: 'SET_VISIBLE_SETTING',
        payload: {
            visibility: key
        }
    }
}

export const addFilter = (string) => {
    return {
        type: 'ADD_FILTER',
        payload: {
            string: string
        }
    }
}

export const deleteFilter = (id) => {
    return {
        type: 'DELETE_FILTER',
        payload: {
            id: id
        }
    }
}

export const CallSearchBox = () => {
    return {
        type: 'CALL_SEARCH_BOX'
    }
}