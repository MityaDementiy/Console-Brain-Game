import playRound from '..';
import getRandom from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const defineGcd = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const playGcd = () => {
  const firstRandomNum = getRandom(100, 1);
  const secondRandomNum = getRandom(100, 1);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = defineGcd(firstRandomNum, secondRandomNum);
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default () => playRound(playGcd, instruction);
