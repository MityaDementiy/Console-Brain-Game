import playRound from '..';
import getRandom from '../utils';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const isEven = () => {
  const question = getRandom(100, 1);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};
const gameEven = () => playRound(isEven);
export default gameEven;
