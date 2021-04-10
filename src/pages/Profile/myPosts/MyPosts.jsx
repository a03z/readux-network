import React from 'react'
import { Field, Form } from 'react-final-form'
import s from '../../../app/styles/Profile/myposts.module.css'
import Post from './Post/Post'
import { addPost, deletePost } from '../../../app/store/reducers/profileReducer'
import { useDispatch, useSelector } from 'react-redux'

const MyPosts = React.memo((props) => {
    const posts = useSelector((state) => state.profilePage.posts)
    const dispatch = useDispatch()
    const onAddPost = (values) => {
        dispatch(addPost(values.postField))
    }
    const deleteExactPost = (postId) => {
        dispatch(deletePost(postId))
    }
    let postsElement = posts.map((p) => (
        <Post
            isOwner={props.isOwner}
            profile={props.profile}
            deleteExactPost={deleteExactPost}
            message={p.message}
            key={p.id}
            id={p.id}
            likesCount={p.likesCount}
        />
    ))

    postsElement = postsElement.reverse()
    return (
        <section className={s.posts}>
            <h2>My posts</h2>
            <Form
                onSubmit={onAddPost}
                initialValues={{ postField: props.newPostText }}
                render={({ handleSubmit, form }) => (
                    <form className={s.postForm} onSubmit={handleSubmit}>
                        <Field
                            type="text"
                            name="postField"
                            placeholder="your news..."
                            className={`${s.newPost} textarea`}
                            component="textarea"
                        />

                        <button
                            type="submit"
                            onClick={() =>
                                setTimeout(() => {
                                    form.reset()
                                }, 10)
                            }
                            className={s.postSend}
                        >
                            Send
                        </button>
                    </form>
                )}
            />
            {postsElement}
        </section>
    )
})
export default MyPosts
