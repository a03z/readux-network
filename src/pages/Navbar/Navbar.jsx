import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../../app/styles/Navbar/navbar.module.css'
import {
    ChatIcon,
    CogIcon,
    MusicNoteIcon,
    NewspaperIcon,
    UserIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import { useMediaQuery } from 'react-responsive'

export default function Navbar(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' })
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink
                        activeClassName={s.active}
                        to="/profile"
                        id="profile"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>Profile</span>
                        ) : (
                            <span className={s.navIcon}>
                                <UserIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={s.active}
                        to="/dialogs"
                        id="dialogs"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>Dialogs</span>
                        ) : (
                            <span className={s.navIcon}>
                                <ChatIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={s.active}
                        to="/news"
                        id="news"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>News</span>
                        ) : (
                            <span className={s.navIcon}>
                                <NewspaperIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={s.active}
                        to="/music"
                        id="music"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>Music</span>
                        ) : (
                            <span className={s.navIcon}>
                                <MusicNoteIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={s.active}
                        to="/users"
                        id="users"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>Users</span>
                        ) : (
                            <span className={s.navIcon}>
                                <UsersIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
                <li className={s.navSettings}>
                    <NavLink
                        activeClassName={s.active}
                        to="/settings"
                        id="settings"
                        className={s.navbarLink}
                    >
                        {!isMobile ? (
                            <span>Settings</span>
                        ) : (
                            <span className={s.navIcon}>
                                <CogIcon />
                            </span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
