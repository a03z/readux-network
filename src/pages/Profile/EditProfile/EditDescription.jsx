import { CheckIcon } from '@heroicons/react/solid'

import s from '../../../app/styles/Profile/profile-description.module.css'
import {
    createField,
    FormGenerator,
} from '../../../features/FormControls/FormControls'
import { Form } from 'react-final-form'
import { maxLength } from '../../../entities/validators/validators'

const EditDescription = ({ saveProfile, profile }) => {
    let Textarea = FormGenerator('textarea')
    let Input = FormGenerator('input')

    const submitProfile = (formData) => {
        formData.contacts = {
            facebook: formData.facebook,
            github: formData.github,
            instagram: formData.instagram,
            main: formData.main,
            twitter: formData.twitter,
            Website: formData.Website,
            youtube: formData.youtube,
            vk: formData.vk,
        }

        delete formData.facebook
        delete formData.github
        delete formData.instagram
        delete formData.main
        delete formData.twitter
        delete formData.youtube
        delete formData.vk

        saveProfile(formData)
    }

    const createContactField = (contact, initialValue, placeholder) => {
        return createField(
            contact,
            placeholder,
            null,
            Textarea,
            null,
            `${s.input}`,
            initialValue
        )
    }

    return (
        <Form onSubmit={submitProfile}>
            {({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit} className={s.description}>
                    {createField(
                        'fullName',
                        'your name',
                        null,
                        Textarea,
                        maxLength(15),
                        `${s.editProfileName}`,
                        profile.fullName
                    )}
                    <ul>
                        <li>
                            {`Looking for job: `}
                            {createField(
                                'lookingForAJob',
                                null,
                                'checkbox',
                                Input,
                                null,
                                `${s.lookingForJob}`,
                                profile.lookingForAJob
                            )}
                        </li>
                        <li>
                            {`Job description: `}
                            {createField(
                                'lookingForAJobDescription',
                                null,
                                'text',
                                Textarea,
                                null,
                                `${s.input}`,
                                profile.lookingForAJobDescription
                            )}
                        </li>

                        <li>
                            About me:
                            {createField(
                                'aboutMe',
                                null,
                                'text',
                                Textarea,
                                null,
                                `${s.input}`,
                                profile.aboutMe
                            )}
                        </li>
                        <div className={s.editContacts}>
                            <label>
                                Facebook
                                {createContactField(
                                    'facebook',
                                    profile.contacts.facebook,
                                    'Facebook'
                                )}
                            </label>
                            <label>
                                Github
                                {createContactField(
                                    'github',
                                    profile.contacts.github,
                                    'Github'
                                )}
                            </label>
                            <label>
                                Instagram
                                {createContactField(
                                    'instagram',
                                    profile.contacts.instagram,
                                    'Instagram'
                                )}
                            </label>

                            <label>
                                Twitter
                                {createContactField(
                                    'twitter',
                                    profile.contacts.twitter,
                                    'Twitter'
                                )}
                            </label>
                            <label>
                                Vk
                                {createContactField(
                                    'vk',
                                    profile.contacts.vk,
                                    'Vk'
                                )}
                            </label>

                            <label>
                                Youtube
                                {createContactField(
                                    'youtube',
                                    profile.contacts.youtube,
                                    'Youtube'
                                )}
                            </label>
                        </div>
                    </ul>
                    <button className={s.finishEditProfile} type="submit">
                        <CheckIcon />
                    </button>
                </form>
            )}
        </Form>
    )
}
export default EditDescription
