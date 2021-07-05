import readlineSync from 'readline-sync';
import { hello, check } from '../cli.js';

// eslint-disable-next-line import/prefer-default-export
export const even = () => {
  const name = hello();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questions = (question) => {
    let answer = '';

    const useranswer = readlineSync.question('Question: ' + `${question}` + '\n' + 'Your answer: ');

    if (question % 2 == 0) { answer = 'yes'; } else { answer = 'no'; }

    return check(useranswer, answer);
  };

  if (questions(15) == false) {
    console.log("Let's try again, " + `${name}` + '!' + '\n');
    return;
  }

  if (questions(6) == false) {
    console.log("Let's try again, " + `${name}` + '!' + '\n');
    return;
  }

  // eslint-disable-next-line eqeqeq
  if (questions(7) == false) {
    console.log("Let's try again, " + `${name}` + '!' + '\n');
    return;
  }

  console.log('Congratulations, ' + `${name}` + '!');
};
