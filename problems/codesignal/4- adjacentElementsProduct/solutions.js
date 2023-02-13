const solution = (numbers) =>
  Math.max(...numbers.slice(1).map((x,i)=>[x*numbers[i]]))

module.exports.solution = solution
