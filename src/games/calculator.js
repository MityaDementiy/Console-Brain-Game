import playRound from '..';
import getRandom from '../utils';

const instruct = 'What is the result of the expression?';

const calculate = () => {
  const firstRandomNum = getRandom(100, 1);
  const secondRandomNum = getRandom(100, 1);
  const numOfMathAction = getRandom(3, 1);

  let mathSymbol;
  let correctAnswer;
  switch (numOfMathAction) {
    case 1:
      mathSymbol = '+';
      correctAnswer = firstRandomNum + secondRandomNum;
      break;
    case 2:
      mathSymbol = '-';
      correctAnswer = firstRandomNum - secondRandomNum;
      break;
    default:
      mathSymbol = '*';
      correctAnswer = firstRandomNum * secondRandomNum;
  }
  const question = `${firstRandomNum} ${mathSymbol} ${secondRandomNum}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
const gameCalc = () => playRound(calculate, instruct);
export default gameCalc;
