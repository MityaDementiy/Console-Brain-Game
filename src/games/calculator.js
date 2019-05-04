console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const calculate = () => {
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

  let correctAnswer;

  if (numOfMathAction === 1) {
    correctAnswer = firstRandomNum + secondRandomNum;
  } else if (numOfMathAction === 2) {
    correctAnswer = firstRandomNum - secondRandomNum;
  } else if (numOfMathAction === 3) {
    correctAnswer = firstRandomNum * secondRandomNum;
  }
  const question = `${firstRandomNum} ${mathSymbol} ${secondRandomNum}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default calculate;
