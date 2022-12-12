const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type : "input",
        name : "github",
        message : "Give me your Username"
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

function init() {
    inquirer.prompt(questions).then((userResponses)=>{
        console.log("Generating ReadMe")
        writeToFile("README.md", generateMarkdown({...userResponses}))
    })
}

init()