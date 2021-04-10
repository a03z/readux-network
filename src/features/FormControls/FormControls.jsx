import React from 'react'
import { Field } from 'react-final-form'
import s from './formcontrols.module.css'

export const FormGenerator = (type) => ({
    input,
    meta,
    placeholder,
    className,
    id,
}) => {
    const hasError = meta.error && meta.touched
    return (
        <>
            {type === 'input' ? (
                <input
                    {...input}
                    placeholder={placeholder}
                    className={hasError ? s.error : className}
                    id={id}
                    ref={id}
                />
            ) : (
                <textarea
                    {...input}
                    type="text"
                    className={className}
                    placeholder={placeholder}
                    id={id}
                    ref={id}
                />
            )}
            {hasError && <div className={s.errorSpan}>{meta.error}</div>}
        </>
    )
}

export const createField = (
    name,
    placeholder,
    type,
    component,
    validate,
    className,
    initialValue
) => (
    <Field
        name={name}
        placeholder={placeholder}
        type={type}
        component={component}
        validate={validate}
        className={className}
        initialValue={initialValue}
    />
)
