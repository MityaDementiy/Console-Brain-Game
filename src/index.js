import readlineSync from 'readline-sync';

const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  console.log('Type \'brain-even\' to play Brain Even game.');
  console.log('Type \'brain-calc\' to play Brain Calc game.');
};
export default sayHi;
