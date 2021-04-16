import s from '../../../app/styles/Users/users.module.css'
import { UserIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

export default function User({ isFollowingProgress, user, ...props }) {
    return (
        <div className={s.container}>
            <div className={s.user}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        src={
                            user.photos.small != null
                                ? user.photos.small
                                : 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png'
                        }
                        alt="avatar"
                        className={s.userAvatar}
                    />
                </NavLink>

                {user.followed ? (
                    <button
                        disabled={isFollowingProgress?.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            props.unfollow(user.id)
                        }}
                        className={s.followButton}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={isFollowingProgress?.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            props.follow(user.id)
                        }}
                        className={s.followButton}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div className={s.userInfo}>
                <div className={s.middle}>
                    <div className={s.userName}>{user.name}</div>
                    <p
                        className={
                            !user.status
                                ? `${s.userStatus} ${s.status}`
                                : `${s.userStatus}`
                        }
                    >
                        {!user.status ? 'No status set' : user.status}
                    </p>
                </div>
                <span className={s.userCity}>
                    {' '}
                    <UserIcon />
                    {user.id}
                </span>
            </div>
        </div>
    )
}
