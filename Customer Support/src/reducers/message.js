import { CHECK_MESSAGE, FLAG_MESSAGE } from '../actions/types';

const initialState = {
    messages: [
        { id: 1, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 2, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_0", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 3, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 4, flagged: false, important: false, replied: false, location: "Inbox", unread: true, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 5, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_2", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 6, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 7, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 8, flagged: false, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 9, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_1", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 10, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 11, flagged: false, important: false, replied: false, location: "Inbox", unread: false, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 12, flagged: false, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 13, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 14, flagged: true, important: true, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 15, flagged: false, important: true, replied: false, location: "Inbox", unread: true, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 16, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 17, flagged: true, important: false, replied: true, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 18, flagged: false, important: true, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 19, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_3", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 20, flagged: false, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 21, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 22, flagged: true, important: false, replied: true, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 23, flagged: false, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 24, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 25, flagged: true, important: true, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_4", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 26, flagged: false, important: false, replied: false, location: "Inbox", unread: false, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 27, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 28, flagged: true, important: false, replied: false, location: "Inbox", unread: true, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 29, flagged: false, important: false, replied: false, location: "Inbox", unread: true, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 30, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 31, flagged: true, important: true, replied: true, location: "Inbox", unread: true, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 32, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 33, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 34, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 35, flagged: true, important: false, replied: true, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 36, flagged: true, important: false, replied: true, location: "Inbox", unread: false, from: "member", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 37, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 38, flagged: true, important: false, replied: false, location: "Inbox", unread: false, from: "support agent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 39, flagged: true, important: false, replied: true, location: "Sent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 40, flagged: true, important: true, replied: false, location: "Sent", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 41, flagged: false, important: false, replied: true, location: "Sent", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 42, flagged: false, important: true, replied: false, location: "Sent", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 43, flagged: true, important: true, replied: true, location: "Sent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 44, flagged: false, important: false, replied: true, location: "Sent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 45, flagged: false, important: true, replied: false, location: "Sent", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) }, { id: 46, flagged: true, important: false, replied: true, location: "Trash", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 47, flagged: true, important: true, replied: false, location: "Trash", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 48, flagged: false, important: false, replied: true, location: "Trash", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 49, flagged: false, important: true, replied: false, location: "Trash", fromTo: "member-username", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 50, flagged: true, important: true, replied: true, location: "Trash", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 51, flagged: false, important: false, replied: true, location: "Trash", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) },
        { id: 52, flagged: false, important: true, replied: false, location: "Trash", fromTo: "CS_12", subject: "Transfered Chat session-CH123456789", date: new Date(2022, 2, 3, 12, 23, 34) }
    ],
    folders: {
        folderNames: [],
        messages: []
    }
};

function messageReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FLAG_MESSAGE:
            return ({
                ...state,
                messages: state.messages.map((message) => ({
                    ...message,
                    flagged: (message.id == payload.id ? !message.flagged : message.flagged)
                }))
            })
        default:
            return state;
    }
}

export default messageReducer;