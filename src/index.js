import readlineSync from 'readline-sync';

const getName = readlineSync.question('May I have your name? ');
const sayWelcome = () => console.log('Welcome to the Brain Games!');

const playRound = (func, correctAnswersCounter = 0) => {
  const [question, correctAnswer, giveInstruct] = func();
  if (correctAnswersCounter === 0) {
    console.log(`Hello, ${getName}!`);
    sayWelcome();
    giveInstruct();
  }
  const maxRoundPlayed = 3;
  if (correctAnswersCounter === maxRoundPlayed) {
    console.log(`Congratulations, ${getName}, you passed this round!`);
    return;
  }
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${getName}!`);
    return;
  }
  console.log('Correct!');
  playRound(func, correctAnswersCounter + 1);
};
export default playRound;
