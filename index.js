const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'What are your examples of usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would you like to choose?',
        name: 'license',
        choices: ['MIT', 'BSD', 'Apache', 'None'],
    },
    {
        type: 'input',
        message: 'Do you have any contributors or contributions to your project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Do you have tests instructions on this application?',
        name: 'test',
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

// renders the final version of the readme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("\nFile written successfully\n");
        }
    })
};

// initializes app, passes the answers as data to generate markdown file
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers)
            // passes markdown file to be rendered 
            writeToFile('generatedREADME.md', markdown)
        })
};

init();
