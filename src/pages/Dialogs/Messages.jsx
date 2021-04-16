import { Field, Form } from 'react-final-form'
import s from '../../app/styles/Dialogs/Dialogs.module.css'
import { maxLength } from '../../entities/validators/validators'

export default function Messages(props) {
    return (
        <section className={s.messages}>
            <div className="messages">{props.messagesElements}</div>
            <Form
                onSubmit={props.onSendClick}
                className={s.sendBlock}
                initialValues={{ messageField: '' }}
                render={({ handleSubmit, form }) => (
                    <form className={s.form} onSubmit={handleSubmit}>
                        <Field
                            name="messageField"
                            placeholder="type here..."
                            type="text"
                            component={props.Textarea}
                            validate={maxLength(50)}
                            className={s.newMessage}
                        />
                        <button
                            type="submit"
                            onClick={() =>
                                setTimeout(() => {
                                    form.reset()
                                }, 1)
                            }
                            className={s.messageSend}
                        >
                            Send
                        </button>
                    </form>
                )}
            />
        </section>
    )
}
