import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import ReactDOM from 'react-dom'
import store from './app/store/reduxStore'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})
