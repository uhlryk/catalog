const fse = require("fs-extra");
const path = require("path");

async function walk(baseDir, dir) {
    let results = [];
    let fileList = await fse.readdir(dir);
    for (let fileName of fileList) {
        if(fileName[0] !== ".") {
            let filePath = path.resolve(dir, fileName);
            let fileStat = await fse.stat(filePath);
            if (fileStat && fileStat.isDirectory()) {
                Array.prototype.push.apply(results, await walk(baseDir, filePath));
            } else if (fileStat && fileStat.isFile()) {
                results.push({
                    name: fileName,
                    path: path.relative(baseDir, filePath),
                    stat: fileStat
                });
            }
        }
    }
    return results;
}
module.exports = function listFiles(dir) {
    return walk(dir, dir);
}