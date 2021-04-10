const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Valeriy' },
        { id: 6, name: 'Victor' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: `How's ur day?` },
        { id: 3, message: 'Ysdo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
        { id: 7, message: 'It' },
        { id: 8, message: 'Actually works' },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 7,
                        message: action.newMessageText,
                    },
                ],
            }
        }

        default:
            return state
    }
}

export const sendMessage = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText,
})

export default dialogsReducer
