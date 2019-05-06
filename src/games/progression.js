console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');

const getRandom = () => Math.round(Math.random() * (80 - 1) + 1);
const getRandomForProgression = () => Math.round(Math.random() * (10 - 1));

const findMissedNum = () => {
  const firstNumInProgression = getRandom();
  const progression = [];
  progression.push(firstNumInProgression);
  for (let i = progression[0] + 2; i < progression[0] + 20; i += 2) {
    progression.push(i);
  }
  const substituteInProgression = getRandomForProgression();
  progression[substituteInProgression] = '..';
  const firstNum = progression[0];
  const secondNum = progression[1];
  const thirdNum = progression[2];
  const fourthNum = progression[3];
  const fifthNum = progression[4];
  const sixthNum = progression[5];
  const seventhNum = progression[6];
  const eightNum = progression[7];
  const ninethNum = progression[8];
  const tenthNum = progression[9];
  const question = `${firstNum} ${secondNum} ${thirdNum} ${fourthNum} ${fifthNum} ${sixthNum} ${seventhNum} ${eightNum} ${ninethNum} ${tenthNum}`;
  const beforeMissedNum = progression[substituteInProgression - 1];
  const afterMissedNum = progression[substituteInProgression + 1];
  let correctAnswer;
  if (substituteInProgression === 1) {
    correctAnswer = afterMissedNum - 2;
  }
  correctAnswer = beforeMissedNum + 2;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default findMissedNum;
