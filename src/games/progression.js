import readlineSync from 'readline-sync';
import {hello, check, getRandom} from '../cli.js';

const random = () => {
    let firstnumber = getRandom (1, 11);
    let progress = getRandom (1, 11);
    let lengths = getRandom (6, 11)
    let space = Math.floor(Math.random() * (lengths - 1));
    let symbol = ['+','*'];
    symbol = symbol[getRandom(0, 2)];
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

    const useranswer = readlineSync.question ("Question: " + result + " = ");

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
