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
        choices: ['Square', 'Triangle', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What shape color would you like to use?',
        name: 'color',
    },
];
// generates svg and places in examples
function writeToFile(shape) {
    const svgText = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

    </svg>
    `;
    fs.writeFile("./examples/logo.svg", svgText, (err) => err ? console.log("Error: Failed to generate logo.svg") : console.log("Generated logo.svg"));
}

function init() {
    inquirer.prompt(questions).then((response) => {
        const { text, textColor, shape, color } = response;
        // console log error for more than 3 characters
        if (text.length > 3) {
            console.log("Error: Only 3 characters can be entered - Enter up to 3 characters");
            return new Error("Error: Only 3 characters can be entered - Enter up to 3 characters");
        }
        else {
            // Chooses user selected shape
            let newShape;
            switch (shape) {
                case "Circle":
                    newShape = new Circle(text, textColor, color);
                    break;
                case "Square":
                    newShape = new Square(text, textColor, color);
                    break;
                case "Triangle":
                    newShape = new Triangle(text, textColor, color);
                    break;
                default:
                    newShape = new Circle(text, textColor, color);
                    break;
            }
            writeToFile(newShape);
        }
    });
}
// Initialization
init();