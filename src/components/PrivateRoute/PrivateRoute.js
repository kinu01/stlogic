import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthed: PropTypes.bool.isRequired
};

export default function PrivateRoute({ component: Component, isAuthed, ...rest }) {
    return (
        <Route {...rest} render={(routeProps) => (
            isAuthed
                ? <Component {...routeProps} />
                : <Redirect to={{
                    pathname: '/',
                    state: { from: routeProps.location }
                }}/>
        )}/>
    );
}
