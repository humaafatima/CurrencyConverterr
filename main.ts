#! usr/bin/env node
import inquirer from "inquirer"

const currency: any = {
USD: 1, //Base currency
EUR: 0.93,
Pound: 0.80,
PKR: 277
};

let user_answer = await inquirer.prompt(
    [{
    name: 'from',
    message: "Enter from Currency",
    type: 'list',
    choices: ['USD', 'EUR', 'Pound', 'PKR']
},
    {
    name: 'to',
    message: "Enter to Currency",
    type: 'list',
    choices: ['USD', 'EUR', 'Pound', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number'
    }
    ]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(convertedAmount);
