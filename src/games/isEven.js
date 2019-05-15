import playRound from '..';
import getRandom from '../utils';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const playEven = () => {
  const question = getRandom(100, 1);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};
export default () => playRound(playEven, instruction);
