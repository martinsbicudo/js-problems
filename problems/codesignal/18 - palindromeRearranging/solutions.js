function solution(string) {
  let primeNumbers = 0

  for (letter of [...new Set(string)]) {
    const repeats = string.match(new RegExp(letter, 'g')).length
    if (repeats % 2 === 1) primeNumbers++
    if (primeNumbers > 1) return false
  }

  return true
}

function solution2(string) {
  return [...new Set(string)].filter((letter) =>
    string.match(new RegExp(letter, 'g')).length % 2 === 1).length < 2
}

module.exports.solution = solution
module.exports.solution2 = solution2
