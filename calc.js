// node calc.js

const readline = require('readline');
const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');
const { callbackify } = require('util');

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log("Welcome to the Terminal Calculator!");
    
    // Ask the user for the operation they want to perform
    const operation = await askQuestion('Which operation would you like to perform? (addition: 1, subtraction: 2, multiplication: 3, division: 4): ');

    // Ask for the two numbers
    const num1 = parseFloat(await askQuestion('Enter the first number: '));
    const num2 = parseFloat(await askQuestion('Enter the second number: '));

    let result;

    // Perform the operation based on the user's input
    if (operation === '1') {
        result = add(num1, num2);
    } else if (operation === '2') {
        result = sub(num1, num2);
    } else if (operation === '3') {
        result = mul(num1, num2);
    } else if (operation === '4') {
        result = div(num1, num2);
    } else {
        console.log("Invalid operation!");
        rl.close();
        return;
    }

    console.log(`Result: ${result}`);

    rl.close();
}

main();
