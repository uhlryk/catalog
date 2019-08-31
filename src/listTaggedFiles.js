const listFiles = require("./listFiles");

/**
 *
 * @param {object} projectContent
 * @param {object} projectContent.files
 * @param {object} projectContent.tags
 * @param {string} projectPath
 * @returns {Promise<*>}
 */
module.exports = function listTaggedFiles(projectContent, projectPath) {
    return listFiles(projectPath)
        .then(fileList  => {
            return fileList.filter(file => {
                return !!projectContent.files[file.path]
            })
        })
}