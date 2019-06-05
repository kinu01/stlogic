const Eloquent = window.Eloquent;

/**
 * Get logged in user's profile data
 * @returns {Promise}
 */
export function getAuthedUserProfile() {
    return Eloquent.User.me();
}


/**
 * Create a new user
 * @param {Number} id
 * @param {Object} data
 * @returns {Promise}
 */
export async function getUserById(id, data) {
    return Eloquent.User.getOne(id, data);
}


/**
 * Set logged in user's profile data
 * @param {Number} id
 * @param {Object} data
 * @returns {Promise}
 */
export function setUserProfile(id, data) {
    return Eloquent.User.updateOne(id, data);
}


/**
 * Update user
 * @param {Number} id
 * @param {Object} data
 * @returns {Promise}
 */
export function updateUser(id, data) {
    return Eloquent.User.updateOne(id, data);
}
