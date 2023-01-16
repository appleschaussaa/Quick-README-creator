// Required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("util");

// Required to use generateMarkDown
const generatefile = require("./util/generateMarkdown");

// Rough draft prompts
const promptQuestions = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        default: "Fill title in at a later time",
        // needto look into using validate
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description (e.g., motivation, why it was built, what was learned",
        defaullt: "description goes here"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is the link to you GitHub?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "list", 
        name: "license",
        message: "What licenses did you use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What command shoukd be run to run test?",
    },
    {
        type: "input",
        name: "info",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }
])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
// pretty sure I can combine the writeToFile inside of the init function
const init = () => {
    promptQuestions()
}
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
init();

// console.log(process.argv);