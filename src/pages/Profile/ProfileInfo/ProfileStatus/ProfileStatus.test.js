import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('Profile status component', () => {
    test('status from should be in the state', () => {
        const component = create(<ProfileStatus status={'hello dimych'} />)
        const instance = component.root
        expect(instance.props.status).toBe('hello dimych')
    })
})
