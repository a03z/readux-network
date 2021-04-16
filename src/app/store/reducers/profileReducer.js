import { profileApi } from '../../../shared/API/API'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const GET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_AVATAR = 'SET_AVATAR'

let initialState = {
    posts: [
        {
            id: 1,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.',
            likesCount: 12,
        },
        {
            id: 2,
            message: `Ipsa laborum eveniet eaque reprehenderit vero qui nemo, modi, voluptatum assumenda aliquid neque tenetur!`,
            likesCount: 23,
        },
        {
            id: 3,
            message:
                'Ullam iusto mollitia harum omnis reiciendis quidem delectus. Labore, ullam iusto facilis ut rerum ratione eum tempore fugit illo rem voluptates itaque nemo molestias sunt excepturi! Repellendus eaque officia harum. Aperiam dolor sunt doloremque officiis, quasi harum. Sed, distinctio? Ea ratione magni, mollitia ut incidunt quo voluptates vitae laudantium vero voluptatum repudiandae quasi placeat, ducimus ullam sunt illo. Omnis obcaecati qui eos delectus!',
            likesCount: 7,
        },
        {
            id: 4,
            message: 'Hello world!',
            likesCount: 123,
        },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: action.postMessage,
                        likesCount: 0,
                    },
                ],
            }

        case GET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return { ...state, status: action.status }
        case SET_AVATAR:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            }
        default:
            return state
    }
}

// *Status*
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
}
export const getStatus = (userId) => async (dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))
}
export const updateStatus = (status) => async (dispatch) => {
    await profileApi.updateStatus(status)
    dispatch(setStatus(status))
}

// *Profile of exact user*
export const setUserProfile = (profile) => ({
    type: GET_USER_PROFILE,
    profile,
})
export const getUserProfile = (userId) => async (dispatch) => {
    const res = await profileApi.getProfile(userId)
    dispatch(setUserProfile(res.data))
}
// *Update profile info*

export const submitProfile = (profile) => async (dispatch, getState) => {
    let state = getState()
    const loggedUserId = state.auth.id
    const res = await profileApi.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(loggedUserId))
    }
}

// *Avatar upload*
const setAvatarSuccess = (photos) => {
    return {
        type: SET_AVATAR,
        photos,
    }
}

export const setAvatar = (images) => async (dispatch) => {
    const res = await profileApi.setAvatar(images)
    if (res.data.resultCode === 0) {
        dispatch(setAvatarSuccess(res.data.data.photos))
    }
}

export const addPost = (postMessage) => ({ type: ADD_POST, postMessage })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export default profileReducer
