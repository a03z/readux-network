import { createField, FormGenerator } from '../FormControls/FormControls'
import s from './contacts.module.css'

export const EditContacts = (props) => {
    let Textarea = FormGenerator('textarea')

    const createContactField = (contact) => {
        let field = createField(
            contact,
            `${contact} link`,
            null,
            Textarea,
            null,
            `${s.input}`,
            props.profile.contacts.contact
        )
        return field
    }

    return (
        <>
            {createContactField('facebook')}
            {createContactField('github')}
            {createContactField('instagram')}
            {createContactField('main')}
            {createContactField('twitter')}
            {createContactField('Website')}
            {createContactField('youtube')}
            {createContactField('vk')}
        </>
    )
}
