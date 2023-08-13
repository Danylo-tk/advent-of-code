const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log(findOneCommon(data));
    
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

const letterIndex = (letter: string) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return letters.indexOf(letter) + 1;
}

const findOneCommon = (input: string) => {
  const lines = input.split('\n');
  const splitedLines = lines.map(splitLine);
  const commonChars = splitedLines
    .map(findCommon)
    .map(letterIndex)
    .reduce((accum, currVal) => accum + currVal, 0);

  return commonChars;
}
