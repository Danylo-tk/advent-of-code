const fs = require('fs');
const path = require('path');

type FirstEl = 'A' | 'B' | 'C';
type SecondEl = 'X' | 'Y' | 'Z';

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log('Task #1: ', totalScore(data));
  console.log('Task #2: ', changedTotalScore(data));
    
});

// Rock     A X 1
// Paper    B Y 2
// Scessors C Z 3

const itemsComparator = (firstEl: FirstEl, secondEl: SecondEl) => {
  const elementScore = {X: 1, Y: 2, Z: 3};
  const scoreForRound = {
    A: {X: 3, Y: 6, Z: 0},
    B: {X: 0, Y: 3, Z: 6},
    C: {X: 6, Y: 0, Z: 3},
  }
  
  return elementScore[secondEl] + scoreForRound[firstEl][secondEl];
}

const splitInput = (input: string) => input.split('\n').map(pair => pair.split(' '));

const totalScore = (input: string) => {
  return splitInput(input).reduce((total, currPair) => (total + itemsComparator(currPair[0] as FirstEl, currPair[1] as SecondEl)), 0)
}

/*  */

// Loose X
// Draw  Y
// Win   Z

const getSecondElementByResult = (firstEl: FirstEl, secondEl: SecondEl) => {
  const elementForResult = {
    A: {X: 'Z', Y: 'X', Z: 'Y'},
    B: {X: 'X', Y: 'Y', Z: 'Z'},
    C: {X: 'Y', Y: 'Z', Z: 'X'},
  };

  return elementForResult[firstEl][secondEl];
}
 
const changedTotalScore = (input: string) => {
  return splitInput(input)
  .map((currPair) => [currPair[0], getSecondElementByResult(currPair[0] as FirstEl, currPair[1] as SecondEl)])
  .reduce((total, currPair) => (total + itemsComparator(currPair[0] as FirstEl, currPair[1] as SecondEl)), 0);
}
