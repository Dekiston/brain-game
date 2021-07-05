import readlineSync from 'readline-sync';
import {hello, check} from '../cli.js';

const quest = (x = Math.floor(Math.random() * 200), y = Math.floor(Math.random() * 100)) => {

let symbols = ['*', '-', '+'];

const symbol = symbols [Math.floor(Math.random() * 3)];

let answer = 0;

switch (symbol) {
    case '+':
        answer = x + y;
        break;
    case '-':
        answer = x - y;
        break;
    case '*':
        answer = x * y;
        break;
    default:
        answer = 0; }

const useranswer = readlineSync.question ("Question: " + `${x}` + `${symbol}` + `${y}` + " = ");

return check (useranswer, answer);
}

export const calc = () => {

    let name = hello();

    console.log ('What is the result of the expression?'); 

    if (quest() == false) {console.log ("Let's try again, " + `${name}` + '\n');
    return;}

    if (quest() == false) {console.log ("Let's try again, " + `${name}` + '\n');
    return;}

    if (quest() == false) {console.log ("Let's try again, " + `${name}` + '\n');
    return;}

    console.log ('Congratulations, ' + `${name}`);
    
}


