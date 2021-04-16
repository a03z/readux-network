import { authApi, securityApi } from '../../../shared/API/API'
import { toggleIsFetching } from './usersReducer'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    logError: false,
    captchaUrl: null, // if null then captcha isnt required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth, logError) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth,
        logError,
    },
})

// thunk creator
export const getAuthUserData = () =>
    // thunk
    async (dispatch) => {
        const res = await authApi.me()
        let { id, email, login } = res.data.data
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
// thunk creator
export const login = (email, password, rememberMe, id, isAuth, captcha) =>
    // thunk
    async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const res = await authApi.login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (res.data.resultCode === 1) {
            dispatch(setAuthUserData(id, email, login, isAuth, true))
        } else if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(toggleIsFetching(false))
    }
// thunk creator
export const logout = () =>
    // thunk
    async (dispatch) => {
        const res = await authApi.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

// captcha
const setCaptchaImage = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: { captchaUrl },
    }
}

const getCaptchaUrl = () => async (dispatch) => {
    const res = await securityApi.getCaptcha()
    dispatch(setCaptchaImage(res.data.url))
}

export default authReducer
