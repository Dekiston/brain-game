import readlineSync from 'readline-sync';
import {hello, check, getRandom} from '../cli.js';

const random = () => {
    let firstnumber = getRandom (1, 11);
    let progress = getRandom (1, 11);
    let lengths = getRandom (5, 11);
    let space = Math.floor(Math.random() * (lengths - 1));
    let symbol = ['+','*'];
    symbol = symbol[getRandom(0, 2)];
    return [firstnumber, progress, lengths, space, symbol];
    
}
const quest = () => {
    const [firstnumber, progress, lengths, space, symbol] = random();
    let result = [];
    let i = 0;
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
    result = result.join (' ');

    const useranswer = readlineSync.question ("Question: " + result + " = ");

    return [useranswer, answer];
}

export const progression = () => {

    
    let name = hello();
    
    console.log ("What number is missing in the progression?");
    let [useranswer, answer] = quest();

    if (check(useranswer, answer) == false) {console.log (`${useranswer}` + ' is wrong answer ;(. Correct answer was ' +  `${answer}` +  ". \n Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    [useranswer, answer] = quest();

    if (check(useranswer, answer) == false) {console.log (`${useranswer}` + ' is wrong answer ;(. Correct answer was ' +  `${answer}` +  ". \n Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    [useranswer, answer] = quest();
    
    if (check(useranswer, answer) == false) {console.log (`${useranswer}` + ' is wrong answer ;(. Correct answer was ' +  `${answer}` +  ". \n Let's try again, " + `${name}` +  "!" + '\n');
    return;}

    console.log ('Congratulations, ' + `${name}` + '!');
}
