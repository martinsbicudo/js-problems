function solution(a) {
  const heights = a.filter((height) => height > 0).sort((a, b) => a - b)

  a.forEach((value, i) => {
    if (value === -1) {
      heights.splice(i, 0, value)
    }
  })

  return heights
}

module.exports.solution = solution
