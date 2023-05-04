function solution(inputString) {
    const groups = inputString.split('.')

    return groups.length === 4 && groups.every((group) =>
      group === '0' || group && !group.includes('0') && group <= 255)
}

module.exports.solution = solution
