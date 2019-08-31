const fs = require("fs");
const inquirer = require("inquirer");

/**
 *
 * @param {object} projectContent
 * @param {object} projectContent.files
 * @param {object} projectContent.tags
 * @returns {PromiseLike<*>}
 */
module.exports = function showMenu(projectContent) {
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
                return new Promise((resolve, reject) => {
                    resolve();
                })
            } else if(answers["menuOptions"] === "SHOW TAGGED FILES") {
                return new Promise((resolve, reject) => {
                    resolve();
                })
            } else if(answers["menuOptions"] === "EXIT") {
                process.exit();
            }

        });
};