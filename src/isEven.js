import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);

let correctAnswersCounter = 0;

const isEven = () => {
  if (correctAnswersCounter === 3) {
    return console.log(`Congratulations, ${getName}!`);
  }
  const getRandom = () => Math.round(Math.random() * (100 - 1) + 1);
  const randomNum = getRandom();
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer;

  if (randomNum % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (answer !== correctAnswer) {
    // eslint-disable-next-line no-useless-escape
    console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'`);
    // eslint-disable-next-line no-useless-escape
    return console.log(`Let\'s try again, ${getName}!`);
  }
  console.log('Correct!');
  correctAnswersCounter += 1;
  return isEven();
};
export default isEven;
