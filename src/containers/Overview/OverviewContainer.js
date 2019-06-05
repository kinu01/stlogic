import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import Overview from './Overview';

class OverviewContainer extends PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticating: PropTypes.bool.isRequired,
        isAuthed: PropTypes.bool.isRequired,
        profileData: PropTypes.object.isRequired,
    };

    state = {
        isLoading: false,
        isProcessing: false,
        processingText: null
    };


    render() {
        return (
            <Overview
                isLoading={this.state.isLoading}
                isProcessing={this.state.isProcessing}
                processingText={this.state.processingText}/>
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
)(OverviewContainer);
