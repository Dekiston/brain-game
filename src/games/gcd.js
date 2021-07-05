import readlineSync from 'readline-sync';
import {hello, check} from '../cli.js';

const getGcd = (x, y) => {
    if (y === 0) return Math.abs(x);
    return getGcd(y, (x % y));
  };

const quest = (x = Math.floor((Math.random() + 1) * 20), y = Math.floor((Math.random() + 1) * 10)) => {
   
    let answer = getGcd(x,y);
    
    let useranswer = readlineSync.question("Question: " + `${x}` + " " + `${y}` + " = ");

    return check (useranswer, answer);
}

export const gcd = () => {

let name = hello();

console.log ("Find the greatest common divisor of given numbers.");

if (quest () == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
return;}

if (quest () == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
return;}

if (quest () == false) {console.log ("Let's try again, " + `${name}` +  "!" + '\n');
return;}

console.log ('Congratulations, ' + `${name}` + '!');

}

 
