import readlineSync from 'readline-sync';

let correctAnswersCounter = 0;
const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);

const playRound = (func) => {
  if (correctAnswersCounter === 3) {
    console.log(`Congratulations, ${getName}, you passed this round!`);
    return;
  }
  const gameInfo = func();
  const question = gameInfo[0];
  const correctAnswer = gameInfo[1];
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    // eslint-disable-next-line no-useless-escape
    console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'`);
    // eslint-disable-next-line no-useless-escape
    console.log(`Let\'s try again, ${getName}!`);
    return;
  }
  console.log('Correct!');
  correctAnswersCounter += 1;
  playRound(func);
};
export default playRound;
