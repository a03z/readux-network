import React from 'react'
import Preloader from '../../features/preloader/Preloader'
import MyPosts from './myPosts/MyPosts'
import s from '../../app/styles/Profile/profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export default function Profile(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            <ProfileInfo
                setAvatar={props.setAvatar}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                submitProfile={props.submitProfile}
            />

            <MyPosts isOwner={props.isOwner} profile={props.profile} />
        </div>
    )
}
