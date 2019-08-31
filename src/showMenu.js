const inquirer = require("inquirer");
const listRawFiles = require("./listRawFiles");
const listTaggedFiles = require("./listTaggedFiles");
/**
 *
 * @param {object} projectContent
 * @param {object} projectContent.files
 * @param {object} projectContent.tags
 * @param {string} projectPath
 * @returns {PromiseLike<*>}
 */
module.exports = function showMenu(projectContent, projectPath) {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOptions',
                message: '===MENU===',
                choices: [
                    "SHOW RAW FILES",
                    "SHOW TAGGED FILES",
                    "EXIT"
                ]
            }
        ])
        .then(answers => {
            if(answers["menuOptions"] === "SHOW RAW FILES") {
                return listRawFiles(projectContent, projectPath)
                    .then(fileList  => {
                        fileList.forEach(file => {
                            console.log(file)
                        })
                    })

            } else if(answers["menuOptions"] === "SHOW TAGGED FILES") {
                return listTaggedFiles(projectContent, projectPath)
                    .then(fileList  => {
                        fileList.forEach(file => {
                            console.log(file)
                        })
                    })
            } else if(answers["menuOptions"] === "EXIT") {
                process.exit();
            }

        });
};