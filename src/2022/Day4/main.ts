const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
  if(err) {
    console.error(err);
    return;
  }

  const splitLines = (input: string) => {
    return input.trim().split('\n');
  }

  const getRangesFromLine = (line: string) => {
    return line.split(',').map((range) => range.split('-').map(Number));
  }

  const isRangeContained = (range: number[][]) => {
    return (range[0][0] <= range[1][0] && range[0][1] >= range[1][1]) || (range[1][0] <= range[0][0] && range[1][1] >= range[0][1]);
  }

  const isRangePartiallyContained = (range: number[][]) => {
    return (range[0][0] <= range[1][1] && range[0][1] >= range[1][0]);
  }

  const findContainedPairs = (input: string) => {
    return splitLines(input)
      .map(getRangesFromLine)
      .map(isRangeContained)
      .filter(Boolean).length;
  }

  const findPartiallyContainedPairs = (input: string) => {
    return splitLines(input)
      .map(getRangesFromLine)
      .map(isRangePartiallyContained)
      .filter(Boolean).length;
  }

  console.log('Task #1: ', findContainedPairs(data));
  console.log('Task #2: ', findPartiallyContainedPairs(data));

});
