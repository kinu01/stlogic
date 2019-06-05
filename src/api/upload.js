import { isProduction, apiUrl } from 'config/constants';
import request from 'superagent';

export const imageCDNUrl = 'https://api.legalassiz.com/';

/**
 * Upload image to backend
 * @param {Object} file
 * @returns {Promise}
 */
export function uploadImage(file) {
    return handleUpload(file, 'upload/image');
}


/**
 * Upload a file to backend
 * @param {Object} file
 * @returns {Promise}
 */
export function uploadFile(file) {
    return handleUpload(file, 'upload/file');
}


/**
 * Handle the uploading of a file
 * @param {Object} file
 * @param {String} endPoint - the api end point to where the file needs to be uploaded
 * @returns {Promise}
 */
async function handleUpload(file, endPoint) {
    const uploadUrl = isProduction ? imageCDNUrl : apiUrl;

    return new Promise((resolve, reject) => {
        request.post(uploadUrl + endPoint)
            .attach('file', file)
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.text);
                }
            });
    });
}
