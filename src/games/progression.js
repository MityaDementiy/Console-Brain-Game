import playRound from '..';
import getRandom from '../utils';

const instruction = 'What number is missing in the progression?';

const findMissedNum = () => {
  const firstNumInProgression = getRandom(100, 1);
  const progression = [];
  progression.push(firstNumInProgression);
  const progressionStep = getRandom(10, 2);
  const progressionLength = 10;
  const maxNumInProgression = progression[0] + progressionLength * progressionStep;
  for (let i = progression[0] + progressionStep; i < maxNumInProgression; i += progressionStep) {
    progression.push(i);
  }
  const substituteInProgression = getRandom(progressionLength - 1, 0);
  progression[substituteInProgression] = '..';
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question = `${question} ${progression[i]}`;
  }
  let correctAnswer;
  if (substituteInProgression === 0) {
    correctAnswer = progression[1] - progressionStep;
  } else {
    correctAnswer = progression[substituteInProgression - 1] + progressionStep;
  }
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
const gameProgression = () => playRound(findMissedNum, instruction);
export default gameProgression;
