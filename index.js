// Required packages
const inquirer = require("inquirer");
const fs = require("fs").promises;
// Required to use generateMarkdown
const generateMarkdown = require("./util/generateMarkdown");

// Rough draft prompts
const questions = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        // used to make an answer of at least one character required
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A title is very important to include");
            }
                    return true;
            }
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
        // gives the user some options for their choice and makes it required to choose at least one
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "ISC", "None"],
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Must select at least 1 or none");
            }
                    return true;
            }
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?",
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

// able to consolidate the actions to one init function
const init = () => {
    questions()
        // make it so that the prompt questions are answered before the results used
        .then((results) => fs.writeFile("mockREADME.md", generateMarkdown(results)))
        .then(() => console.log("check out your new README under mockREAD.md"))
        .catch((err) => console.log(err));
};

// used to start the function once index.js is run
init();