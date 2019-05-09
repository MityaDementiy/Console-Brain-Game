import playRound from '..';
import getRandom from '../utils';

const calculate = () => {
  const giveInstruct = () => console.log('What is the result of the expression?');
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
  const gameData = [question, correctAnswer.toString(), giveInstruct];
  return gameData;
};
const gameCalc = () => playRound(calculate);
export default gameCalc;
