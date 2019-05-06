console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const isPrimeGame = () => {
  const getRandom = () => Math.round(Math.random() * (100 - 1) + 1);
  const question = getRandom();
  let correctAnswer;
  if (question < 2) {
    correctAnswer = 'no';
  } else if (question === 2) {
    correctAnswer = 'yes';
  } else {
    for (let i = question - 1; i >= 2; i -= 1) {
      const rest = question % i;
      if (rest === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  }
  const gameData = [question, correctAnswer];
  return gameData;
};
export default isPrimeGame;
