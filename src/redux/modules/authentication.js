import { batch } from 'react-redux';
import { register, login, logout } from 'api/auth';
import { getAuthedUserProfile } from 'api/users';
import { saveLoginToken, deleteLoginToken, setApiRequestToken } from 'utils/helpers';

const AUTHENTICATING = 'AUTHENTICATING';
const AUTH_FAILED = 'AUTH_FAILED';
const IS_AUTHED = 'IS_AUTHED';
const UPDATE_PROFILE_DATA = 'UPDATE_PROFILE_DATA';
export const LOGGING_OUT = 'LOGGING_OUT';

function authenticating() {
    return {
        type: AUTHENTICATING
    };
}

function authFailed(data) {
    return {
        type: AUTH_FAILED,
        data
    };
}

export function isAuthed(data) {
    return {
        type: IS_AUTHED,
        data
    };
}

export function loggingOut() {
    return {
        type: LOGGING_OUT
    };
}

export function updateProfileData(data) {
    return {
        type: UPDATE_PROFILE_DATA,
        data
    };
}

export function handleRegisterViaEmail(registrationData) {
    return async function(dispatch) {
        dispatch(authenticating());

        try {
            const { data: { token } } = await register(registrationData);

            saveLoginToken(token);
            setApiRequestToken();

            const { data } = await getAuthedUserProfile();

            dispatch(isAuthed(data));
        }
        catch (err) {
            let message = 'There was an error while registering';

            if (err.response && err.response.status === 422) {
                message = 'This law firm has already been taken';
            }

            batch(() => {
                dispatch(authFailed({ type: 'register', message }));
            });
        }
    };
}

export function handleLoginViaEmail(loginData) {
    return async function(dispatch) {
        dispatch(authenticating());

        try {
            deleteLoginToken();

            const { data: { token } } = await login(loginData);

            saveLoginToken(token);
            setApiRequestToken();

            const { data } = await getAuthedUserProfile();

            dispatch(isAuthed(data));
        }
        catch (err) {
            let message = 'There was an error while logging in';

            if (err.response && err.response.status !== 500) {
                message = 'Sorry, you entered an incorrect email address or password';
            }

            batch(() => {
                dispatch(authFailed({ type: 'login', message }));
            });
        }
    };
}

export function handleLogout() {
    return function(dispatch) {
        logout();

        deleteLoginToken();

        dispatch(loggingOut());
    };
}


const initialState = {
    isAuthenticating: false,
    isAuthed: false,
    authError: {},
    profileData: {}
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATING:
            return {
                ...state,
                isAuthenticating: true
            };

        case AUTH_FAILED:
            return {
                ...state,
                isAuthenticating: false,
                authError: action.data
            };

        case IS_AUTHED:
            return {
                isAuthenticating: false,
                isAuthed: true,
                authError: {},
                profileData: action.data
            };

        case UPDATE_PROFILE_DATA:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    ...action.data
                }
            };

        default:
            return state;
    }
}
