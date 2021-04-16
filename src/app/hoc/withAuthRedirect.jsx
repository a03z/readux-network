import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login" />
        }
        return <Component {...props} />
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(
        RedirectComponent
    )
    return ConnectedRedirectComponent
}
