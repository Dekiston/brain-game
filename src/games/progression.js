import readlineSync from 'readline-sync';
import {hello, check} from '../cli.js';

const random = () => {
    let firstnumber = Math.floor(Math.random() * (10) + 1);
    let progress = Math.floor(Math.random()* (5) + 1);
    let lengths = Math.floor(Math.random() * (5) + 7);
    let space = Math.floor(Math.random() * (lengths - 1));
    let symbol = ['+','*'];
    symbol = symbol[Math.floor(Math.random() + 0.5)];
    return [firstnumber, progress, lengths, space, symbol];
    
}
const quest = () => {
    const [firstnumber, progress, lengths, space, symbol] = random();
    let result = [];
    let i = 1;
    let lastnumber = firstnumber;
    while (i < lengths) {
        result.push (lastnumber);
        switch (symbol) {
            case '+': lastnumber = lastnumber + progress
            break;

            case '*': lastnumber = lastnumber * progress
            break; }
        i += 1;
    }
    let answer = result[space];
    result[space] = '..';
    console.log (answer);
    const useranswer = readlineSync.question ("Question: " + `${result}` + " = ");

    return check (useranswer, answer);
}

export const progression = () => {

    let name = hello();
    
    console.log ("What number is missing in the progression?");

    if (quest() == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    if (quest() == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    if (quest() == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    console.log ('Congratulations, ' + `${name}` + '!');
}
