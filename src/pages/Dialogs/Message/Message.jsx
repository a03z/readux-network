import React from 'react'
import dialogsClasses from '../../../app/styles/Dialogs/Dialogs.module.css'

export default function Message(props) {
    return <p className={dialogsClasses.message}>{props.message}</p>
}
