import { BanIcon, CheckIcon } from '@heroicons/react/solid'
import React from 'react'
import s from '../../../app/styles/Profile/profile-description.module.css'
import { Contacts } from '../../../features/Contacts/Contacts'
export default function ProfileDescription(props) {
    const ifThereContacts = () => {
        if (props.profile.contacts) {
            return Object.values(props.profile.contacts).some(
                (x) => x !== null && x !== ''
            )
        }
        return false
    }

    const isThereContacts = ifThereContacts()
    return (
        <div className={s.description}>
            <h1 className={s.profileName}>{props.profile.fullName}</h1>
            <ul>
                <li>
                    {`Looking for job: `}
                    {props.profile.lookingForAJob ? (
                        <CheckIcon className={s.lookingForJob} />
                    ) : (
                        <BanIcon className={s.notLookingForJob} />
                    )}
                </li>
                <li>
                    {`Job description: `}
                    {props.profile.lookingForAJobDescription || 'No info'}
                </li>
                {isThereContacts ? <Contacts profile={props.profile} /> : null}
                <li>About me: {props.profile.aboutMe || 'No info'}</li>
            </ul>
        </div>
    )
}
