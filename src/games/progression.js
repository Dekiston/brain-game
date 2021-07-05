/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { hello, check, getRandom } from '../cli.js';

const random = () => {
  const firstnumber = getRandom(1, 11);
  const progress = getRandom(1, 11);
  const lengths = getRandom(5, 11);
  const space = Math.floor(Math.random() * (lengths - 1));
  return [firstnumber, progress, lengths, space];
};
const quest = () => {
  const [firstnumber, progress, lengths, space] = random();
  let result = [];
  let i = 0;
  let lastnumber = firstnumber;
  while (i < lengths) {
    result.push(lastnumber);
    lastnumber += progress;
    i += 1;
  }
  const answer = result[space];
  result[space] = '..';
  result = result.join(' ');

  const useranswer = readlineSync.question(`Question: ${result} = `);

  return [useranswer, answer];
};

export const progression = () => {
  const name = hello();

  console.log('What number is missing in the progression?');
  let [useranswer, answer] = quest();

  if (check(useranswer, answer) === false) {
    console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!\n`);
    return;
  }

  [useranswer, answer] = quest();

  if (check(useranswer, answer) === false) {
    console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!\n`);
    return;
  }

  [useranswer, answer] = quest();

  if (check(useranswer, answer) === false) {
    console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!\n`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};
