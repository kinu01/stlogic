import { handleLogout } from 'redux/modules/authentication';

const Eloquent = window.Eloquent;

/**
 * Intercept all api calls to site backend and handle errors
 * @param {Function} dispatch - redux store dispatch function
 */
export default function apiInterceptor(dispatch) {
    Eloquent.addResponseInterceptor((resp) => {
        if (!resp.isOk || resp.status >= 500) {
            const endpoint = resp.request.responseURL.split('/').pop();
            const endpointExceptions = ['login', 'reg', 'logout', 'email', 'me'];

            if (resp.status === 401 && !endpointExceptions.includes(endpoint)) {
                dispatch(handleLogout());
            }

            let error = new Error(resp.statusText);

            error.response = resp;
            throw error;
        }
    });
}
