import React, { useEffect } from 'react'
import Dialog from './Dialog/Dialog'
import s from '../../app/styles/Dialogs/Dialogs.module.css'
import Message from './Message/Message'
import { FormGenerator } from '../../features/FormControls/FormControls'
import Messages from './Messages'

export default function Dialogs(props) {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <Dialog name={d.name} key={d.id} id={d.id} />
    ))

    let messagesElements = props.dialogsPage.messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ))

    useEffect(() => {
        document.title = `Messages`
    }, [])

    const onSendClick = (values) => {
        props.sendNewMessage(values.messageField)
    }

    let Textarea = FormGenerator('textarea')

    const messageProps = {
        onSendClick,
        Textarea,
        messagesElements,
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>{dialogsElements}</ul>
            <Messages {...messageProps} />
        </div>
    )
}
