import React from 'react'
import s from '../../../../app/styles/Profile/post.module.css'
import { XIcon, ThumbUpIcon } from '@heroicons/react/solid'

const Post = React.memo((props) => {
    let deleteThisPost = () => {
        props.deleteExactPost(props.id)
    }
    return (
        <div className={s.post}>
            <img
                src={
                    props.profile.photos.small ||
                    'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png'
                }
                alt="postAvatar"
                className={s.postAvatar}
            />
            <div className={s.middle}>
                <p className={s.postText}>{props.message}</p>

                {props.isOwner && (
                    <XIcon className={s.deletePost} onClick={deleteThisPost} />
                )}
            </div>
            <span className={s.likesCount}>
                <ThumbUpIcon className={s.thumbUp} /> {props.likesCount}
            </span>
        </div>
    )
})
export default Post
