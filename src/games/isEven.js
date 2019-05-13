import playRound from '..';
import getRandom from '../utils';

const instruct = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const playEven = () => {
  const question = getRandom(100, 1);
  const correctAnswer = isEven(question);
  const gameData = [question, correctAnswer];
  return gameData;
};
const gameEven = () => playRound(playEven, instruct);
export default gameEven;
