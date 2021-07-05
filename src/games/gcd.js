/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { hello, check, getRandom } from '../cli.js';

const getGcd = (x, y) => {
  if (y === 0) return Math.abs(x);
  return getGcd(y, (x % y));
};

const quest = (x = getRandom(1, 100), y = getRandom(1, 100)) => {
  const answer = getGcd(x, y);

  const useranswer = readlineSync.question(`Question: ${x} ${y} = `);
  return check(useranswer, answer);
};

export const gcd = () => {
  const name = hello();

  console.log('Find the greatest common divisor of given numbers.');

  if (quest() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  if (quest() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  if (quest() === false) {
    console.log(`Let's try again, ${name}!\n`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};
