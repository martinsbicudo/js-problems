const solution = (low, high) => {
  let result = Math.floor((high - low) / 2)
  return (high % 2 !== 0 || low % 2 !== 0)
    ? result + 1
    : result
}

module.exports.solution = solution
