const solution = (a, b) => {
  const max = Math.max(a,b)
  const min = Math.min(a,b)

  if (max % min === 0) return min

  const dividers = [...new Array(min-1).keys()].reverse().slice(0, -1)

  return dividers.find((divider) => {
    return a % divider === 0 && b % divider === 0
  })
}

module.exports.solution = solution
