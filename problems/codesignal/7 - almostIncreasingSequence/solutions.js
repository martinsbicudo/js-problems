function solution(numbers) {
  let fail = 0

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i+1]) fail++
    if (numbers[i] <= numbers[i-2] && numbers[i+1] <= numbers[i-1]) fail++
    if (fail > 1) return false
  }

  return true
}

module.exports.solution = solution
