const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log('Task #1: ', findCommonsSum(data));
  console.log('Task #2: ', findGroupsByThreeSum(data))    
});

const splitLine = (line: string) => [line.slice(0, line.length/2), line.slice(line.length/2)];

const findCommon = (line: string[]) => {
  const sets = line.map((item) => new Set(item.split('')));
  const common = [...sets[0]].filter((ch) => 
    sets.every((set) => set.has(ch))
  );

  return common[0];
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

/// Task #2 ->

const groupByThree = (inputArr: string[]) => {
  const groups = [];
  for(let i = 0; i < inputArr.length; i += 3) {
    groups.push(inputArr.slice(i, i + 3));
  }

  return groups;
}

const findGroupsByThreeSum = (data: string) => {
  const lines = groupByThree(data.split('\n'));

  console.log(lines.map(findCommon).map(letterPriority).reduce((accum, currVal) => accum + currVal, 0));
}
