const solution = (str) =>
  [...str].every((s, i) => str.at(i - 1) === str.at(-i))

module.exports.solution = solution
