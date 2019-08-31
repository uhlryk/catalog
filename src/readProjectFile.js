const fs = require("fs");
module.exports = function readProjectFile(fileDescriptor) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileDescriptor, function(err, contents) {
            resolve(JSON.parse(contents));
        });
    })

}