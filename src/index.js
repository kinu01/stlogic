/* eslint-disable require-jsdoc */

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Provider from 'react-redux/es/components/Provider';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { ScrollContext } from 'react-router-scroll-4';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import AppContainer from './containers/App/AppContainer';
import * as reducers from './redux';
import { LOGGING_OUT } from './redux/modules/authentication';
import apiInterceptor from 'api/interceptor';

const history = createBrowserHistory();
const appReducer = combineReducers({ ...reducers, router: connectRouter(history) });

// clear all stored state on logout
function rootReducer(state, action) {
    if (action.type === LOGGING_OUT) {
        state = undefined;
    }

    return appReducer(state, action);
}

const historyMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, historyMiddleware)
    )
);

// intercept api calls and handle 401 error
apiInterceptor(store.dispatch);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollContext>
                <AppContainer />
            </ScrollContext>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
