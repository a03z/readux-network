import React, { useEffect } from 'react'
import Paginator from '../../features/Paginator/Paginator'
import Preloader from '../../features/preloader/Preloader'
import User from './User/User'

let Users = (props) => {
    useEffect(() => {
        document.title = 'Users'
    })
    return (
        <>
            <Paginator
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
                isFetching={props.isFetching}
            />

            {props.isFetching ? (
                <Preloader />
            ) : (
                props.users.map((u) => (
                    <User
                        key={u.id}
                        isFollowingProgress={props.isFollowingProgress}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                ))
            )}
        </>
    )
}
export default Users
