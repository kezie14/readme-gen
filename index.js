const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type : "input",
        name : "github",
        message : "Give me your Username"
    },
    {
        type : "list",
        name : "license",
        choices : ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }

//Email, Project Name, Description of Project, HowTo Install, HowTo Test, Who Else Contributed
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