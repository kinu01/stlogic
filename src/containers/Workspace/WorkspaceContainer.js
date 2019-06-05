import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import { ScrollContainer } from 'react-router-scroll-4';
import { Switch } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import PageLoadable from 'components/Loadable/PageLoadable';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import './workspace.css';


const AsyncOverview = PageLoadable({ loader: () => import('containers/Overview/OverviewContainer') });

class WorkspaceContainer extends PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        isAuthed: PropTypes.bool.isRequired,
        profileData: PropTypes.object.isRequired,
    };

    state = {
    };

    render() {
        const { location, match } = this.props;

        return (
            <Fragment>
                <ScrollContainer scrollKey='page-wrap'>
                    <div id='page-wrap'>
                        <main className='workspace'>
                            <ErrorBoundary location={location} isInWorkspace={true}>
                                <Switch>
                                    <PrivateRoute path={`${match.url}/overview`} component={AsyncOverview} isAuthed={this.props.isAuthed} />
                                </Switch>
                            </ErrorBoundary>
                        </main>
                    </div>
                </ScrollContainer>
            </Fragment>
        );
    }
}

function mapStateToProps({ authentication }) {
    return {
        isAuthed: authentication.isAuthed,
        profileData: authentication.profileData
    };
}

export default connect(
    mapStateToProps
)(WorkspaceContainer);
