import React, { useEffect } from 'react'
import Profile from './Profile'
import {
    getUserProfile,
    getStatus,
    updateStatus,
    setStatus,
    setAvatar,
    submitProfile,
} from '../../app/store/reducers/profileReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const ProfileContainer = ({ isAuth, loggedUserId, ...props }) => {
    let userId = props.match.params.userId
    useEffect(() => {
        isAuth
            ? !userId
                ? // eslint-disable-next-line react-hooks/exhaustive-deps
                  (userId = loggedUserId)
                : (userId = props.match.params.userId)
            : !userId
            ? (userId = 2)
            : (userId = props.match.params.userId)
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [props.match.params.userId])

    let ifOwner = () => {
        if (props.profile) {
            if (isAuth) {
                if (loggedUserId === parseInt(props.match.params.userId)) {
                    return true
                } else if (loggedUserId === props.profile.userId) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }

    const isOwner = ifOwner()

    return (
        <Profile
            setAvatar={props.setAvatar}
            isOwner={isOwner}
            {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            submitProfile={props.submitProfile}
        />
    )
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        setStatus,
        setAvatar,
        submitProfile,
    }),
    withRouter
)(ProfileContainer)
