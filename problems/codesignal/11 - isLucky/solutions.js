function solution(n) {
  const stringNumber = n.toString()
  const amountNumbersToSum = stringNumber.length / 2
  const sums = [...stringNumber].reduce((currentSums, number, i) => {
    if (i < amountNumbersToSum) currentSums.left += +number
    else currentSums.right += +number
    return currentSums
  }, { left: 0, right: 0 })

  return sums.left === sums.right
}

module.exports.solution = solution
