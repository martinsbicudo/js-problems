function solution(a, b) {
  const diffsA = a.filter((value, i) => value != b[i])
  const diffsALength = diffsA.length

  if (diffsALength === 0 || diffsALength > 2)
    return diffsALength === 0

  const diffsB = b.filter((value, i) => value != a[i])

  return diffsA.join('') === diffsB.reverse().join('')
}

module.exports.solution = solution
