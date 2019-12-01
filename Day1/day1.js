const input = require('fs').readFileSync("Day1/input", 'utf-8')
    .split('\n')
    .filter(Boolean)
    .reduce((totalFuel, fuel) => {
      const requiredFuel =  Math.floor(parseInt(fuel) / 3) - 2;
      return totalFuel + requiredFuel;
    }, 0);

console.log(input);
