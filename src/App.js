import './App.css'
import Music from './pages/Music/Music'
import News from './pages/News/News'
import Settings from './pages/Settings/Settings'
import Login from './pages/Login/Login'
import React, { Suspense, useEffect } from 'react'
import { initializeApp } from './app/store/reducers/appReducer'
import Preloader from './features/preloader/Preloader'
import Header from './pages/Header/Header'
import Navbar from './pages/Navbar/Navbar'
import autosize from 'autosize'
import { Route } from 'react-router'
import { connect } from 'react-redux'

const DialogsContainer = React.lazy(() =>
    import('./pages/Dialogs/DialogsContainer')
)
const UsersContainer = React.lazy(() => import('./pages/Users/UsersContainer'))
const ProfileContainer = React.lazy(() =>
    import('./pages/Profile/ProfileContainer')
)

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, [props])
    autosize(document.querySelectorAll('textarea'))
    autosize(document.querySelectorAll('input'))
    if (!props.initialized) {
        return <Preloader />
    } else {
        return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader />}>
                        <Route
                            path="/profile/:userId?"
                            render={() => <ProfileContainer />}
                        />

                        <Route
                            path="/dialogs"
                            render={() => <DialogsContainer />}
                        />

                        <Route
                            path="/users"
                            render={() => <UsersContainer />}
                        />

                        <Route path="/news" render={() => <News />} />

                        <Route path="/music" render={() => <Music />} />

                        <Route path="/settings" render={() => <Settings />} />

                        <Route path="/login" render={() => <Login />} />
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
export default connect(mapStateToProps, { initializeApp })(App)
