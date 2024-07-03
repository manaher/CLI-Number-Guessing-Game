#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Manaher's CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Number limit from 1 to 5)",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("\n\tCongratulations you guessed a right number.\n")
}
else{
    console.log("\n\tSorry! you guessed a wrong number.\n")
}