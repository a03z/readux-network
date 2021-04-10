import { profileApi, usersApi } from '../../../shared/API/API'
import { updateObjectInArray } from '../../../shared/objectHelpers/objectHelpers'
import { setStatus } from './profileReducer'
const SET_STATUS = 'SET_STATUS'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [],
    status: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: true,
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: false,
                }),
            }
        case SET_STATUS:
            return { ...state, status: action.status }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFetchind
                    ? [...state.isFollowingProgress, action.userId]
                    : [
                          state.isFollowingProgress.filter(
                              (id) => id !== action.userId
                          ),
                      ],
            }
        default:
            return state
    }
}
export const getStatus = (userId) => async (dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))
}
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId,
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId,
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users,
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        const data = await usersApi.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (
    dispatch,
    userId,
    actionCreator,
    apiMethod
) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(
            dispatch,
            userId,
            followSuccess,
            usersApi.userFollow.bind(usersApi)
        )
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(
            dispatch,
            userId,
            unfollowSuccess,
            usersApi.userUnfollow
        )
    }
}

export default usersReducer
