import readlineSync from 'readline-sync';

let correctAnswersCounter = 0;
const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);

const playRound = (func) => {
  if (correctAnswersCounter === 3) {
    return console.log(`Congratulations, ${getName}, you passed this round!`);
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
    return console.log(`Let\'s try again, ${getName}!`);
  }
  console.log('Correct!');
  correctAnswersCounter += 1;
  return playRound(func);
};
export default playRound;
