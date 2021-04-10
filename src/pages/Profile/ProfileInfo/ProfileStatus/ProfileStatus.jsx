import React, { useEffect, useState } from 'react'
import s from '../../../../app/styles/Profile/status.module.css'

const ProfileStatus = (props) => {
    // local state
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    //callbacks
    const enterEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }
    const exitEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    // effect
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <>
            {editMode ? (
                <>
                    <input
                        onBlur={exitEditMode}
                        type="text"
                        value={status}
                        autoFocus
                        onChange={onStatusChange}
                        className={s.statusSpan}
                    />
                </>
            ) : (
                <>
                    {props.status ? (
                        <span
                            className={s.statusSpan}
                            onDoubleClick={enterEditMode}
                        >
                            {props.status}
                        </span>
                    ) : (
                        <span
                            className={s.noStatusSpan}
                            onDoubleClick={enterEditMode}
                        >
                            No status set.
                        </span>
                    )}
                </>
            )}
        </>
    )
}
export default ProfileStatus
