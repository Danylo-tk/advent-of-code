const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err: any, data: string) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('hello')
    const elfInventories = data.trim().split("\n\n").map((inventory) => inventory.split("\n").map(Number));
    const totalCaloriesPerElf = elfInventories.map((inventory) => inventory.reduce((sum, calories) => sum + calories, 0));

    console.log('Part #1: ', Math.max(...totalCaloriesPerElf));

    const topThree = totalCaloriesPerElf.sort((a, b) => b - a);
    console.log('Part #2: ', topThree[0] + topThree[1] + topThree[2])
})
