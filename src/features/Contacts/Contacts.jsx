import React from 'react'
import s from './contacts.module.css'

const Contact = ({ contactTitle, contactValue }) => {
    return contactValue ? (
        <a href={contactValue}>
            <li>{contactTitle}</li>
        </a>
    ) : null
}

export const Contacts = (props) => (
    <section className={s.contactContainer}>
        <Contact
            contactTitle={'Facebook'}
            contactValue={props.profile.contacts.facebook}
        />
        <Contact
            contactTitle={'Github'}
            contactValue={props.profile.contacts.github}
        />
        <Contact
            contactTitle={'Instagram'}
            contactValue={props.profile.contacts.instagram}
        />
        <Contact
            contactTitle={'Main link'}
            contactValue={props.profile.contacts.mainLink}
        />
        <Contact
            contactTitle={'Twitter'}
            contactValue={props.profile.contacts.twitter}
        />
        <Contact contactTitle={'VK'} contactValue={props.profile.contacts.vk} />
        <Contact
            contactTitle={'Website'}
            contactValue={props.profile.contacts.website}
        />
        <Contact
            contactTitle={'Youtube'}
            contactValue={props.profile.contacts.youtube}
        />
    </section>
)
