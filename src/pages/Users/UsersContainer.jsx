import {
    unfollow,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
} from '../../app/store/reducers/usersReducer'
import React, { useEffect } from 'react'
import Users from './Users'
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress,
    getUsersList,
} from '../../app/store/selectors/usersSelector'
import { compose } from 'redux'
import { connect } from 'react-redux'

const UsersAPIComponent = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentPage])

    let onPageChange = (pageNumber, currentPage) => {
        if (pageNumber !== currentPage)
            props.getUsers(pageNumber, props.pageSize)
    }

    return (
        <>
            <Users
                users={props.users}
                isFetching={props.isFetching}
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                isFollowingProgress={props.isFollowingProgress}
                onPageChange={onPageChange}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowingProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    })
)(UsersAPIComponent)
