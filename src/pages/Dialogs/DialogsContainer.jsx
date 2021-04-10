import Dialogs from './Dialogs'
import { sendMessage } from '../../app/store/reducers/dialogsReducer'
import { withAuthRedirect } from '../../app/hoc/withAuthRedirect'
import { compose } from 'redux'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (newMessageText) => {
            dispatch(sendMessage(newMessageText))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
