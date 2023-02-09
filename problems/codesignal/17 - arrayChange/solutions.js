function solution(inputArray) {
  let numbers = inputArray

  return numbers.slice(1).reduce((amount, number, i) => {
    if (numbers[i] < number) return amount
    const incrementAmount = numbers[i] > number
      ? (numbers[i] - number + 1) : 1
    numbers[i+1] += incrementAmount
    return amount + incrementAmount
  }, 0)
}

module.exports.solution = solution
