const solution = (numbers) =>
  Math.max(...numbers) - Math.min(...numbers) - (numbers.length - 1)

module.exports.solution = solution
