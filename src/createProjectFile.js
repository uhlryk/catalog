const fs = require("fs");
const inquirer = require("inquirer");

const emptyProject = {
    files: {},
    tags: {

    }
};

/**
 *
 * @param {string} projectFilePath
 * @returns {Promise<undefined>}
 */
module.exports = function createProjectFile(projectFilePath) {
    return Promise.resolve()
        .then(() => {
            console.log("Project doesn't exist");
            return inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'projectCreation',
                        message: 'Do you want to create?',
                        choices: [
                            "Yes",
                            "No"
                        ]
                    }
                ])
                .then(answers => {
                    if(answers["projectCreation"] === "Yes") {
                        return new Promise((resolve, reject) => {
                            fs.writeFile(projectFilePath, JSON.stringify(emptyProject), (err) => {
                                if (err) {
                                    return reject(err);
                                }
                                console.log('The file has been saved!');
                                return resolve()
                            });
                        })
                    } else {
                        process.exit();
                    }

                });
        })
};

