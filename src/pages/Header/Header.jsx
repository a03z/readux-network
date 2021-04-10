import React from 'react'
import { logout } from '../../app/store/reducers/authReducer'
import { CodeIcon, LogoutIcon } from '@heroicons/react/solid'
import s from '../../app/styles/Header/header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function Header(props) {
    const { isAuth, login, currUser } = useSelector((state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        currUser: state.auth.id,
    }))
    const dispatch = useDispatch()

    return (
        <header className={s.header}>
            <CodeIcon className={s.logo} />
            <div className={s.loginBlock}>
                {isAuth ? (
                    <>
                        <NavLink
                            to={`/profile/${currUser}`}
                            className={s.userName}
                        >
                            {login}
                        </NavLink>
                        <button
                            className={s.logoutButton}
                            onClick={() => dispatch(logout())}
                        >
                            <span>Logout</span>
                            <span>
                                <LogoutIcon className={s.logoutIcon} />
                            </span>
                        </button>
                    </>
                ) : (
                    <NavLink to="/login">
                        <button
                            className={s.logoutButton}
                            onClick={() => dispatch(logout())}
                        >
                            <span>Login</span>
                        </button>
                    </NavLink>
                )}
            </div>
        </header>
    )
}
