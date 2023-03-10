function solution(s1, s2) {
  const letters = [...new Set(s1)]

  return letters.reduce((amount, letter) => {
    if (s1.includes(letter) && s2.includes(letter)) {
      const s1Repeats = s1.split(letter).length - 1
      const s2Repeats = s2.split(letter).length - 1
      const repeats = s1Repeats < s2Repeats ? s1Repeats : s2Repeats
      return amount + repeats
    }

    return amount
  }, 0)
}

function solution2(s1, s2) {
  const stringWithReplaces = [...s1].reduce((string, letter) => string.replace(letter, '?'), s2)
  return stringWithReplaces.split('?').length - 1
}

module.exports.solution = solution
module.exports.solution2 = solution2
