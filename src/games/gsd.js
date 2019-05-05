console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

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
  const getRandom = () => Math.round(Math.random() * (100 - 1) + 1);
  const firstRandomNum = getRandom();
  const secondRandomNum = getRandom();
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = defineGsd(firstRandomNum, secondRandomNum);
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default findGsd;
