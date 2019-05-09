import playRound from '..';
import getRandom from '../utils';

const defineGsd = (a, b) => {
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

const findGsd = () => {
  const giveInstruct = () => console.log('Find the greatest common divisor of given numbers.');
  const firstRandomNum = getRandom(100, 1);
  const secondRandomNum = getRandom(100, 1);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = defineGsd(firstRandomNum, secondRandomNum);
  const gameData = [question, correctAnswer.toString(), giveInstruct];
  return gameData;
};
const gameGsd = () => playRound(findGsd);
export default gameGsd;
