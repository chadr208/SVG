// Dependencies
const fs = require("fs");
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

// Shape characteristics
const questions = [
    {
        type: 'input',
        message: '',
        name: 'text'
    },
    {
        type: 'input',
        message: '',
        name: 'textColor',
    },
    {
        type: 'list',
        message: '',
        name: 'shape',
    },
    {
        type: 'input',
        message: '',
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