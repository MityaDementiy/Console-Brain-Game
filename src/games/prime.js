import playRound from '..';
import getRandom from '../utils';

const instruct = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const question = getRandom(100, 1);
  const correctAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};
const gamePrime = () => playRound(isPrimeGame, instruct);
export default gamePrime;
