import readlineSync from 'readline-sync';

const maxRoundPlayed = 3;
const sayWelcome = () => console.log('Welcome to the Brain Games!');

const playRound = (game, instruction) => {
  sayWelcome();
  console.log(instruction);
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  for (let i = 0; i < maxRoundPlayed; i += 1) {
    const [question, correctAnswer] = game();
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
