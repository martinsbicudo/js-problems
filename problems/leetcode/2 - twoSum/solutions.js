const solution = (nums, target) => {
  for ([i, number] of Object.entries(nums)) {
    const ni = [...nums].slice(+i+1).indexOf(target - number)
    if (ni >= 0) {
      return [+i, +ni + (+i + 1)]
    }
  }
}

module.exports.solution = solution
