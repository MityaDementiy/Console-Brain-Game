import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);
let correctAnswersCounter = 0;
const calculate = () => {
  if (correctAnswersCounter === 3) {
    return console.log(`Congratulations, ${getName}!`);
  }
  const getRandom = () => Math.round(Math.random() * (100 - 1) + 1);
  const getRandomForMathAction = () => Math.round(Math.random() * (3 - 1) + 1);
  const firstRandomNum = getRandom();
  const secondRandomNum = getRandom();
  const numOfMathAction = getRandomForMathAction();

  let mathSymbol;

  if (numOfMathAction === 1) {
    mathSymbol = '+';
  } else if (numOfMathAction === 2) {
    mathSymbol = '-';
  } else if (numOfMathAction === 3) {
    mathSymbol = '*';
  }

  console.log(`Question: ${firstRandomNum} ${mathSymbol} ${secondRandomNum}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer;

  if (numOfMathAction === 1) {
    correctAnswer = firstRandomNum + secondRandomNum;
  } else if (numOfMathAction === 2) {
    correctAnswer = firstRandomNum - secondRandomNum;
  } else if (numOfMathAction === 3) {
    correctAnswer = firstRandomNum * secondRandomNum;
  }

  if (answer !== correctAnswer.toString()) {
    // eslint-disable-next-line no-useless-escape
    console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'`);
    // eslint-disable-next-line no-useless-escape
    return console.log(`Let\'s try again, ${getName}!`);
  }
  console.log('Correct!');
  correctAnswersCounter += 1;
  return calculate();
};
export default calculate;
