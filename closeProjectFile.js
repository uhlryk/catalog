const fs = require("fs");
module.exports = function closeProjectFile(fileDescriptor) {
    return new Promise((resolve, reject) => {
        fs.close(fileDescriptor, (err) => {
            if (err) {
                return reject(err);
            }
        });
    });
};