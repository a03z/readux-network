import profileReducer from './reducers/profileReducer'
import usersReducer from './reducers/usersReducer'
import appReducer from './reducers/appReducer'
import dialogsReducer from './reducers/dialogsReducer'
import authReducer from './reducers/authReducer'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.__store__ = store
export default store
