import playRound from '..';
import getRandom from '../utils';

const instruction = 'What number is missing in the progression?';
const progressionLength = 10;

const playProgression = () => {
  const progressionStep = getRandom(10, 2);
  const firstNum = getRandom(100, 1);
  const substituteInProgression = getRandom(progressionLength - 1, 0);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === substituteInProgression) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstNum + progressionStep * i}`;
    }
  }
  const correctAnswer = firstNum + substituteInProgression * progressionStep;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default () => playRound(playProgression, instruction);
