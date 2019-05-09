import playRound from '..';
import getRandom from '../utils';

const isEven = () => {
  const question = getRandom(100, 1);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const giveInstruct = () => console.log('Answer "yes" if number even otherwise answer "no".');
  const gameData = [question, correctAnswer, giveInstruct];
  return gameData;
};
const gameEven = () => playRound(isEven);
export default gameEven;
