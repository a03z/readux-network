export const composeValidators = (...validators) => (value) =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    )

export const required = (value) => (value ? undefined : 'Required')

export const minLength = (min) => (value) =>
    value.length >= min ? undefined : `Is less than ${min}`

export const maxLength = (max) => (value) =>
    value?.length <= max ? undefined : `Max symbols is ${max}`

export const ifMatch = (prevValue) => (value) =>
    prevValue === value ? undefined : 'Must match'
