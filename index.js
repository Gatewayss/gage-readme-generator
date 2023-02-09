const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      })
}

// writeToFile()

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
           const markdown = generateMarkdown(answers)
           writeToFile('test.md', markdown)
           // console.log(markdown);
            // return writeToFile("hello.md", answers)
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
