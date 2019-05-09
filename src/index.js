import readlineSync from 'readline-sync';

const playRound = (func) => {
  const [,, giveInstruct] = func();
  const sayWelcome = () => console.log('Welcome to the Brain Games!');
  sayWelcome();
  giveInstruct();
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  const maxRoundPlayed = 3;
  for (let i = 0; i < maxRoundPlayed; i += 1) {
    const [question, correctAnswer] = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${getName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${getName}, you passed this round!`);
};
export default playRound;
