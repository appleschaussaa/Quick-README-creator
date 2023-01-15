// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("util");
// TODO: Create an array of questions for user input
const questions = [
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
        type: "input",
        name: "title",
        message: "What is your project title?",
        default: "Fill title in at a later time",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description (e.g., motivation, why it was built, what was learned",
        defaullt: "description goes here"
    },
    {
        type: "list", 
        name: "licenses",
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
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

console.log(process.argv);