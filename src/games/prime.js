/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { hello, check, getRandom } from '../cli.js';

const isPrime = () => {
  const number = getRandom(0, 100);

  const simpleNumber = (operand) => {
    if (operand <= 1) return false;
    for (let counter = 2; counter <= (operand / 2); counter += 1) {
      if (operand % counter === 0) return false;
    } return true;
  };

  const answer = simpleNumber(number);

  let useranswer = readlineSync.question(`Question: ${number} = `);

  if (useranswer === 'yes') { useranswer = true; } else if (useranswer === 'no') { useranswer = false; } else { useranswer = NaN; }

  return check(useranswer, answer);
};

const prime = () => {
  const name = hello();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  if (isPrime() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  if (isPrime() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  if (isPrime() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default prime;
