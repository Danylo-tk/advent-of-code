const fs = require('fs');
const path = require('path');

// Rock     A X 1
// Paper    B Y 2
// Scessors C Z 3

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log('Task #1: ', totalScore(data));
    
});

const itemsComparator = (firstEl: 'A' | 'B' | 'C', secondEl: 'X' | 'Y' | 'Z') => {
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
  return splitInput(input).reduce((total, currPair) => (total + itemsComparator(currPair[0] as "A" | "B" | "C", currPair[1] as "X" | "Y" | "Z")), 0)
}

/*  */


