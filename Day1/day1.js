let part2 = 0;
const input = require('fs').readFileSync("Day1/input", 'utf-8')
    .split('\n')
    .filter(Boolean)
    .reduce((totalFuel, fuel) => {
      const requiredFuel =  Math.floor(parseInt(fuel) / 3) - 2;
      let totalRequiredFuel = requiredFuel;
      while (totalRequiredFuel > 0) {
        part2 = part2 + totalRequiredFuel;
        totalRequiredFuel = Math.floor(totalRequiredFuel / 3) - 2;
      }
      return totalFuel + requiredFuel;
    }, 0);

console.log('part 1: ', input);
console.log('part 2:', part2);
