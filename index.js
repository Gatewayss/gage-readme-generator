const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enters examples of usage if you have any (click enters to skip).',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the license for your project?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Do you have any contributors or contributions to your project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Do you have tests instructions on this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(`got the data!!! ${fileName} ${JSON.stringify(data)}`);
}

// writeToFile()

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            return writeToFile("hello.md", answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("oops try again");
            }
        })
}

// Function call to initialize app
init();
