import React, { useEffect } from 'react'
import s from '../../app/styles/Login/login.module.css'
import {
    minLength,
    required,
    composeValidators,
} from '../../entities/validators/validators'
import {
    createField,
    FormGenerator,
} from '../../features/FormControls/FormControls'
import { login } from '../../app/store/reducers/authReducer'
import { LoginIcon } from '@heroicons/react/solid'
import { Form } from 'react-final-form'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

const LoginForm = ({ onSubmit, captchaUrl }) => {
    let Input = FormGenerator('input')

    useEffect(() => {
        document.title = 'Login'
    }, [])

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit, pristine, form, submitting }) => (
                <form className={s.loginForm} onSubmit={handleSubmit}>
                    <div className={s.loginContainer}>
                        <label>
                            Email{' '}
                            {createField(
                                'email',
                                'Email',
                                'email',
                                Input,
                                composeValidators(required, minLength(10)),
                                `${s.loginField}`
                            )}
                        </label>

                        <label>
                            Password{' '}
                            {createField(
                                'password',
                                'Pass',
                                'password',
                                Input,
                                composeValidators(required, minLength(10)),
                                `${s.loginField}`
                            )}
                        </label>

                        <div className={s.remember}>
                            <span className={s.rememberSpan}>Remember me</span>
                            {createField(
                                'remember me',
                                null,
                                'checkbox',
                                'input',
                                null,
                                `${s.checkbox} ${s.loginField}`
                            )}
                        </div>
                        {captchaUrl ? (
                            <>
                                <img src={captchaUrl} alt="captcha" />

                                {createField(
                                    'captcha',
                                    'Symbols from image',
                                    'text',
                                    Input,
                                    required,
                                    s.loginField
                                )}
                            </>
                        ) : null}

                        <button className={s.loginSubmit} type="sumbit">
                            <span>Login</span>
                            <LoginIcon className={s.loginSubmit__icon} />
                        </button>
                    </div>
                    <div className={s.loginSuggest}>
                        <p>Not signed up?</p>
                        {
                            <a
                                href="https://social-network.samuraijs.com/signUp"
                                className={s.already}
                            >
                                Do it
                            </a>
                        }
                    </div>
                </form>
            )}
        </Form>
    )
}
const Login = ({ login, isAuth, logError, captchaUrl }) => {
    let onSubmit = (formData) => {
        login(
            formData.email,
            formData.password,
            formData.rememberMe,
            null,
            null,
            formData.captcha
        )
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <>
            <h1 className={s.loginHeading}>
                You need to login before accessing this page.
            </h1>
            <div className={s.formContainer}>
                {logError ? (
                    <div className={s.logError}>
                        Incorrect email or password
                    </div>
                ) : null}
                <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        logError: state.auth.logError,
        captchaUrl: state.auth.captchaUrl,
    }
}
export default connect(mapStateToProps, { login })(Login)
