import readlineSync from 'readline-sync';

export const hello = () => {

    console.log ("Welcome to the Brain Games!");    

    const name = readlineSync.question('May I have your name? ');

    console.log ('Hello, ' + `${name}`);

    return name; };

export const check = (useranswer, answer) => {
    
    if (useranswer == answer) {console.log ('Correct!' + '\n');}
    
    else {return false;}
}

export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; }