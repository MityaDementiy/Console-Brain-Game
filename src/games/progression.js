import playRound from '..';
import getRandom from '../utils';

const instruct = 'What number is missing in the progression?';

const findMissedNum = () => {
  const firstNumInProgression = getRandom(80, 1);
  const progression = [];
  progression.push(firstNumInProgression);
  for (let i = progression[0] + 2; i < progression[0] + 20; i += 2) {
    progression.push(i);
  }
  const substituteInProgression = getRandom(9, 0);
  progression[substituteInProgression] = '..';
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question = `${question} ${progression[i]}`;
  }
  const beforeMissedNum = progression[substituteInProgression - 1];
  const afterMissedNum = progression[substituteInProgression + 1];
  let correctAnswer;
  if (substituteInProgression === 0) {
    correctAnswer = afterMissedNum - 2;
  } else {
    correctAnswer = beforeMissedNum + 2;
  }
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
const gameProgression = () => playRound(findMissedNum, instruct);
export default gameProgression;
