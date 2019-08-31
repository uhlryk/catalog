const fs = require("fs");
const path = require("path");
const openProjectFile = require("./openProjectFile");
const closeProjectFile = require("./closeProjectFile");
const createProjectFile = require("./createProjectFile");
const readProjectFile = require("./readProjectFile");
const showMenu = require("./showMenu");

const projectFileName = "project.json";
const executePath = process.cwd();
const projectFilePath = path.join(executePath, projectFileName);
console.log(executePath);

console.log("Check if project exist");


function init () {
    return openProjectFile(projectFilePath)
        .catch(err => {
            console.log("error", err);
            return createProjectFile(projectFilePath)
                .then(() => openProjectFile(projectFilePath))
        })
        .then(fileDescriptor => {
            console.log("Project exist");
            return readProjectFile(fileDescriptor)
                .then(projectContent => {
                    console.log(projectContent);
                    return showMenu(projectContent)
                        .then(() => {
                            return Promise.resolve()
                                .then(() => closeProjectFile(fileDescriptor))
                        })
                })


        })

}

init();