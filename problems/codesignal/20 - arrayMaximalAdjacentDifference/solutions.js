function solution(numbers) {
  return numbers.slice(1).reduce((value, number, i) =>
    Math.max(value, Math.abs(number - numbers[i]))
  , 0)
}

module.exports.solution = solution
