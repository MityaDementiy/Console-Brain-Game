import readlineSync from 'readline-sync';

const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);

const playRound = (func, correctAnswersCounter = 0) => {
  const maxRoundPlayed = 3;
  if (correctAnswersCounter === maxRoundPlayed) {
    console.log(`Congratulations, ${getName}, you passed this round!`);
    return;
  }
  const [question, correctAnswer] = func();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${getName}!`);
    return;
  }
  console.log('Correct!');
  playRound(func, correctAnswersCounter + 1);
};
export default playRound;
