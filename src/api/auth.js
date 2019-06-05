const Eloquent = window.Eloquent;

/**
 * Register user with email and password
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
export function register(email, password) {
    return Eloquent.Auth.register(email, password);
}


/**
 * Login user with email and password
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
export function login(email, password) {
    return Eloquent.Auth.login(email, password);
}


/**
 * Logout user
 * @returns {Promise}
 */
export function logout() {
    return Eloquent.Auth.logout();
}


/**
 * Check if email is registered in the system
 * @param {String} email
 * @returns {Promise}
 */
export function checkEmail(email) {
    return Eloquent.Auth.checkEmail(email);
}


/**
 * Send reset password link
 * @param {String} email
 * @returns {Promise}
 */
export function sendResetPasswordCode(email) {
    return Eloquent.Auth.sendResetPasswordCode(email);
}


/**
 * Check reset password link token status
 * @param {String} token
 * @returns {Promise}
 */
export function checkResetPasswordCode(token) {
    return Eloquent.Auth.checkCode(token);
}


/**
 * Reset with new password and reset token
 * @param {String} token
 * @param {String} password
 * @returns {Promise}
 */
export function resetPassword(token, password) {
    return Eloquent.Auth.resetPassword(token, password);
}
