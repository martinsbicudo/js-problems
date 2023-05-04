const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][arrayMaximalAdjacentDifference] should return 3', t => {
  const result = solution([2, 4, 1, 0])
  t.is(result, 3)
})

test('[codesign][arrayMaximalAdjacentDifference] should return 0', t => {
  const result = solution([1, 1, 1, 1])
  t.is(result, 0)
})

test('[codesign][arrayMaximalAdjacentDifference] should return 7', t => {
  const result = solution([-1, 4, 10, 3, -2])
  t.is(result, 7)
})

test('[codesign][arrayMaximalAdjacentDifference] should return 2', t => {
  const result = solution([10, 11, 13])
  t.is(result, 2)
})

test('[codesign][arrayMaximalAdjacentDifference] should return 4', t => {
  const result = solution([-1, 1, -3, -4])
  t.is(result, 4)
})

test('[codesign][arrayMaximalAdjacentDifference] should return 30', t => {
  const result = solution([-14, 15, -15])
  t.is(result, 30)
})
