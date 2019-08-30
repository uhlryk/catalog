const fs = require("fs");
const path = require("path");
const openProjectFile = require("./openProjectFile");
const closeProjectFile = require("./closeProjectFile");
const createProjectFile = require("./createProjectFile");

const projectFileName = "project.json";
const executePath = process.cwd();
const projectFilePath = path.join(executePath, projectFileName);
console.log(executePath);

console.log("Check if project exist");


function init () {
    return openProjectFile(projectFilePath)
        .then(fileDescriptor => {
            return Promise.resolve()
                .then(() => closeProjectFile(fileDescriptor))
        }, err => {
            console.log("error", err);
            return createProjectFile(projectFilePath)
                .then(() => init())
        })

}

init();