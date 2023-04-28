// Dependencies
const fs = require("fs");
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

// Shape characteristics
const questions = [
    {
        type: 'input',
        message: 'Input 3 characters Max',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Input text color',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What shape color would you like to use?',
        name: 'color',
    },
];

function writeToFile() {
    fs.writeFile();
}

function init() {
    inquirer.createPromptModule(questions).then((response) => {
        writeToFile();
    });
}