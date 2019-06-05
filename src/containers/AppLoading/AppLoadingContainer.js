import PropTypes from 'prop-types';
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Spinner from 'components/Spinner/Spinner';
import { getAuthedUserProfile } from 'api/users';
import { getLoginToken, deleteLoginToken, setApiRequestToken } from 'utils/helpers';
import { isAuthed, loggingOut } from 'redux/modules/authentication';

class AppLoadingContainer extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired,
        location: PropTypes.object.isRequired
    }

    state = {
        appIsReady: false
    }

    async componentDidMount() {
        try {
            if (getLoginToken() !== null) {
                setApiRequestToken();

                const { data } = await getAuthedUserProfile();

                this.props.dispatch(isAuthed(data));
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                deleteLoginToken();

                this.props.dispatch(loggingOut());
            }
        }
        finally {
            this.setState({
                appIsReady: true
            });
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.location !== nextProps.location) {
            return true;
        }

        if (this.state.appIsReady !== nextState.appIsReady) {
            return true;
        }

        return false;
    }

    render() {
        if (this.state.appIsReady) {
            return this.props.children;
        }

        return (
            <main>
                <div className='loading-container text-center'>
                    <Spinner useDefaultColor={true} />
                </div>
            </main>
        );
    }
}

export default connect()(AppLoadingContainer);
