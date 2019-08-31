const fs = require("fs");

/**
 *
 * @param {string} projectFilePath
 * @returns {Promise<*>}
 */
module.exports = function openProjectFile(projectFilePath) {
    return new Promise((resolve, reject) => {
        fs.open(projectFilePath, "r", (err, fileDescriptor) => {
            if (err) {
                return reject(err)
            }
            return resolve(fileDescriptor);

        });
    });
};