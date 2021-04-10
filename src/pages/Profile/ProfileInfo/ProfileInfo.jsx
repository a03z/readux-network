import React, { useEffect, useState } from 'react'
import ProfileDescription from '../profileDescription/ProfileDescription'
import EditDescription from '../EditProfile/EditDescription'
import s from '../../../app/styles/Profile/profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { PencilIcon } from '@heroicons/react/solid'

export default function ProfileInfo(props) {
    useEffect(() => {
        document.title = `Current user: ${props.profile.fullName}`
    }, [props.profile.fullName])

    const onFileUpload = (e) => {
        if (e.target.files.length) {
            props.setAvatar(e.target.files[0])
        }
    }

    const [isEditingProfile, setEditProfile] = useState(false)

    const enterEditProfile = () => {
        setEditProfile(true)
    }

    const onSubmitProfile = (data) => {
        props.submitProfile(data)
        console.log(data)
        setEditProfile(false)
    }

    return (
        <div>
            <div className={s.imageParallax}>
                <img
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    alt="main"
                    className={s.wallpaper}
                />
            </div>
            <section className={s.profileInfo}>
                <div className={s.avatarContainer}>
                    <img
                        src={
                            !props.profile.photos?.small
                                ? 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png'
                                : props.profile.photos.small
                        }
                        alt="avatar"
                        className={s.avatar}
                    />
                    {props.isOwner && (
                        <>
                            <label
                                htmlFor="uploadAvatar"
                                className={s.uploadAvatar}
                            >
                                Update photo
                            </label>
                            <input
                                onChange={onFileUpload}
                                type="file"
                                id="uploadAvatar"
                                className={s.uploadInput}
                            />
                        </>
                    )}
                    {props.isOwner && !isEditingProfile && (
                        <button
                            onClick={enterEditProfile}
                            className={s.editProfile}
                        >
                            <PencilIcon />
                        </button>
                    )}
                </div>

                {isEditingProfile ? (
                    <EditDescription
                        saveProfile={onSubmitProfile}
                        profile={props.profile}
                    />
                ) : (
                    <ProfileDescription profile={props.profile} />
                )}

                <ProfileStatus
                    status={props.status}
                    isOwner={props.isOwner}
                    updateStatus={props.updateStatus}
                />
            </section>
        </div>
    )
}
