/* eslint-disable no-useless-escape */

import Storage from './Storage';
import { loginTokenStorageItem } from 'config/constants';

/**
 * Validate email address
 * @param {String} email
 * @returns {Boolean}
 */
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}


/**
 * Save login token
 * @param {String} loginToken
 */
export function saveLoginToken(loginToken) {
    Storage.setItem(loginTokenStorageItem, loginToken);
}


/**
 * Get login token
 * @returns {String}
 */
export function getLoginToken() {
    return Storage.getItem(loginTokenStorageItem);
}


/**
 * Delete login token
 */
export function deleteLoginToken() {
    Storage.removeItem(loginTokenStorageItem);
}


/**
 * Sets the the authorization token for api requests
 */
export function setApiRequestToken() {
    const token = Storage.getItem(loginTokenStorageItem);

    window.Eloquent.setApiRequestToken(token);
}


/**
 * Get the value of the requested param from the current page url
 * @param {String} queryString - the search query
 * @param {String} param - the requested param
 * @returns {String}
 */
export function getUrlSearchParam(queryString, param) {
    const allQueries = queryString.slice(1).split('&');
    let val = '';

    allQueries.forEach((query) => {
        if (query.indexOf(param) !== -1) {
            val = query.split('=')[1];
        }
    });

    return val;
}

/**
 * Capitalize a string
 * @param {String} str
 * @returns {String}
 */
export function capitalize(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
