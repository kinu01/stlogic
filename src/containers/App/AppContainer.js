import PropTypes from 'prop-types';
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import 'lazysizes';
import { replace } from 'connected-react-router';
import { withRouter, Switch, Route } from 'react-router-dom';
import 'styles/style.css';
import AppLoadingContainer from 'containers/AppLoading/AppLoadingContainer';
import PageLoadable from 'components/Loadable/PageLoadable';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { handleLogout } from 'redux/modules/authentication';

const AsyncNotFoundPage = PageLoadable({ loader: () => import('containers/NotFoundPage/NotFoundPage') });
const AsyncLogin = PageLoadable({ loader: () => import('containers/Login/LoginContainer') });
const AsyncLanding = PageLoadable({ loader: () => import('containers/Landing/LandingContainer') });
const AsyncDarkLanding = PageLoadable({ loader: () => import('containers/Landing/DarkLanding') });
const AsyncDashboard = PageLoadable({ loader: () => import('containers/Workspace/WorkspaceContainer') });

class AppContainer extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthed: PropTypes.bool.isRequired,
        profileData: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
    }

    componentDidMount() {

        // preload page for 404 route
        AsyncNotFoundPage.preload();

        this.subscribeToIdleTimer();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.isAuthed && prevProps.isAuthed) {
            this.props.dispatch(replace('/'));

            this.unSubscribeToIdleTimer();
        }

        if ((this.props.isAuthed && !prevProps.isAuthed)
            || (this.props.profileData.logout_after !== prevProps.profileData.logout_after)) {
            this.subscribeToIdleTimer();
        }
    }

    componentWillUnmount() {
        this.idleTimer && clearTimeout(this.idleTimer);

        this.unSubscribeToIdleTimer();
    }

    subscribeToIdleTimer = () => {
        if (this.props.profileData.logout_after && this.props.isAuthed) {
            this.resetIdleTimer();

            document.addEventListener('mousemove', this.resetIdleTimer);
            document.addEventListener('mousedown', this.resetIdleTimer);
            document.addEventListener('touchstart', this.resetIdleTimer);
            document.addEventListener('keypress', this.resetIdleTimer);
        }
    }

    resetIdleTimer = () => {
        this.idleTimer && clearTimeout(this.idleTimer);

        this.idleTimer = setTimeout(() => {
            this.props.dispatch(handleLogout());
        }, this.props.profileData.logout_after);
    }

    unSubscribeToIdleTimer = () => {
        if (this.props.profileData.logout_after) {
            document.removeEventListener('mousemove', this.resetIdleTimer);
            document.removeEventListener('mousedown', this.resetIdleTimer);
            document.removeEventListener('touchstart', this.resetIdleTimer);
            document.removeEventListener('keypress', this.resetIdleTimer);
        }
    }

    render() {
        const { location, isAuthed } = this.props;

        return (
            <div id='outer-container'>
                <ErrorBoundary location={location}>
                    <AppLoadingContainer location={location}>
                        <Switch>
                            <Route path='/' exact={true} component={AsyncLanding} />
                            <Route path='/dark' exact={true} component={AsyncDarkLanding} />
                            <Route path='/login' exact={true} component={AsyncLogin} />
                            <PrivateRoute path='/dashboard' component={AsyncDashboard} isAuthed={isAuthed} />
                            <Route component={AsyncNotFoundPage} />
                        </Switch>
                    </AppLoadingContainer>
                </ErrorBoundary>
            </div>
        );
    }
}

function mapStateToProps({ authentication }) {
    return {
        isAuthed: authentication.isAuthed,
        profileData: authentication.profileData,
    };
}

export default withRouter(
    connect(
        mapStateToProps
    )(AppContainer)
);
