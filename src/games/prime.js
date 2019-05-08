import playRound from '..';
import getRandom from '../utils';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const isPrimeGame = () => {
  const question = getRandom(100, 1);
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
const gamePrime = () => playRound(isPrimeGame);
export default gamePrime;
