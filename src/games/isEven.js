console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const isEven = () => {
  const getRandom = () => Math.round(Math.random() * (100 - 1) + 1);
  const randomNum = getRandom();
  const question = randomNum;
  let correctAnswer;

  if (randomNum % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const gameData = [question, correctAnswer];
  return gameData;
};
export default isEven;
