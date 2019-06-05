import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import { replace } from 'connected-react-router';
import Login from './Login';
import { handleLoginViaEmail } from 'redux/modules/authentication';
import { dashboardUrlPrefix } from 'config/constants';

class LoginContainer extends PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticating: PropTypes.bool.isRequired,
        isAuthed: PropTypes.bool.isRequired,
        profileData: PropTypes.object.isRequired,
    };

    state = {
        isLoginProcessing: false,
    };

    componentDidMount() {
        if (this.props.isAuthed) {
            this.redirectToUserWorkspace();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAuthenticating && !this.props.isAuthenticating) {
            this.setState({
                isLoginProcessing: false
            });

            if (this.props.isAuthed) {
                this.redirectToUserWorkspace();
            }
        }
    }

    redirectToUserWorkspace() {
        this.props.dispatch(replace(`${dashboardUrlPrefix}/overview`));
    }

    handleLoginSubmit = (data) => {
        this.setState({
            isLoginProcessing: true
        });

        this.props.dispatch(handleLoginViaEmail(data));
    };

    render() {
        return (
            <Login
                isLoginProcessing={this.state.isLoginProcessing}
                onLoginSubmit={this.handleLoginSubmit} />
        );
    }
}

function mapStateToProps({ authentication }) {
    return {
        isAuthenticating: authentication.isAuthenticating,
        isAuthed: authentication.isAuthed,
        profileData: authentication.profileData,
    };
}

export default connect(
    mapStateToProps
)(LoginContainer);
