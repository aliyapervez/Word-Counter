//import the 'inquirer' module,which is command line interface for Node.js
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a sentence to count the words"
    }
]);
const words = answers.Sentence.trim().split(" ").length;
console.log(`your sentence has ${words} words`);
