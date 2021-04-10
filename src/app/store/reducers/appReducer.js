import { getAuthUserData } from './authReducer'

const INITIALIZATED_SUCCESS = 'INITIALIZATED_SUCCESS'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZATED_SUCCESS,
})

export const initializeApp = () =>
    // thunk
    (dispatch) => {
        Promise.all([dispatch(getAuthUserData())]).then(() => {
            dispatch(initializedSuccess())
        }) // getting user data
    }

export default appReducer
