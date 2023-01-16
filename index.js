// Required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("util");
const generateMarkdown = require("./util/generateMarkdown");

// Required to use generateMarkDown
const generatefile = require("./util/generateMarkdown");

// Rough draft prompts
const promptQuestions = async () => {
    // return not sure if this is needed here

    await inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        // default: "Fill title in at a later time",
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A title is very important to include");
            }
                    return true;
            }
        // need to verify this actually works
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description (e.g., motivation, why it was built, what was learned)",
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A descripting is also very important to include");
            }
                    return true;
            }
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
        type: "checkbox", 
        name: "license",
        message: "What licenses did you use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "ISC", "None"],
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
    },
])
};


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }
// pretty sure I can combine the writeToFile inside of the init function
const init = () => {
    promptQuestions() 
        .then((data) => fs.writeFile("index.html", generateMarkdown(data)))
        .then(() => console.log("Congrats! Check out your new README.md file"))
        .catch((err) => console.error(err));
};
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
init();

// console.log(process.argv);