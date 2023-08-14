const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log('Task #1: ', findCommonsSum(data));
    
});

const splitLine = (line: string) => [line.slice(0, line.length/2), line.slice(line.length/2)];

const findCommon = (line: string[]) => {
  const sets = line.map((item) => new Set(item.split('')));
  let common: string = '';

  for(const el of sets[1]) {
    if(sets[0].has(el)){
      common = el;
    }
  }

  return common;
}

const letterPriority = (letter: string) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.indexOf(letter) + 1;
}

const findCommonsSum = (data: string) => {
  const lines = data
    .split('\n')
    .map(splitLine);
  const commonCharsSum = lines
    .map(findCommon)
    .map(letterPriority)
    .reduce((accum, currVal) => accum + currVal, 0);

  return commonCharsSum;
}
